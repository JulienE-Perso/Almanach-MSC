'use strict';

const { seedData, translations } = window.MSC_DATA;
const STORAGE_KEY = 'msc-app-state';
const SELECTED_EVENT_KEY = 'msc-selected-event';

const RELATIVE_TIME_RANGES = [
    { unit: 'year', ms: 1000 * 60 * 60 * 24 * 365 },
    { unit: 'month', ms: 1000 * 60 * 60 * 24 * 30 },
    { unit: 'week', ms: 1000 * 60 * 60 * 24 * 7 },
    { unit: 'day', ms: 1000 * 60 * 60 * 24 },
    { unit: 'hour', ms: 1000 * 60 * 60 },
    { unit: 'minute', ms: 1000 * 60 },
    { unit: 'second', ms: 1000 }
];

const relativeFormatter = {
    fr: new Intl.RelativeTimeFormat('fr', { numeric: 'auto' }),
    en: new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
};

const numberFormatter = {
    fr: new Intl.NumberFormat('fr-FR'),
    en: new Intl.NumberFormat('en-US')
};

let formatters = createFormatters('fr');

const detailState = {
    language: 'fr',
    currentUserId: null,
    events: [],
    members: [],
    memberById: new Map(),
    eventDiscussions: new Map(),
    selectedEventId: null
};

let snapshot = null;
let currentEvent = null;

document.addEventListener('DOMContentLoaded', init);

function init() {
    snapshot = loadSnapshot();
    hydrateStateFromSnapshot(snapshot);

    const eventId = getSelectedEventId();
    if (!eventId) {
        renderError(detailState.language === 'fr' ? 'Aucun événement sélectionné.' : 'No event selected.');
        return;
    }

    detailState.selectedEventId = eventId;
    sessionStorage.setItem(SELECTED_EVENT_KEY, eventId);

    currentEvent = detailState.events.find((event) => event.id === eventId);
    if (!currentEvent) {
        const fallback = seedData.events.find((event) => event.id === eventId);
        if (!fallback) {
            renderError(detailState.language === 'fr' ? 'Événement introuvable.' : 'Event not found.');
            return;
        }
        currentEvent = cloneEvent(fallback);
        detailState.events.push(currentEvent);
    }

    formatters = createFormatters(detailState.language);
    renderPage();
    bindHandlers();
}

function loadSnapshot() {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch (error) {
        console.warn('MSC_EVENT_DETAIL: unable to parse persisted state', error);
        return null;
    }
}

function hydrateStateFromSnapshot(data) {
    const membersSource = data?.members || seedData.members;
    detailState.members = membersSource.map((member) => ({ ...member }));
    detailState.memberById = new Map(detailState.members.map((member) => [member.id, member]));

    const eventsSource = data?.events || seedData.events;
    detailState.events = eventsSource.map((event) => cloneEvent(event));

    const discussionsSource = data?.eventDiscussions
        ? new Map(data.eventDiscussions.map(([eventId, messages]) => [
              eventId,
              (messages || []).map((message) => ({ ...message }))
          ]))
        : cloneEventDiscussions(seedData.eventDiscussions);
    detailState.eventDiscussions = discussionsSource;

    detailState.currentUserId = data?.currentUserId || null;
    detailState.language = data?.language || 'fr';
}

function cloneEvent(event) {
    return {
        ...event,
        participants: [...(event.participants || [])],
        ticketing: (event.ticketing || []).map((platform) => ({ ...platform }))
    };
}

function cloneEventDiscussions(source) {
    return new Map(
        Object.entries(source || {}).map(([eventId, messages]) => [
            eventId,
            (messages || []).map((message) => ({ ...message }))
        ])
    );
}

function getSelectedEventId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('eventId') || sessionStorage.getItem(SELECTED_EVENT_KEY);
}

function renderPage() {
    document.documentElement.lang = detailState.language;
    renderTopBar();
    renderEventOverview();
    renderDiscussionSection();
}

function bindHandlers() {
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', handleBackNavigation);
    }
    const languageToggle = document.getElementById('detailLanguageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', handleLanguageToggle);
    }
    document.body.addEventListener('click', handleGlobalClick);
    document.addEventListener('submit', handleGlobalSubmit, true);
}

function handleBackNavigation() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

function handleLanguageToggle() {
    detailState.language = detailState.language === 'fr' ? 'en' : 'fr';
    formatters = createFormatters(detailState.language);
    renderPage();
    saveSnapshot();
}

function handleGlobalClick(event) {
    const platformButton = event.target.closest('[data-platform-url]');
    if (platformButton) {
        const url = platformButton.dataset.platformUrl;
        if (!url || url === '#') {
            const msg = detailState.language === 'fr' ? 'Réservation MSC disponible prochainement.' : 'MSC booking coming soon.';
            showToast(msg, 'info');
        } else {
            window.open(url, '_blank');
        }
        return;
    }

    const participationButton = event.target.closest('[data-role="toggle-participation"]');
    if (participationButton) {
        handleParticipationToggle();
        return;
    }

    const shareButton = event.target.closest('[data-role="share-event"]');
    if (shareButton) {
        handleShareEvent();
    }
}

function handleGlobalSubmit(event) {
    const form = event.target.closest('form[data-role="event-discussion-form"]');
    if (!form) return;
    event.preventDefault();

    if (!detailState.currentUserId) {
        const message = detailState.language === 'fr'
            ? 'Veuillez vous connecter pour participer aux discussions.'
            : 'Please sign in to join the discussions.';
        showToast(message, 'error');
        return;
    }

    const textarea = form.querySelector('textarea[name="message"]');
    const content = (textarea?.value || '').trim();
    if (!content) {
        const message = detailState.language === 'fr' ? 'Votre message est vide.' : 'Your message is empty.';
        showToast(message, 'error');
        return;
    }

    const messages = detailState.eventDiscussions.get(detailState.selectedEventId) || [];
    messages.push({
        id: generateId('ed'),
        authorId: detailState.currentUserId,
        content,
        createdAt: new Date().toISOString()
    });
    detailState.eventDiscussions.set(detailState.selectedEventId, messages);
    if (textarea) textarea.value = '';
    renderDiscussionSection();
    showToast(detailState.language === 'fr' ? 'Message publié' : 'Message posted', 'success');
    saveSnapshot();
}

function handleParticipationToggle() {
    if (!detailState.currentUserId) {
        const message = detailState.language === 'fr'
            ? 'Connectez-vous pour confirmer votre participation.'
            : 'Sign in to update your attendance.';
        showToast(message, 'error');
        return;
    }
    const participants = currentEvent.participants;
    const index = participants.indexOf(detailState.currentUserId);
    if (index >= 0) {
        participants.splice(index, 1);
        const msg = detailState.language === 'fr' ? 'Participation annulée.' : 'RSVP cancelled.';
        showToast(msg, 'info');
    } else {
        participants.push(detailState.currentUserId);
        const msg = detailState.language === 'fr' ? 'Participation enregistrée.' : 'RSVP saved.';
        showToast(msg, 'success');
    }
    renderEventOverview();
    renderDiscussionSection();
    saveSnapshot();
}

function handleShareEvent() {
    const url = window.location.href;
    const message = detailState.language === 'fr'
        ? 'Lien copié dans le presse-papiers.'
        : 'Link copied to clipboard.';
    if (navigator.share) {
        navigator.share({ title: currentEvent.title, url }).catch(() => {});
        return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => showToast(message, 'success')).catch(() => showToast(message, 'info'));
    } else {
        showToast(message, 'info');
    }
}

function renderTopBar() {
    const languageToggle = document.getElementById('detailLanguageToggle');
    if (languageToggle) {
        languageToggle.dataset.lang = detailState.language;
        languageToggle.textContent = detailState.language.toUpperCase();
    }

    const eventTitle = document.getElementById('eventTitle');
    if (eventTitle) {
        eventTitle.textContent = currentEvent.title;
    }

    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.textContent = detailState.language === 'fr' ? '← Retour' : '← Back';
    }
}

function renderEventOverview() {
    const container = document.getElementById('eventOverview');
    if (!container) return;
    const categoryLabel = translate(`categories.${currentEvent.category}`) || currentEvent.category;
    const price = formatPrice(currentEvent);
    const attendees = translate('labels.attendees', currentEvent.participants.length);
    const participantNames = currentEvent.participants
        .map((id) => detailState.memberById.get(id)?.name || (detailState.language === 'fr' ? 'Membre MSC' : 'MSC member'))
        .join(', ');
    const ticketing = (currentEvent.ticketing || [])
        .map((platform) => renderTicketingPlatform(platform))
        .join('');

    const isParticipant = detailState.currentUserId && currentEvent.participants.includes(detailState.currentUserId);
    let participationButton = '';
    if (detailState.currentUserId) {
        participationButton = `<button type="button" class="btn btn-primary ${isParticipant ? 'active' : ''}" data-role="toggle-participation">${isParticipant ? translate('labels.cancelParticipation') : translate('labels.participate')}</button>`;
    } else {
        participationButton = `<button type="button" class="btn btn-secondary" data-role="toggle-participation" disabled>${translate('labels.participate')}</button>`;
    }

    const statusBadge = currentEvent.isExclusive ? `<span class="event-badge badge-msc">MSC</span>` : '';
    const participantsSection = participantNames
        ? `<p>${participantNames}</p>`
        : `<p>${detailState.language === 'fr' ? 'Soyez le premier à participer.' : 'Be the first to join.'}</p>`;

    container.innerHTML = `
        <div class="event-detail">
            <header class="event-detail-header">
                <div class="event-detail-meta">
                    <span class="event-card-category">${categoryLabel}</span>
                    ${statusBadge}
                </div>
                <h1>${currentEvent.title}</h1>
                <div class="event-detail-meta">
                    <span>📅 ${formatDate(currentEvent.startsAt)} • ${formatTime(currentEvent.startsAt)}</span>
                    <span>📍 ${currentEvent.location}</span>
                    <span>💶 ${price}</span>
                </div>
            </header>
            <p class="event-detail-description">${currentEvent.description}</p>
            <section class="event-detail-section">
                <h4>${translate('labels.participants')}</h4>
                <p>${attendees}</p>
                ${participantsSection}
            </section>
            ${(currentEvent.ticketing && currentEvent.ticketing.length) ? `<section class="event-detail-section"><h4>${translate('labels.ticketing')}</h4>${ticketing}</section>` : ''}
            <footer class="event-detail-footer">
                ${participationButton}
                <button type="button" class="btn btn-secondary" data-role="share-event">${translate('labels.share')}</button>
            </footer>
        </div>
    `;
}

function renderTicketingPlatform(platform) {
    const availableClass = platform.available ? 'available' : 'unavailable';
    const badge = platform.isInternal ? `<span class="event-badge badge-msc">${translate('labels.internalBadge')}</span>` : '';
    const price = platform.price === 0 ? translate('labels.priceFree') : formatPrice(platform);
    const statusLabel = platform.available ? translate('labels.available') : translate('labels.soldOut');
    const buttonAttrs = platform.available ? `data-platform-url="${platform.url || '#'}"` : 'disabled';
    return `
        <div class="ticketing-platform ${availableClass}" ${platform.available && platform.url ? `data-platform-url="${platform.url}"` : ''}>
            <div class="platform-info">
                <div class="platform-name">${platform.name}</div>
                <div class="platform-price">${price}</div>
                ${badge}
            </div>
            <button type="button" class="platform-button" ${buttonAttrs}>${statusLabel}</button>
        </div>
    `;
}

function renderDiscussionSection() {
    const container = document.getElementById('eventDiscussionSection');
    if (!container) return;
    const messages = detailState.eventDiscussions.get(detailState.selectedEventId) || [];
    const countLabel = formatDiscussionCount(messages.length);
    const feed = messages.length
        ? messages
            .slice()
            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            .map(renderDiscussionMessage)
            .join('')
        : `<div class="event-discussion-empty">${translate('labels.eventDiscussionEmpty')}</div>`;

    const disabled = detailState.currentUserId ? '' : 'disabled';
    const placeholder = detailState.currentUserId
        ? translate('labels.eventDiscussionPlaceholder')
        : detailState.language === 'fr'
            ? 'Connectez-vous pour écrire un message'
            : 'Sign in to write a message';

    container.innerHTML = `
        <section class="event-detail-section event-discussion-section">
            <div class="event-discussion-header">
                <h2>${translate('labels.eventDiscussionHeading')}</h2>
                <span class="event-discussion-count">${countLabel}</span>
            </div>
            <div class="event-discussion-feed">${feed}</div>
            <form class="event-discussion-form" data-role="event-discussion-form">
                <textarea class="form-textarea" name="message" rows="3" placeholder="${placeholder}" ${disabled}></textarea>
                <button type="submit" class="btn btn-primary" ${disabled}>${translate('labels.eventDiscussionSubmit')}</button>
            </form>
        </section>
    `;

    const feedEl = container.querySelector('.event-discussion-feed');
    if (feedEl) {
        feedEl.scrollTop = feedEl.scrollHeight;
    }
}

function renderDiscussionMessage(message) {
    const author = detailState.memberById.get(message.authorId)?.name || (detailState.language === 'fr' ? 'Membre MSC' : 'MSC member');
    const initials = computeInitials(author);
    return `
        <div class="event-discussion-message">
            <div class="event-discussion-avatar">${initials}</div>
            <div class="event-discussion-body">
                <div class="event-discussion-meta">
                    <span class="event-discussion-author">${author}</span>
                    <span class="event-discussion-time">${formatRelative(message.createdAt)}</span>
                </div>
                <p>${message.content}</p>
            </div>
        </div>
    `;
}

function renderError(message) {
    const container = document.querySelector('.event-detail-container');
    if (container) {
        container.innerHTML = `
            <div class="card" style="padding: 32px; text-align: center;">
                <h2 style="margin-bottom: 12px;">${message}</h2>
                <a class="btn btn-primary" href="index.html">${detailState.language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}</a>
            </div>
        `;
    }
}

function saveSnapshot() {
    if (!snapshot) {
        snapshot = createDefaultSnapshot();
    }
    snapshot.language = detailState.language;
    snapshot.currentUserId = detailState.currentUserId;
    snapshot.events = detailState.events.map((event) => cloneEvent(event));
    snapshot.members = detailState.members.map((member) => ({ ...member }));
    snapshot.eventDiscussions = Array.from(detailState.eventDiscussions.entries());
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    } catch (error) {
        console.warn('MSC_EVENT_DETAIL: unable to persist state', error);
    }
}

function createDefaultSnapshot() {
    return {
        language: detailState.language,
        currentPage: 'dashboard',
        currentUserId: detailState.currentUserId,
        currentEventFilter: 'all',
        eventSearchTerm: '',
        events: seedData.events.map((event) => cloneEvent(event)),
        suggestedEvents: seedData.suggestedEvents.map((event) => ({ ...event, submittedBy: event.submittedBy ? { ...event.submittedBy } : null })),
        members: seedData.members.map((member) => ({ ...member })),
        conversations: seedData.conversations.map((conversation) => ({
            ...conversation,
            messages: conversation.messages.map((message) => ({ ...message, readBy: [...(message.readBy || [])] }))
        })),
        notifications: seedData.notifications.map((notification) => ({ ...notification })),
        eventDiscussions: Array.from(cloneEventDiscussions(seedData.eventDiscussions).entries()),
        preferences: {
            events: true,
            messages: true,
            mentions: false,
            newsletter: true
        }
    };
}

function translate(path, arg) {
    const segments = path.split('.');
    let current = translations[detailState.language];
    for (const segment of segments) {
        current = current?.[segment];
        if (current === undefined) {
            return path;
        }
    }
    if (typeof current === 'function') {
        return current(arg);
    }
    return current;
}

function formatDate(date) {
    return formatters.date.format(new Date(date));
}

function formatTime(date) {
    return formatters.time.format(new Date(date));
}

function formatPrice(item) {
    if (!item || typeof item.price === 'undefined') {
        return '—';
    }
    if (item.price === 0) {
        return translate('labels.priceFree');
    }
    const currency = item.currency || 'EUR';
    return new Intl.NumberFormat(detailState.language === 'fr' ? 'fr-FR' : 'en-US', {
        style: 'currency',
        currency
    }).format(item.price);
}

function formatRelative(date) {
    const now = Date.now();
    const diff = now - new Date(date).getTime();
    const absDiff = Math.abs(diff);
    for (const range of RELATIVE_TIME_RANGES) {
        if (absDiff >= range.ms || range.unit === 'second') {
            const value = Math.round(diff / range.ms);
            return relativeFormatter[detailState.language].format(-value, range.unit);
        }
    }
    return '';
}

function formatDiscussionCount(count) {
    if (count === 0) {
        return detailState.language === 'fr' ? 'Aucun message' : 'No messages';
    }
    if (detailState.language === 'fr') {
        return `${count} message${count > 1 ? 's' : ''}`;
    }
    return `${count} message${count > 1 ? 's' : ''}`;
}

function createFormatters(language) {
    return {
        date: new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }),
        time: new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-GB', {
            hour: '2-digit',
            minute: '2-digit'
        })
    };
}

function computeInitials(name) {
    return name
        .split(' ')
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('');
}

function generateId(prefix) {
    return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function showToast(message, variant = 'info') {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast-${variant}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('visible');
    }, 50);
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
