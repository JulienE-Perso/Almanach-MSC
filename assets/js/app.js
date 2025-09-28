/* MSC ALMANACH Prototype - Front-End Simulation */
'use strict';

// Seed data for the static prototype
const seedData = {
    members: [
        {
            id: 'mem-jean',
            name: 'Jean Metal',
            email: 'jean.metal@msc.fr',
            role: 'Président MSC',
            bio: 'Fondateur du MSC, organise les sessions exclusives et coordonne les partenariats.',
            location: 'Paris, FR',
            genres: ['Death Metal', 'Progressive Metal', 'Black Metal'],
            instruments: ['Guitare', 'Production'],
            eventsAttended: 42,
            messagesSent: 156,
            joinedAt: '2018-04-12',
            avatar: 'JM'
        },
        {
            id: 'mem-alice',
            name: 'Alice Petrucci',
            email: 'alice.petrucci@msc.fr',
            role: 'Responsable Communication',
            bio: 'Community manager du MSC, toujours à l’affût des nouveautés metal.',
            location: 'Paris, FR',
            genres: ['Avant-garde Metal', 'Post Metal'],
            instruments: ['Basse'],
            eventsAttended: 28,
            messagesSent: 201,
            joinedAt: '2020-02-17',
            avatar: 'AP'
        },
        {
            id: 'mem-bob',
            name: 'Bob Davidson',
            email: 'bob.davidson@msc.fr',
            role: 'Responsable Billetterie',
            bio: 'Opère la coordination billetterie et les relations avec les salles.',
            location: 'London, UK',
            genres: ['Thrash Metal', 'Hardcore'],
            instruments: ['Batterie'],
            eventsAttended: 35,
            messagesSent: 142,
            joinedAt: '2019-09-05',
            avatar: 'BD'
        },
        {
            id: 'mem-charlie',
            name: 'Charlie Roux',
            email: 'charlie.roux@msc.fr',
            role: 'Coordinateur Logistique',
            bio: 'S’occupe des tournées, transports et hébergements des groupes.',
            location: 'Nantes, FR',
            genres: ['Black Metal', 'Folk Metal'],
            instruments: ['Clavier'],
            eventsAttended: 31,
            messagesSent: 98,
            joinedAt: '2017-11-03',
            avatar: 'CR'
        },
        {
            id: 'mem-diane',
            name: 'Diane Lefèvre',
            email: 'diane.lefevre@msc.fr',
            role: 'Responsable Partenariats',
            bio: 'Développe les collaborations avec les festivals et labels.',
            location: 'Lille, FR',
            genres: ['Symphonic Metal', 'Doom Metal'],
            instruments: ['Chant'],
            eventsAttended: 25,
            messagesSent: 87,
            joinedAt: '2021-06-22',
            avatar: 'DL'
        },
        {
            id: 'mem-frank',
            name: 'Frank Weber',
            email: 'frank.weber@msc.fr',
            role: 'Responsable Technique',
            bio: 'Assure la captation audio/vidéo des sessions MSC et les livestreams.',
            location: 'Berlin, DE',
            genres: ['Industrial Metal', 'Nu Metal'],
            instruments: ['Ingénierie Son'],
            eventsAttended: 19,
            messagesSent: 65,
            joinedAt: '2022-01-15',
            avatar: 'FW'
        },
        {
            id: 'mem-ines',
            name: 'Inès Moreau',
            email: 'ines.moreau@msc.fr',
            role: 'Coordinatrice Communauté',
            bio: 'Anime le forum et les activités réseaux sociaux du MSC.',
            location: 'Toulouse, FR',
            genres: ['Post Metal', 'Sludge'],
            instruments: ['Basse'],
            eventsAttended: 22,
            messagesSent: 174,
            joinedAt: '2021-11-09',
            avatar: 'IM'
        },
        {
            id: 'mem-luc',
            name: 'Luc Tremblay',
            email: 'luc.tremblay@msc.fr',
            role: 'Ambassadeur Canada',
            bio: 'Développe la communauté MSC au Québec et organise des meetups.',
            location: 'Montréal, CA',
            genres: ['Progressive Metal', 'Dj0nt'],
            instruments: ['Guitare'],
            eventsAttended: 18,
            messagesSent: 53,
            joinedAt: '2020-08-30',
            avatar: 'LT'
        }
    ],
    suggestedEvents: [
        {
            id: 'sug-bloodmoon',
            title: 'Bloodmoon Collective - Release Party',
            category: 'concert',
            startsAt: '2025-02-28T21:00:00',
            location: 'Le Trabendo',
            city: 'Paris',
            country: 'FR',
            price: 22,
            currency: 'EUR',
            description: 'Release party avec guests sludge / post-hardcore, proposé par la communauté.',
            link: 'https://dice.fm',
            submittedBy: { memberId: 'mem-ines', name: 'Inès Moreau' },
            submittedAt: '2025-02-08T09:45:00',
            status: 'pending',
            votes: 14,
            notes: "Besoin d'un partenariat photo / recap."
        },
        {
            id: 'sug-neurosis',
            title: 'Neurosis + Amenra',
            category: 'concert',
            startsAt: '2025-04-05T20:00:00',
            location: 'Ancienne Belgique',
            city: 'Bruxelles',
            country: 'BE',
            price: 48,
            currency: 'EUR',
            description: 'Co-plateau culte proposé par un membre MSC Belgique.',
            link: 'https://www.abconcerts.be',
            submittedBy: { memberId: 'mem-luc', name: 'Luc Tremblay' },
            submittedAt: '2025-02-05T18:20:00',
            status: 'approved',
            votes: 32,
            notes: '4 membres intéressés pour un covoiturage depuis Lille.'
        }
    ],

    events: [
        {
            id: 'evt-gojira',
            title: 'Gojira + Knocked Loose',
            category: 'concert',
            startsAt: '2025-02-15T19:00:00',
            endsAt: '2025-02-15T23:30:00',
            location: 'Zénith de Paris',
            city: 'Paris',
            country: 'FR',
            price: 45,
            currency: 'EUR',
            description: 'Soirée metal progressive avec deux mastodontes de la scène actuelle.',
            tags: ['Progressive', 'Death Metal'],
            isExclusive: false,
            capacity: 4200,
            ticketing: [
                { name: 'Fnac Spectacles', url: 'https://www.fnacspectacles.com', price: 45, currency: 'EUR', available: true },
                { name: 'Ticketmaster', url: 'https://www.ticketmaster.fr', price: 45, currency: 'EUR', available: true },
                { name: 'Zénith Paris', url: 'https://www.zenith-paris.com', price: 45, currency: 'EUR', available: true }
            ],
            participants: ['mem-jean', 'mem-alice', 'mem-bob', 'mem-ines']
        },
        {
            id: 'evt-session12',
            title: 'Session MSC #12',
            category: 'msc',
            startsAt: '2025-02-20T20:00:00',
            endsAt: '2025-02-21T02:00:00',
            location: 'Le Klub',
            city: 'Paris',
            country: 'FR',
            price: 15,
            currency: 'EUR',
            description: 'Session club exclusive avec trois groupes émergents et after DJ.',
            tags: ['MSC Exclusive', 'Club Night'],
            isExclusive: true,
            capacity: 180,
            ticketing: [
                { name: 'MSC Direct', url: '#', price: 15, currency: 'EUR', available: true, isInternal: true },
                { name: 'Le Klub', url: 'https://www.leklub.fr', price: 15, currency: 'EUR', available: true }
            ],
            participants: ['mem-jean', 'mem-diane', 'mem-alice', 'mem-charlie', 'mem-frank']
        },
        {
            id: 'evt-hellfest',
            title: 'Hellfest 2025',
            category: 'festival',
            startsAt: '2025-06-20T10:00:00',
            endsAt: '2025-06-23T02:00:00',
            location: 'Clisson',
            city: 'Clisson',
            country: 'FR',
            price: 289,
            currency: 'EUR',
            description: 'Le festival culte revient pour une édition anniversaire sur trois jours.',
            tags: ['Festival', 'Outdoor'],
            isExclusive: false,
            capacity: 60000,
            ticketing: [
                { name: 'Hellfest Store', url: 'https://www.hellfest.fr', price: 289, currency: 'EUR', available: false },
                { name: 'Dice', url: 'https://dice.fm', price: 289, currency: 'EUR', available: true }
            ],
            participants: ['mem-jean', 'mem-alice', 'mem-bob', 'mem-charlie', 'mem-diane', 'mem-frank', 'mem-ines']
        },
        {
            id: 'evt-ironmaiden',
            title: 'Iron Maiden - The Future Past Tour',
            category: 'concert',
            startsAt: '2025-07-15T18:30:00',
            endsAt: '2025-07-15T23:30:00',
            location: 'Stade de France',
            city: 'Saint-Denis',
            country: 'FR',
            price: 85,
            currency: 'EUR',
            description: 'Les légendes britanniques reviennent avec un show monumental.',
            tags: ['Heavy Metal', 'Stadium'],
            isExclusive: false,
            capacity: 80000,
            ticketing: [
                { name: 'Ticketmaster', url: 'https://www.ticketmaster.fr', price: 85, currency: 'EUR', available: true },
                { name: 'Fnac Spectacles', url: 'https://www.fnacspectacles.com', price: 85, currency: 'EUR', available: true }
            ],
            participants: ['mem-jean', 'mem-luc', 'mem-diane']
        },
        {
            id: 'evt-conference',
            title: 'Conférence Black Metal : héritage et modernité',
            category: 'conference',
            startsAt: '2025-03-05T18:30:00',
            endsAt: '2025-03-05T21:00:00',
            location: 'Bibliothèque Nationale de France',
            city: 'Paris',
            country: 'FR',
            price: 0,
            currency: 'EUR',
            description: 'Rencontre avec musicologues et artistes pour décrypter l’évolution du black metal.',
            tags: ['Conference', 'Culture'],
            isExclusive: false,
            capacity: 250,
            ticketing: [
                { name: 'BNF Réservation', url: 'https://www.bnf.fr', price: 0, currency: 'EUR', available: true }
            ],
            participants: ['mem-jean', 'mem-diane', 'mem-ines']
        },
        {
            id: 'evt-expo',
            title: 'Expo Metal & Art Contemporain',
            category: 'expo',
            startsAt: '2025-03-10T10:00:00',
            endsAt: '2025-04-02T19:00:00',
            location: 'Centre Pompidou',
            city: 'Paris',
            country: 'FR',
            price: 12,
            currency: 'EUR',
            description: 'Exploration de l’impact du metal dans les arts visuels avec installations immersives.',
            tags: ['Exposition', 'Arts'],
            isExclusive: false,
            capacity: 1200,
            ticketing: [
                { name: 'Centre Pompidou', url: 'https://www.centrepompidou.fr', price: 12, currency: 'EUR', available: true }
            ],
            participants: ['mem-diane', 'mem-ines']
        },
        {
            id: 'evt-masterclass',
            title: 'Masterclass Production Metal avec Jens Bogren',
            category: 'conference',
            startsAt: '2025-04-18T14:00:00',
            endsAt: '2025-04-18T18:30:00',
            location: 'Abbey Road Institute',
            city: 'Paris',
            country: 'FR',
            price: 145,
            currency: 'EUR',
            description: 'Session technique exclusive sur le mixage metal, limitée à 40 participants.',
            tags: ['Formation', 'Production'],
            isExclusive: true,
            capacity: 40,
            ticketing: [
                { name: 'MSC Direct', url: '#', price: 145, currency: 'EUR', available: true, isInternal: true }
            ],
            participants: ['mem-frank', 'mem-jean', 'mem-alice']
        },
        {
            id: 'evt-meetup',
            title: 'Meetup MSC Montréal',
            category: 'msc',
            startsAt: '2025-03-22T19:00:00',
            endsAt: '2025-03-22T23:00:00',
            location: 'Piranha Bar',
            city: 'Montréal',
            country: 'CA',
            price: 0,
            currency: 'CAD',
            description: 'Rencontre des membres MSC du Canada avec live showcase local.',
            tags: ['Meetup', 'Live Showcase'],
            isExclusive: false,
            capacity: 250,
            ticketing: [
                { name: 'Eventbrite', url: 'https://www.eventbrite.ca', price: 0, currency: 'CAD', available: true }
            ],
            participants: ['mem-luc']
        }
    ],
    conversations: [
        {
            id: 'conv-alice',
            title: 'Alice Petrucci',
            participantIds: ['mem-jean', 'mem-alice'],
            messages: [
                { id: 'msg-001', authorId: 'mem-alice', content: 'On se retrouve au Hellfest ? J’ai un plan logement.', createdAt: '2025-02-10T14:32:00', readBy: ['mem-alice'] },
                { id: 'msg-002', authorId: 'mem-jean', content: 'Grave ! On peut caler ça après la réunion de mardi.', createdAt: '2025-02-10T14:45:00', readBy: ['mem-jean', 'mem-alice'] }
            ]
        },
        {
            id: 'conv-session',
            title: 'Session MSC #12 Staff',
            participantIds: ['mem-jean', 'mem-bob', 'mem-charlie', 'mem-diane'],
            messages: [
                { id: 'msg-101', authorId: 'mem-bob', content: 'Billetterie ouverte, 60% vendu en 24h.', createdAt: '2025-02-09T09:15:00', readBy: ['mem-bob', 'mem-jean'] },
                { id: 'msg-102', authorId: 'mem-charlie', content: 'Logistique salle OK, backline livrée mardi.', createdAt: '2025-02-09T09:42:00', readBy: ['mem-charlie'] },
                { id: 'msg-103', authorId: 'mem-jean', content: 'Top, on prépare un teaser vidéo pour jeudi.', createdAt: '2025-02-09T10:05:00', readBy: ['mem-jean'] }
            ]
        },
        {
            id: 'conv-hellfest',
            title: 'Hellfest 2025 Covoit',
            participantIds: ['mem-jean', 'mem-alice', 'mem-ines', 'mem-luc'],
            messages: [
                { id: 'msg-201', authorId: 'mem-ines', content: 'J’ai 2 places dans ma voiture depuis Paris.', createdAt: '2025-02-08T18:12:00', readBy: ['mem-ines', 'mem-jean'] },
                { id: 'msg-202', authorId: 'mem-luc', content: 'Je pars de Montréal donc je vous rejoins sur place.', createdAt: '2025-02-08T18:45:00', readBy: ['mem-luc'] }
            ]
        }
    ],
    notifications: [
        {
            id: 'not-001',
            type: 'event',
            title: 'Nouvel événement : Iron Maiden',
            body: 'Concert au Stade de France le 15/07/2025. Billets disponibles.',
            createdAt: '2025-02-10T12:00:00',
            read: false
        },
        {
            id: 'not-002',
            type: 'message',
            title: 'Nouveau message de Alice',
            body: 'On se retrouve au Hellfest ? J’ai un plan logement.',
            createdAt: '2025-02-10T14:32:00',
            read: false
        },
        {
            id: 'not-003',
            type: 'community',
            title: 'Demande de connexion',
            body: 'Frank Weber souhaite rejoindre votre réseau MSC.',
            createdAt: '2025-02-09T19:10:00',
            read: true
        },
        {
            id: 'not-004',
            type: 'forum',
            title: 'Nouvelle réponse : Top albums 2024',
            body: 'Diane a répondu à la discussion Top albums Metal 2024.',
            createdAt: '2025-02-09T09:05:00',
            read: false
        }
    ],
    forumTopics: [
        {
            id: 'topic-001',
            title: 'Top albums Metal 2024',
            authorId: 'mem-alice',
            category: 'discussion',
            replies: 42,
            views: 780,
            lastActivity: '2025-02-10T11:00:00',
            tags: ['Releases', '2024'],
            status: 'active'
        },
        {
            id: 'topic-002',
            title: 'Recherche guitariste pour projet Death Prog',
            authorId: 'mem-bob',
            category: 'annonces',
            replies: 8,
            views: 156,
            lastActivity: '2025-02-09T17:45:00',
            tags: ['Collab', 'Musiciens'],
            status: 'open'
        },
        {
            id: 'topic-003',
            title: 'Hellfest 2025 - organisation covoiturage',
            authorId: 'mem-charlie',
            category: 'evenements',
            replies: 23,
            views: 342,
            lastActivity: '2025-02-08T20:30:00',
            tags: ['Festival', 'Logistique'],
            status: 'active'
        },
        {
            id: 'topic-004',
            title: 'Vinyles incontournables Black Metal',
            authorId: 'mem-diane',
            category: 'discussion',
            replies: 15,
            views: 205,
            lastActivity: '2025-02-07T22:10:00',
            tags: ['Collection', 'Black Metal'],
            status: 'active'
        }
    ],
    bands: {
        featured: [
            {
                id: 'band-gojira',
                name: 'Gojira',
                origin: 'France',
                style: 'Progressive Death Metal',
                description: 'Figure de proue du metal progressif français avec un son massif et engagé.',
                followers: 1850000
            },
            {
                id: 'band-derwesh',
                name: 'Derwesh',
                origin: 'Turquie',
                style: 'Oriental Progressive Metal',
                description: 'Fusion hypnotique de riffs syncopés et d’instruments traditionnels.',
                followers: 92000
            },
            {
                id: 'band-celeste',
                name: 'Celeste',
                origin: 'France',
                style: 'Blackened Post Metal',
                description: 'Ambiances sombres et puissantes mêlant black et post-hardcore.',
                followers: 134000
            }
        ],
        local: [
            {
                id: 'band-hangmans',
                name: 'Hangman’s Chair',
                origin: 'Paris, FR',
                style: 'Doom / Sludge',
                description: 'Icône parisienne du doom, atmosphères lourdes et mélodies mélancoliques.',
                followers: 87000
            },
            {
                id: 'band-regarde',
                name: 'Regarde Les Hommes Tomber',
                origin: 'Nantes, FR',
                style: 'Blackened Sludge',
                description: 'Post-black apocalyptique aux accents sludge et ambiances mystiques.',
                followers: 54000
            }
        ],
        international: [
            {
                id: 'band-spiritbox',
                name: 'Spiritbox',
                origin: 'Canada',
                style: 'Progressive Metalcore',
                description: 'Riffs djent, voix éthérées et refrains catchy pour la nouvelle vague metal.',
                followers: 690000
            },
            {
                id: 'band-sleep-token',
                name: 'Sleep Token',
                origin: 'UK',
                style: 'Avant-garde Metal',
                description: 'Projet masqué mêlant metal, pop et ambient pour un live cérémoniel.',
                followers: 810000
            }
        ],
        emerging: [
            {
                id: 'band-lorna',
                name: 'Lorna Shore',
                origin: 'USA',
                style: 'Symphonic Deathcore',
                description: 'Growls démoniaques et orchestrations grandiloquentes, phénomène viral.',
                followers: 520000
            },
            {
                id: 'band-dayseeker',
                name: 'Dayseeker',
                origin: 'USA',
                style: 'Post-metalcore',
                description: 'Mélange atmosphérique de metalcore et de rock alternatif.',
                followers: 310000
            },
            {
                id: 'band-noval',
                name: 'Noval',
                origin: 'Belgique',
                style: 'Post Black Metal',
                description: 'Projet émergent mariant blasts furieux et textures lumineuses.',
                followers: 18000
            }
        ]
    }
};

const translations = {
    fr: {
        nav: {
            dashboard: '🏠 Accueil',
            events: '📅 Événements',
            messages: '💬 Messages',
            members: '👥 Membres',
            bands: '🎵 Groupes',
            forum: '💭 Forum'
        },
        headings: {
            dashboardTitle: '🏠 Tableau de bord',
            dashboardSubtitle: (name) => `Bienvenue ${name} ! Voici les dernières nouvelles du MSC`,
            eventsTitle: '📅 Événements',
            eventsSubtitle: 'Tous les événements Metal à venir',
            membersTitle: '👥 Membres',
            membersSubtitle: 'La communauté Metal Social Club',
            bandsTitle: '🎵 Groupes & Artistes',
            bandsSubtitle: 'Base de données des groupes Metal',
            forumTitle: '💭 Forum',
            notificationsTitle: '🔔 Notifications',
            notificationsSubtitle: 'Restez informé de l’activité du MSC',
            profileTitle: '⚙️ Mon Profil',
            profileSubtitle: 'Gérez vos informations et préférences',
            adminTitle: '🛠️ Administration',
            adminSubtitle: 'Gestion de la plateforme MSC'
        },
        labels: {
            searchMembers: '🔍 Rechercher un membre...',
            searchEvents: '🔍 Rechercher un événement...',
            proposeEvent: '+ Proposer un événement',
            newTopic: '+ Nouveau sujet',
            newMessage: '+ Nouveau message',
            send: 'Envoyer',
            participate: 'Je participe',
            participating: 'Je participe',
            cancelParticipation: 'Annuler',
            seeDetails: 'Voir les détails',
            share: 'Partager',
            attendees: (count) => `${count} membre${count > 1 ? 's' : ''} participent`,
            noEventMatch: 'Aucun événement ne correspond à vos critères. Essayez une autre recherche.',
            noMembers: 'Aucun membre trouvé pour cette recherche.',
            chatPlaceholder: 'Tapez votre message...',
            markAllRead: 'Tout marquer comme lu',
            priceFree: 'Gratuit',
            internalBadge: 'MSC',
            soldOut: 'Complet',
            available: 'Disponible',
            unavailable: 'Indisponible',
            ticketing: 'Billetterie',
            participants: 'Participants',
            notifySuccess: 'Préférences mises à jour',
            profileSaved: 'Profil sauvegardé',
            registerSuccess: 'Demande envoyée ! Un administrateur validera votre compte.',
            messageSent: 'Message envoyé',
            topicCreated: 'Sujet publié',
            eventCreated: 'Événement ajouté au planning',
            forgotPassword: 'Un email de réinitialisation vient d’être envoyé.',
            memberSuggestionsTitle: '🎁 Suggestions des membres',
            memberSuggestionsSubtitle: 'Concerts proposés par la communauté MSC',
            suggestionStatusPending: 'En validation',
            suggestionStatusApproved: 'Validée',
            suggestionStatusRejected: 'Refusée',
            suggestionSubmitted: 'Suggestions envoyée à l’équipe MSC',
            suggestionShared: 'Suggestion partagée aux membres intéressés',
            noSuggestions: 'Aucune suggestion pour le moment. Proposez un concert !',
            loginRequired: 'Veuillez vous connecter pour proposer un concert.'
        },
        categories: {
            all: 'Tous',
            concert: '🎸 Concerts',
            festival: '🏕️ Festivals',
            msc: '⭐ Sessions MSC',
            conference: '🎤 Conférences',
            expo: '🎨 Expositions'
        },
        forumCategories: {
            discussion: 'Discussion',
            annonces: 'Annonces',
            evenements: 'Événements',
            technique: 'Technique'
        },
        time: {
            today: 'Aujourd’hui',
            yesterday: 'Hier'
        }
    },
    en: {
        nav: {
            dashboard: '🏠 Home',
            events: '📅 Events',
            messages: '💬 Messages',
            members: '👥 Members',
            bands: '🎵 Artists',
            forum: '💭 Forum'
        },
        headings: {
            dashboardTitle: '🏠 Dashboard',
            dashboardSubtitle: (name) => `Welcome ${name}! Here is the latest MSC activity`,
            eventsTitle: '📅 Events',
            eventsSubtitle: 'All upcoming metal events',
            membersTitle: '👥 Members',
            membersSubtitle: 'Meet the Metal Social Club community',
            bandsTitle: '🎵 Artists & Bands',
            bandsSubtitle: 'Curated database of metal acts',
            forumTitle: '💭 Forum',
            notificationsTitle: '🔔 Notifications',
            notificationsSubtitle: 'Stay on top of what is happening at MSC',
            profileTitle: '⚙️ My Profile',
            profileSubtitle: 'Manage your information and preferences',
            adminTitle: '🛠️ Administration',
            adminSubtitle: 'MSC platform management'
        },
        labels: {
            searchMembers: '🔍 Search members...',
            searchEvents: '🔍 Search events...',
            proposeEvent: '+ Submit an event',
            newTopic: '+ New topic',
            newMessage: '+ New message',
            send: 'Send',
            participate: 'I’m going',
            participating: 'Going',
            cancelParticipation: 'Cancel',
            seeDetails: 'View details',
            share: 'Share',
            attendees: (count) => `${count} attendee${count > 1 ? 's' : ''}`,
            noEventMatch: 'No events match your criteria. Try a different search.',
            noMembers: 'No member matches your search.',
            chatPlaceholder: 'Type your message...',
            markAllRead: 'Mark all as read',
            priceFree: 'Free',
            internalBadge: 'MSC',
            soldOut: 'Sold out',
            available: 'Available',
            unavailable: 'Unavailable',
            ticketing: 'Ticketing',
            participants: 'Attendees',
            notifySuccess: 'Preferences updated',
            profileSaved: 'Profile saved',
            registerSuccess: 'Request submitted! An admin will validate your account.',
            messageSent: 'Message sent',
            topicCreated: 'Topic published',
            eventCreated: 'Event added to the calendar',
            forgotPassword: 'A reset email has just been sent.',
            memberSuggestionsTitle: '🎁 Member Suggestions',
            memberSuggestionsSubtitle: 'Concerts proposed by the MSC community',
            suggestionStatusPending: 'Pending review',
            suggestionStatusApproved: 'Approved',
            suggestionStatusRejected: 'Declined',
            suggestionSubmitted: 'Suggestion sent to the MSC team',
            suggestionShared: 'Suggestion shared with interested members',
            noSuggestions: 'No suggestion yet. Share a concert with the crew!',
            loginRequired: 'Please log in to submit a concert.'
        },
        categories: {
            all: 'All',
            concert: '🎸 Concerts',
            festival: '🏕️ Festivals',
            msc: '⭐ MSC Sessions',
            conference: '🎤 Conferences',
            expo: '🎨 Exhibitions'
        },
        forumCategories: {
            discussion: 'Discussion',
            annonces: 'Classifieds',
            evenements: 'Events',
            technique: 'Technical'
        },
        time: {
            today: 'Today',
            yesterday: 'Yesterday'
        }
    }
};

const state = {
    language: 'fr',
    currentPage: 'dashboard',
    currentEventFilter: 'all',
    eventSearchTerm: '',
    currentConversationId: null,
    currentUserId: null,
    events: [],
    suggestedEvents: [],
    members: [],
    memberById: new Map(),
    conversations: [],
    notifications: [],
    forumTopics: [],
    bands: seedData.bands,
    toasts: [],
    preferences: {
        events: true,
        messages: true,
        mentions: false,
        newsletter: true
    }
};

const dom = {};

const formatters = {
    date: new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }),
    time: new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' })
};

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

document.addEventListener('DOMContentLoaded', () => {
    hydrateState();
    cacheDom();
    bindEvents();
    prepareStaticTexts();
    renderBandsTabs('bands-featured');
    renderBandCards('bands-featured');
    populateRecipientSelect();
    attachModalClosers();
    applyLanguage();
});

function hydrateState() {
    state.members = seedData.members.map((member) => ({ ...member }));
    state.memberById = new Map(state.members.map((member) => [member.id, member]));
    state.events = seedData.events.map((event) => ({ ...event, participants: [...event.participants] }));
    state.suggestedEvents = seedData.suggestedEvents.map((event) => ({ ...event, submittedBy: { ...event.submittedBy } }));
    state.conversations = seedData.conversations.map((conversation) => ({
        ...conversation,
        messages: conversation.messages.map((message) => ({ ...message, readBy: [...message.readBy] }))
    }));
    state.notifications = seedData.notifications.map((notification) => ({ ...notification }));
    state.forumTopics = seedData.forumTopics.map((topic) => ({ ...topic }));
}

function cacheDom() {
    dom.body = document.body;
    dom.loginPage = document.getElementById('loginPage');
    dom.appContainer = document.getElementById('appContainer');
    dom.loginForm = document.getElementById('loginForm');
    dom.loginEmail = document.getElementById('loginEmail');
    dom.loginPassword = document.getElementById('loginPassword');
    dom.loginFeedback = document.getElementById('loginFeedback');
    dom.registerForm = document.getElementById('registerForm');
    dom.registerFeedback = document.getElementById('registerFeedback');
    dom.languageToggle = document.getElementById('languageToggle');
    dom.nav = document.getElementById('mainNav');
    dom.navButtons = Array.from(document.querySelectorAll('#mainNav .nav-item'));
    dom.logoButton = document.querySelector('.logo');
    dom.pageSections = Array.from(document.querySelectorAll('.page-section'));
    dom.dashboardStats = document.getElementById('dashboardStats');
    dom.dashboardSubtitle = document.getElementById('dashboardSubtitle');
    dom.dashboardUpcoming = document.getElementById('dashboardUpcoming');
    dom.dashboardMessages = document.getElementById('dashboardMessages');
    dom.dashboardForum = document.getElementById('dashboardForum');
    dom.eventSearch = document.getElementById('eventSearch');
    dom.eventFilters = document.querySelector('.filter-buttons');
    dom.eventsGrid = document.getElementById('eventsGrid');
    dom.suggestionsGrid = document.getElementById('suggestionsGrid');
    dom.suggestionsTitle = document.getElementById('suggestionsTitle');
    dom.suggestionsSubtitle = document.getElementById('suggestionsSubtitle');
    dom.membersGrid = document.getElementById('membersGrid');
    dom.memberSearch = document.getElementById('memberSearch');
    dom.conversationsList = document.getElementById('conversationsList');
    dom.chatHeaderTitle = document.getElementById('chatHeaderTitle');
    dom.chatMessages = document.getElementById('chatMessages');
    dom.chatInput = document.getElementById('chatInput');
    dom.chatSendButton = document.getElementById('chatSendButton');
    dom.bandsTabs = document.querySelector('.tabs');
    dom.notificationList = document.getElementById('notificationList');
    dom.notificationBadge = document.getElementById('notificationBadge');
    dom.forumTopicsBody = document.getElementById('forumTopicsBody');
    dom.profileName = document.getElementById('profileName');
    dom.profileEmail = document.getElementById('profileEmail');
    dom.profileBio = document.getElementById('profileBio');
    dom.profileGenres = document.getElementById('profileGenres');
    dom.profileSaveButton = document.getElementById('profileSaveButton');
    dom.profileEventsCount = document.getElementById('profileEventsCount');
    dom.profileMessagesCount = document.getElementById('profileMessagesCount');
    dom.profileMemberSince = document.getElementById('profileMemberSince');
    dom.adminStats = document.getElementById('adminStats');
    dom.createEventForm = document.getElementById('createEventForm');
    dom.newMessageForm = document.getElementById('newMessageForm');
    dom.messageRecipient = document.getElementById('messageRecipient');
    dom.messageContent = document.getElementById('messageContent');
    dom.newTopicForm = document.getElementById('newTopicForm');
    dom.eventModal = document.getElementById('eventModal');
    dom.eventModalContent = document.getElementById('eventModalContent');
    dom.userMenuModal = document.getElementById('userMenuModal');
    dom.userMenuAvatar = document.getElementById('userMenuAvatar');
    dom.userMenuName = document.getElementById('userMenuName');
    dom.userMenuEmail = document.getElementById('userMenuEmail');
}

function bindEvents() {
    dom.loginForm.addEventListener('submit', handleLoginSubmit);
    dom.registerForm.addEventListener('submit', handleRegisterSubmit);
    dom.languageToggle.addEventListener('click', handleLanguageToggle);
    dom.logoButton.addEventListener('click', () => navigateTo('dashboard'));
    dom.nav.addEventListener('click', handleNavClick);
    dom.eventSearch.addEventListener('input', handleEventSearch);
    dom.eventFilters.addEventListener('click', handleFilterClick);
    // Events grid clicks are now handled by handleGlobalActions
    dom.memberSearch.addEventListener('input', handleMemberSearch);
    dom.membersGrid.addEventListener('click', handleMembersGridClick);
    dom.conversationsList.addEventListener('click', handleConversationSelect);
    dom.chatSendButton.addEventListener('click', handleChatSend);
    dom.chatInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleChatSend();
        }
    });
    dom.bandsTabs.addEventListener('click', handleBandsTabClick);
    dom.notificationList.addEventListener('click', handleNotificationClick);
    dom.profileSaveButton.addEventListener('click', handleProfileSave);
    document.querySelector('[data-pref="events"]').addEventListener('click', handlePreferenceToggle);
    document.querySelector('[data-pref="messages"]').addEventListener('click', handlePreferenceToggle);
    document.querySelector('[data-pref="mentions"]').addEventListener('click', handlePreferenceToggle);
    document.querySelector('[data-pref="newsletter"]').addEventListener('click', handlePreferenceToggle);
    dom.createEventForm.addEventListener('submit', handleCreateEventSubmit);
    dom.newMessageForm.addEventListener('submit', handleNewMessageSubmit);
    dom.newTopicForm.addEventListener('submit', handleNewTopicSubmit);
    document.body.addEventListener('click', handleGlobalActions);
}

function attachModalClosers() {
    document.querySelectorAll('.modal').forEach((modal) => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

function handleGlobalActions(event) {
    const ticketTarget = event.target.closest('[data-platform-url]');
    if (handleTicketingInteraction(ticketTarget)) {
        return;
    }

    // Handle data-role buttons (like event details)
    const roleButton = event.target.closest('[data-role]');
    if (roleButton) {
        const { role } = roleButton.dataset;
        switch (role) {
            case 'open-detail': {
                const eventId = roleButton.dataset.eventId;
                if (eventId) {
                    openEventModal(eventId);
                }
                break;
            }
            case 'toggle-participation': {
                if (!state.currentUserId) {
                    showToast(translate('labels.loginRequired'), 'error');
                    break;
                }
                const participationEventId = roleButton.dataset.eventId;
                if (participationEventId) {
                    toggleParticipation(participationEventId);
                }
                break;
            }
            case 'open-suggestion': {
                const suggestionId = roleButton.dataset.suggestionId;
                if (suggestionId) {
                    openSuggestionModal(suggestionId);
                }
                break;
            }
            case 'share-suggestion': {
                if (!state.currentUserId) {
                    showToast(translate('labels.loginRequired'), 'error');
                    break;
                }
                const suggestionId = roleButton.dataset.suggestionId;
                if (suggestionId) {
                    shareSuggestion(suggestionId);
                }
                break;
            }
        }
        return;
    }

    const actionButton = event.target.closest('[data-action]');
    if (actionButton) {
        const { action } = actionButton.dataset;
        switch (action) {
            case 'open-register':
                openModal('registerModal');
                break;
            case 'forgot-password':
                showForgotPassword();
                break;
            case 'open-create-event':
                openModal('createEventModal');
                break;
            case 'open-new-message':
                openModal('newMessageModal');
                break;
            case 'open-new-topic':
                openModal('newTopicModal');
                break;
            case 'open-notifications':
                navigateTo('notifications');
                break;
            case 'open-user-menu':
                openUserMenu();
                break;
            case 'logout':
                logout();
                break;
            case 'admin-invite':
                showToast('Invitation envoyée aux nouveaux prospects MSC.', 'info');
                break;
            case 'admin-newsletter':
                showToast('Newsletter planifiée pour demain 10h.', 'info');
                break;
            case 'admin-export':
                showToast('Export des données démarré. Disponible dans 2 minutes.', 'info');
                break;
            default:
                break;
        }
        return;
    }

    const closeButton = event.target.closest('[data-close]');
    if (closeButton) {
        closeModal(closeButton.dataset.close);
        return;
    }

    const pageTarget = event.target.closest('[data-page-target]');
    if (pageTarget) {
        const page = pageTarget.dataset.pageTarget;
        closeModal('userMenuModal');
        navigateTo(page);
    }
}

function handleNavClick(event) {
    const button = event.target.closest('.nav-item');
    if (!button) return;
    const page = button.dataset.page;
    if (page) {
        navigateTo(page);
    }
}

function handleLanguageToggle() {
    state.language = state.language === 'fr' ? 'en' : 'fr';
    dom.languageToggle.dataset.lang = state.language;
    dom.languageToggle.textContent = state.language.toUpperCase();
    formatters.date = new Intl.DateTimeFormat(state.language === 'fr' ? 'fr-FR' : 'en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    formatters.time = new Intl.DateTimeFormat(state.language === 'fr' ? 'fr-FR' : 'en-GB', {
        hour: '2-digit',
        minute: '2-digit'
    });
    applyLanguage();
    renderAll();
}

function handleLoginSubmit(event) {
    event.preventDefault();
    const identifier = dom.loginEmail.value.trim();
    const password = dom.loginPassword.value.trim();

    if (!identifier || !password) {
        const loginMessage = state.language === 'fr' ? 'Veuillez remplir vos identifiants.' : 'Please enter your credentials.';
        updateFeedback(dom.loginFeedback, loginMessage, 'error');
        return;
    }

    const identifierLower = identifier.toLowerCase();
    let member = state.members.find((m) => m.email.toLowerCase() === identifierLower);
    if (!member) {
        member = state.members.find((m) => m.name.toLowerCase().includes(identifierLower));
    }

    if (!member) {
        member = createMemberFromIdentifier(identifier);
        state.members.push(member);
        state.memberById.set(member.id, member);
        populateRecipientSelect();
    }

    state.currentUserId = member.id;
    state.preferences = { ...state.preferences, ...member.preferences };
    state.memberById.get(member.id).lastLogin = new Date().toISOString();

    dom.loginPage.style.display = 'none';
    dom.appContainer.classList.add('active');
    dom.body.classList.add('app-active');
    updateUserAvatar(member);
    navigateTo('dashboard');
    renderAll();
    showToast(`Bienvenue ${member.name}!`, 'success');
}

function handleRegisterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(dom.registerForm);
    const name = (formData.get('name') || '').trim();
    const email = (formData.get('email') || '').trim();
    const genresRaw = formData.get('genres') || '';
    const requiredMessage = state.language === 'fr' ? 'Merci de renseigner au minimum votre nom et votre email.' : 'Please provide at least your name and email.';

    if (!name || !email) {
        updateFeedback(dom.registerFeedback, requiredMessage, 'error');
        return;
    }

    const newMember = {
        id: generateId('mem'),
        name,
        email,
        role: 'Membre MSC',
        bio: state.language === 'fr' ? 'Nouveau membre enthousiaste du MSC.' : 'Enthusiastic new MSC member.',
        location: 'Paris, FR',
        genres: genresRaw.split(',').map((item) => item.trim()).filter(Boolean),
        instruments: [],
        eventsAttended: 0,
        messagesSent: 0,
        joinedAt: new Date().toISOString().slice(0, 10),
        avatar: computeInitials(name)
    };

    state.members.push(newMember);
    state.memberById.set(newMember.id, newMember);
    populateRecipientSelect();
    updateFeedback(dom.registerFeedback, translate('labels.registerSuccess'), 'success');
    setTimeout(() => closeModal('registerModal'), 1500);
}

function handleEventSearch(event) {
    state.eventSearchTerm = event.target.value.trim().toLowerCase();
    renderEvents();
    renderMemberSuggestions();
}

function handleFilterClick(event) {
    const button = event.target.closest('.filter-btn');
    if (!button) return;
    const { filter } = button.dataset;
    if (!filter) return;
    state.currentEventFilter = filter;
    document.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderEvents();
    renderMemberSuggestions();
}

// handleEventsGridClick removed - now handled by handleGlobalActions

function handleMemberSearch(event) {
    state.memberSearchTerm = event.target.value.trim().toLowerCase();
    renderMembers();
}

function handleMembersGridClick(event) {
    const button = event.target.closest('[data-member-id]');
    if (!button) return;
    const memberId = button.dataset.memberId;
    openConversationWith(memberId);
}

function handleConversationSelect(event) {
    const item = event.target.closest('[data-conversation-id]');
    if (!item) return;
    const conversationId = item.dataset.conversationId;
    openConversation(conversationId);
}

function handleChatSend() {
    if (!state.currentConversationId) return;
    const message = dom.chatInput.value.trim();
    if (!message) {
        return;
    }

    const conversation = state.conversations.find((conv) => conv.id === state.currentConversationId);
    if (!conversation) return;

    const newMessage = {
        id: generateId('msg'),
        authorId: state.currentUserId,
        content: message,
        createdAt: new Date().toISOString(),
        readBy: [state.currentUserId]
    };

    conversation.messages.push(newMessage);
    dom.chatInput.value = '';
    renderConversation(conversation.id);
    renderConversationsList();
    showToast(translate('labels.messageSent'), 'success');

    simulateAutoReply(conversation);
}

function handleBandsTabClick(event) {
    const button = event.target.closest('[data-tab-target]');
    if (!button) return;
    const target = button.dataset.tabTarget;
    renderBandsTabs(target);
    renderBandCards(target);
}

function handleNotificationClick(event) {
    const item = event.target.closest('[data-notification-id]');
    if (!item) return;
    const notification = state.notifications.find((note) => note.id === item.dataset.notificationId);
    if (!notification) return;

    notification.read = true;
    renderNotifications();
    renderNotificationBadge();
}

function handleProfileSave() {
    const member = state.memberById.get(state.currentUserId);
    if (!member) return;
    member.name = dom.profileName.value.trim();
    member.email = dom.profileEmail.value.trim();
    member.bio = dom.profileBio.value.trim();
    member.genres = dom.profileGenres.value.split(',').map((genre) => genre.trim()).filter(Boolean);
    updateUserAvatar(member);
    showToast(translate('labels.profileSaved'), 'success');
    renderMembers();
}

function handlePreferenceToggle(event) {
    const target = event.currentTarget;
    if (!target.dataset.pref) return;
    const pref = target.dataset.pref;
    target.classList.toggle('active');
    state.preferences[pref] = target.classList.contains('active');
    showToast(translate('labels.notifySuccess'), 'info');
}


function handleCreateEventSubmit(event) {
    event.preventDefault();
    if (!state.currentUserId) {
        showToast(translate('labels.loginRequired'), 'error');
        return;
    }

    const formData = new FormData(dom.createEventForm);
    const title = formData.get('title');
    const date = formData.get('date');
    const time = formData.get('time');
    const location = formData.get('location');
    const category = formData.get('category');
    const description = formData.get('description');

    if (!title || !date || !time || !category || !location) {
        const requiredMessage = state.language === 'fr' ? 'Merci de renseigner les champs obligatoires.' : 'Please fill in all required fields.';
        showToast(requiredMessage, 'error');
        return;
    }

    const priceRaw = formData.get('price');
    const price = priceRaw ? Number(priceRaw) : 0;
    const [cityCandidate, countryCandidate] = location.split(',').map((part) => part.trim());
    const ticketingUrl = (formData.get('ticketing') || '').trim();
    const member = state.memberById.get(state.currentUserId);

    const newSuggestion = {
        id: generateId('sug'),
        title,
        category,
        startsAt: `${date}T${time}`,
        location,
        city: cityCandidate || location,
        country: countryCandidate && countryCandidate.length === 2 ? countryCandidate.toUpperCase() : 'FR',
        price: Number.isFinite(price) ? price : 0,
        currency: 'EUR',
        description,
        link: ticketingUrl || '',
        submittedBy: {
            memberId: member?.id || state.currentUserId,
            name: member?.name || (state.language === 'fr' ? 'Membre MSC' : 'MSC member')
        },
        submittedAt: new Date().toISOString(),
        status: 'pending',
        votes: 0,
        notes: ''
    };

    state.suggestedEvents.unshift(newSuggestion);
    renderMemberSuggestions();
    renderAdminStats();
    createNotification({
        type: 'community',
        title: state.language === 'fr' ? 'Nouvelle suggestion de concert' : 'New concert suggestion',
        body: state.language === 'fr' ? `${member?.name || 'Un membre'} propose ${title}.` : `${member?.name || 'A member'} suggested ${title}.`,
        read: false
    });
    dom.createEventForm.reset();
    closeModal('createEventModal');
    showToast(translate('labels.suggestionSubmitted'), 'success');
}

function handleNewMessageSubmit(event) {
    event.preventDefault();
    const recipientId = dom.messageRecipient.value;
    const content = dom.messageContent.value.trim();
    if (!recipientId || !content) {
        const errorMsg = state.language === 'fr' ? 'Merci de renseigner un destinataire et un message.' : 'Please provide a recipient and a message.';
        showToast(errorMsg, 'error');
        return;
    }

    let conversation = state.conversations.find((conv) => conv.participantIds.length === 2 && conv.participantIds.includes(state.currentUserId) && conv.participantIds.includes(recipientId));
    if (!conversation) {
        conversation = {
            id: generateId('conv'),
            title: state.memberById.get(recipientId)?.name || 'Conversation',
            participantIds: [state.currentUserId, recipientId],
            messages: []
        };
        state.conversations.unshift(conversation);
    }

    conversation.messages.push({
        id: generateId('msg'),
        authorId: state.currentUserId,
        content,
        createdAt: new Date().toISOString(),
        readBy: [state.currentUserId]
    });

    dom.newMessageForm.reset();
    closeModal('newMessageModal');
    renderConversationsList();
    openConversation(conversation.id);
    showToast(translate('labels.messageSent'), 'success');
}

function handleNewTopicSubmit(event) {
    event.preventDefault();
    const formData = new FormData(dom.newTopicForm);
    const title = (formData.get('title') || '').trim();
    const category = formData.get('category');
    const content = (formData.get('content') || '').trim();

    if (!title || !category || !content) {
        const requiredMessage = state.language === 'fr' ? 'Merci de compléter tous les champs.' : 'Please complete every field.';
        showToast(requiredMessage, 'error');
        return;
    }

    const newTopic = {
        id: generateId('topic'),
        title,
        authorId: state.currentUserId,
        category,
        replies: 0,
        views: 0,
        lastActivity: new Date().toISOString(),
        tags: [],
        status: 'active'
    };

    state.forumTopics.unshift(newTopic);
    dom.newTopicForm.reset();
    closeModal('newTopicModal');
    renderForum();
    showToast(translate('labels.topicCreated'), 'success');
}

function handleEventsPageView() {
    renderEvents();
    renderMemberSuggestions();
}

function handleMessagesPageView() {
    renderConversationsList();
    if (state.conversations.length > 0 && !state.currentConversationId) {
        openConversation(state.conversations[0].id);
    }
}

function navigateTo(page) {
    state.currentPage = page;
    dom.pageSections.forEach((section) => {
        section.classList.toggle('active', section.id === `${page}Page`);
    });

    dom.navButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.page === page);
    });

    if (page === 'events') {
        handleEventsPageView();
    }

    if (page === 'messages') {
        handleMessagesPageView();
    }

    if (page === 'members') {
        renderMembers();
    }

    if (page === 'forum') {
        renderForum();
    }

    if (page === 'notifications') {
        renderNotifications();
    }

    if (page === 'profile') {
        renderProfile();
    }

    if (page === 'admin') {
        renderAdminStats();
    }

    renderNotifications();
}

function renderAll() {
    renderDashboard();
    renderEvents();
    renderMemberSuggestions();
    renderMembers();
    renderConversationsList();
    renderForum();
    renderNotifications();
    renderProfile();
    renderAdminStats();
    renderNotificationBadge();
}

function renderDashboard() {
    if (!state.currentUserId) return;
    const stats = computeDashboardStats();

    dom.dashboardStats.innerHTML = [
        {
            label: state.language === 'fr' ? 'Événements ce mois' : 'Events this month',
            value: stats.eventsThisMonth
        },
        {
            label: state.language === 'fr' ? 'Membres actifs' : 'Active members',
            value: stats.activeMembers
        },
        {
            label: state.language === 'fr' ? 'Messages non lus' : 'Unread messages',
            value: stats.unreadMessages
        },
        {
            label: state.language === 'fr' ? 'Invitations en attente' : 'Pending invites',
            value: stats.pendingInvites
        }
    ].map(renderStatCard).join('');

    const member = state.memberById.get(state.currentUserId);
    dom.dashboardSubtitle.textContent = translate('headings.dashboardSubtitle', member.name);

    const upcoming = getUpcomingEvents(3);
    dom.dashboardUpcoming.innerHTML = upcoming.map(renderUpcomingEventCard).join('') || renderEmptyState(translate('labels.noEventMatch'));

    const recentMessages = getRecentMessages(3);
    const noMessages = state.language === 'fr' ? 'Aucun message récent.' : 'No recent messages.';
    dom.dashboardMessages.innerHTML = recentMessages.map(renderDashboardMessage).join('') || renderEmptyState(noMessages);

    const activeTopics = state.forumTopics.slice(0, 3);
    dom.dashboardForum.innerHTML = activeTopics.map(renderDashboardTopic).join('');
}

function renderEvents() {
    const events = state.events
        .filter(filterEventsByCategory)
        .filter(filterEventsBySearch)
        .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt));

    if (events.length === 0) {
        dom.eventsGrid.innerHTML = renderEmptyState(translate('labels.noEventMatch'));
        return;
    }

    dom.eventsGrid.innerHTML = events.map(renderEventCard).join('');
}


function renderMemberSuggestions() {
    if (!dom.suggestionsGrid) return;
    const suggestions = state.suggestedEvents
        .filter(filterSuggestionsByCategory)
        .filter(filterSuggestionsBySearch)
        .sort(sortSuggestions);

    if (suggestions.length === 0) {
        dom.suggestionsGrid.innerHTML = renderEmptyState(translate('labels.noSuggestions'));
        return;
    }

    dom.suggestionsGrid.innerHTML = suggestions.map(renderSuggestionCard).join('');
}

function renderSuggestionCard(suggestion) {
    const categoryLabel = translate(`categories.${suggestion.category || 'concert'}`) || suggestion.category;
    const price = formatPrice(suggestion);
    const submittedBy = suggestion.submittedBy?.name || (state.language === 'fr' ? 'Membre MSC' : 'MSC member');
    const submittedAt = formatRelative(suggestion.submittedAt);
    const votes = formatSuggestionVotes(suggestion.votes);
    const statusBadge = renderSuggestionStatusBadge(suggestion.status);
    const badgeLabel = state.language === 'fr' ? 'Communauté' : 'Community';

    return `
        <article class="card event-card suggestion-card" data-suggestion-id="${suggestion.id}">
            <header class="event-card-header">
                <div class="event-card-category">${categoryLabel}</div>
                <span class="event-badge badge-suggestion">${badgeLabel}</span>
            </header>
            <h3 class="event-card-title">${suggestion.title}</h3>
            <div class="event-card-meta">
                <span>📅 ${formatDate(suggestion.startsAt)} • ${formatTime(suggestion.startsAt)}</span>
                <span>📍 ${suggestion.location}</span>
            </div>
            <p class="event-card-description">${suggestion.description}</p>
            <div class="suggestion-meta">
                <span>👤 ${submittedBy}</span>
                <span class="suggestion-status">${statusBadge} · ${submittedAt}</span>
            </div>
            <div class="event-card-info">
                <span>${votes}</span>
                <span>${price}</span>
            </div>
            <div class="suggestion-actions">
                <button type="button" class="btn btn-secondary" data-role="open-suggestion" data-suggestion-id="${suggestion.id}">${translate('labels.seeDetails')}</button>
                <button type="button" class="btn btn-primary" data-role="share-suggestion" data-suggestion-id="${suggestion.id}">${translate('labels.share')}</button>
            </div>
        </article>
    `;
}

function renderSuggestionDetails(suggestion) {
    const statusBadge = renderSuggestionStatusBadge(suggestion.status);
    const submittedBy = suggestion.submittedBy?.name || (state.language === 'fr' ? 'Membre MSC' : 'MSC member');
    const submittedAt = formatRelative(suggestion.submittedAt);
    const votes = formatSuggestionVotes(suggestion.votes);
    const price = formatPrice(suggestion);
    const linkButton = suggestion.link
        ? `<button type="button" class="btn btn-primary" data-platform-url="${suggestion.link}">${state.language === 'fr' ? 'Ouvrir la billetterie' : 'Open ticketing'}</button>`
        : '';
    const notes = suggestion.notes
        ? `<p style="color: var(--text-secondary); margin-top: 12px;">${suggestion.notes}</p>`
        : '';

    return `
        <div class="event-detail">
            <header class="event-detail-header">
                <h3>${suggestion.title}</h3>
                <div class="event-detail-meta">
                    <span>${statusBadge}</span>
                    <span>📅 ${formatDate(suggestion.startsAt)} • ${formatTime(suggestion.startsAt)}</span>
                    <span>📍 ${suggestion.location}</span>
                    <span>💶 ${price}</span>
                </div>
            </header>
            <p class="event-detail-description">${suggestion.description}</p>
            <section class="event-detail-section">
                <h4>${state.language === 'fr' ? 'Proposé par' : 'Suggested by'}</h4>
                <p>${submittedBy} · ${submittedAt}</p>
            </section>
            <section class="event-detail-section">
                <h4>${state.language === 'fr' ? 'Intérêt' : 'Interest'}</h4>
                <p>${votes}</p>
            </section>
            ${notes}
            <footer class="event-detail-footer">
                ${linkButton}
                <button type="button" class="btn btn-secondary" data-role="share-suggestion" data-suggestion-id="${suggestion.id}">${translate('labels.share')}</button>
            </footer>
        </div>
    `;
}

function openSuggestionModal(id) {
    const suggestion = state.suggestedEvents.find((item) => item.id === id);
    if (!suggestion) return;
    dom.eventModalContent.innerHTML = renderSuggestionDetails(suggestion);
    dom.eventModalContent.dataset.context = 'suggestion';
    dom.eventModalContent.dataset.suggestionId = suggestion.id;
    openModal('eventModal');
}

function shareSuggestion(id) {
    const suggestion = state.suggestedEvents.find((item) => item.id === id);
    if (!suggestion) return;
    suggestion.votes = (suggestion.votes || 0) + 1;
    renderMemberSuggestions();
    if (dom.eventModalContent.dataset.context === 'suggestion' && dom.eventModalContent.dataset.suggestionId === suggestion.id) {
        dom.eventModalContent.innerHTML = renderSuggestionDetails(suggestion);
    }
    showToast(translate('labels.suggestionShared'), 'success');
}

function filterSuggestionsByCategory(suggestion) {
    if (state.currentEventFilter === 'all') return true;
    return suggestion.category === state.currentEventFilter;
}

function filterSuggestionsBySearch(suggestion) {
    if (!state.eventSearchTerm) return true;
    const term = state.eventSearchTerm;
    return (
        suggestion.title.toLowerCase().includes(term) ||
        (suggestion.description || '').toLowerCase().includes(term) ||
        suggestion.location.toLowerCase().includes(term)
    );
}

function sortSuggestions(a, b) {
    const order = { pending: 0, approved: 1, rejected: 2 };
    const statusDiff = (order[a.status] ?? 3) - (order[b.status] ?? 3);
    if (statusDiff !== 0) return statusDiff;
    return new Date(a.startsAt) - new Date(b.startsAt);
}

function renderSuggestionStatusBadge(status) {
    switch (status) {
        case 'approved':
            return `<span class="badge-approved">${translate('labels.suggestionStatusApproved')}</span>`;
        case 'rejected':
            return `<span class="badge-rejected">${translate('labels.suggestionStatusRejected')}</span>`;
        case 'pending':
        default:
            return `<span class="badge-pending">${translate('labels.suggestionStatusPending')}</span>`;
    }
}

function formatSuggestionVotes(votes) {
    const total = votes || 0;
    if (state.language === 'fr') {
        return `${total} soutien${total > 1 ? 's' : ''}`;
    }
    return `${total} support${total !== 1 ? 's' : ''}`;
}

function renderMembers() {
    const term = state.memberSearchTerm || '';
    const members = state.members.filter((member) => member.id !== state.currentUserId && member.name.toLowerCase().includes(term));
    if (members.length === 0) {
        dom.membersGrid.innerHTML = renderEmptyState(translate('labels.noMembers'));
        return;
    }

    dom.membersGrid.innerHTML = members.map(renderMemberCard).join('');
}

function renderConversationsList() {
    const conversations = state.conversations.slice().sort((a, b) => getConversationLastDate(b) - getConversationLastDate(a));
    dom.conversationsList.innerHTML = conversations.map(renderConversationItem).join('');
}

function renderConversation(conversationId) {
    state.currentConversationId = conversationId;
    const conversation = state.conversations.find((conv) => conv.id === conversationId);
    if (!conversation) return;

    dom.chatHeaderTitle.textContent = conversation.title;
    dom.chatInput.disabled = false;
    dom.chatSendButton.disabled = false;
    dom.chatInput.placeholder = translate('labels.chatPlaceholder');

    conversation.messages.forEach((message) => {
        if (!message.readBy.includes(state.currentUserId) && message.authorId !== state.currentUserId) {
            message.readBy.push(state.currentUserId);
        }
    });

    dom.chatMessages.innerHTML = conversation.messages
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .map((message) => renderChatMessage(message, conversation))
        .join('');

    dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
    renderConversationsList();
}

function renderBandsTabs(activeTab) {
    document.querySelectorAll('.tab').forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.tabTarget === activeTab);
    });
    document.querySelectorAll('.tab-content').forEach((content) => {
        content.classList.toggle('active', content.id === activeTab);
    });
}

function renderBandCards(tabId) {
    const containerMap = {
        'bands-featured': 'bandsFeatured',
        'bands-local': 'bandsLocal',
        'bands-international': 'bandsInternational',
        'bands-emerging': 'bandsEmerging'
    };
    const category = tabId.replace('bands-', '');
    const bands = state.bands[category] || [];
    const containerId = containerMap[tabId];
    const container = containerId ? document.getElementById(containerId) : null;
    if (!container) return;
    container.innerHTML = bands.map(renderBandCard).join('');
}

function renderForum() {
    dom.forumTopicsBody.innerHTML = state.forumTopics
        .sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity))
        .map(renderForumRow)
        .join('');
}

function renderNotifications() {
    dom.notificationList.innerHTML = state.notifications
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(renderNotificationItem)
        .join('');
}

function renderProfile() {
    const member = state.memberById.get(state.currentUserId);
    if (!member) return;

    dom.profileName.value = member.name;
    dom.profileEmail.value = member.email;
    dom.profileBio.value = member.bio;
    dom.profileGenres.value = member.genres.join(', ');
    dom.profileEventsCount.textContent = member.eventsAttended;
    dom.profileMessagesCount.textContent = member.messagesSent;
    dom.profileMemberSince.textContent = new Date(member.joinedAt).getFullYear();

    document.querySelectorAll('[data-pref]').forEach((toggle) => {
        const pref = toggle.dataset.pref;
        if (state.preferences[pref]) {
            toggle.classList.add('active');
        } else {
            toggle.classList.remove('active');
        }
    });
}

function renderAdminStats() {
    const stats = computeAdminStats();
    dom.adminStats.innerHTML = stats.map(renderStatCard).join('');
}

function renderNotificationBadge() {
    const unread = state.notifications.filter((note) => !note.read).length;
    dom.notificationBadge.textContent = unread;
    dom.notificationBadge.style.display = unread > 0 ? 'flex' : 'none';
}

function openEventModal(eventId) {
    const event = state.events.find((item) => item.id === eventId);
    if (!event) return;
    dom.eventModalContent.innerHTML = renderEventDetails(event);
    dom.eventModalContent.dataset.context = 'event';
    delete dom.eventModalContent.dataset.suggestionId;
    openModal('eventModal');
}

function openConversationWith(memberId) {
    let conversation = state.conversations.find((conv) => conv.participantIds.length === 2 && conv.participantIds.includes(state.currentUserId) && conv.participantIds.includes(memberId));
    if (!conversation) {
        const member = state.memberById.get(memberId);
        conversation = {
            id: generateId('conv'),
            title: member ? member.name : 'Conversation',
            participantIds: [state.currentUserId, memberId],
            messages: []
        };
        state.conversations.unshift(conversation);
    }
    navigateTo('messages');
    renderConversationsList();
    openConversation(conversation.id);
}

function openConversation(conversationId) {
    renderConversation(conversationId);
}

function toggleParticipation(eventId) {
    const event = state.events.find((item) => item.id === eventId);
    if (!event) return;
    const index = event.participants.indexOf(state.currentUserId);
    if (index >= 0) {
        event.participants.splice(index, 1);
        const message = state.language === 'fr' ? 'Participation annulée.' : 'RSVP cancelled.';
        showToast(message, 'info');
    } else {
        event.participants.push(state.currentUserId);
        const message = state.language === 'fr' ? 'Participation enregistrée.' : 'RSVP saved.';
        showToast(message, 'success');
    }
    renderEvents();
    renderMemberSuggestions();
    renderDashboard();
}

function applyLanguage() {
    dom.navButtons.forEach((button) => {
        const page = button.dataset.page;
        button.textContent = translations[state.language].nav[page];
    });

    const headings = translations[state.language].headings;
    document.querySelector('#dashboardPage .page-title').textContent = headings.dashboardTitle;
    document.querySelector('#eventsPage .page-title').textContent = headings.eventsTitle;
    document.querySelector('#eventsPage .page-subtitle').textContent = headings.eventsSubtitle;
    document.querySelector('#membersPage .page-title').textContent = headings.membersTitle;
    document.querySelector('#membersPage .page-subtitle').textContent = headings.membersSubtitle;
    document.querySelector('#bandsPage .page-title').textContent = headings.bandsTitle;
    document.querySelector('#bandsPage .page-subtitle').textContent = headings.bandsSubtitle;
    document.querySelector('#forumPage .page-title').textContent = headings.forumTitle;
    document.querySelector('#notificationsPage .page-title').textContent = headings.notificationsTitle;
    document.querySelector('#notificationsPage .page-subtitle').textContent = headings.notificationsSubtitle;
    document.querySelector('#profilePage .page-title').textContent = headings.profileTitle;
    document.querySelector('#profilePage .page-subtitle').textContent = headings.profileSubtitle;
    document.querySelector('#adminPage .page-title').textContent = headings.adminTitle;
    document.querySelector('#adminPage .page-subtitle').textContent = headings.adminSubtitle;

    dom.eventSearch.placeholder = translate('labels.searchEvents');
    dom.memberSearch.placeholder = translate('labels.searchMembers');
    if (dom.suggestionsTitle) dom.suggestionsTitle.textContent = translate('labels.memberSuggestionsTitle');
    if (dom.suggestionsSubtitle) dom.suggestionsSubtitle.textContent = translate('labels.memberSuggestionsSubtitle');
    document.querySelectorAll('[data-action="open-create-event"]').forEach((button) => {
        button.textContent = translate('labels.proposeEvent');
    });
    const newTopicBtn = document.querySelector('#forumPage [data-action="open-new-topic"]');
    if (newTopicBtn) newTopicBtn.textContent = translate('labels.newTopic');
    dom.chatSendButton.textContent = translate('labels.send');
    const newMessageBtn = document.querySelector('[data-action="open-new-message"]');
    if (newMessageBtn) newMessageBtn.textContent = translate('labels.newMessage');
}

function prepareStaticTexts() {
    dom.chatInput.placeholder = translate('labels.chatPlaceholder');
}

function translate(path, arg) {
    const segments = path.split('.');
    let current = translations[state.language];
    for (const segment of segments) {
        current = current[segment];
        if (current === undefined) {
            return path;
        }
    }
    if (typeof current === 'function') {
        return current(arg);
    }
    return current;
}

function renderStatCard(stat) {
    return `
        <div class="stat-card">
            <div class="stat-value">${numberFormatter[state.language].format(stat.value)}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `;
}

function renderUpcomingEventCard(event) {
    return `
        <div class="dashboard-item">
            <div class="dashboard-item-header">
                <span class="dashboard-item-title">${event.title}</span>
                <span class="dashboard-item-meta">${formatDate(event.startsAt)} • ${formatTime(event.startsAt)}</span>
            </div>
            <div class="dashboard-item-location">${event.location}</div>
            <div class="dashboard-item-actions">
                <button type="button" class="btn btn-secondary" data-role="open-detail" data-event-id="${event.id}">${translate('labels.seeDetails')}</button>
            </div>
        </div>
    `;
}

function renderDashboardMessage(message) {
    return `
        <div class="dashboard-message">
            <div class="dashboard-message-head">
                <span class="dashboard-message-author">${message.author}</span>
                <span class="dashboard-message-time">${formatRelative(message.createdAt)}</span>
            </div>
            <p class="dashboard-message-body">${message.content}</p>
        </div>
    `;
}

function renderDashboardTopic(topic) {
    const author = state.memberById.get(topic.authorId)?.name || 'MSC Member';
    const badgeClass = topic.category === 'annonces' || topic.category === 'msc' ? 'badge-msc' : 'badge-new';
    return `
        <div class="dashboard-topic">
            <div class="dashboard-topic-info">
                <span class="dashboard-topic-title">${topic.title}</span>
                <span class="dashboard-topic-meta">${topic.replies} repl. • ${formatRelative(topic.lastActivity)}</span>
            </div>
            <span class="event-badge ${badgeClass}">${translate(`forumCategories.${topic.category}`)}</span>
        </div>
    `;
}

function renderEventCard(event) {
    const isParticipant = event.participants.includes(state.currentUserId);
    const categoryLabel = translate(`categories.${event.category}`);
    const participantsLabel = translate('labels.attendees', event.participants.length);
    const price = formatPrice(event);
    const statusBadge = event.isExclusive ? '<span class="event-badge badge-msc">MSC</span>' : '';

    const ticketing = event.ticketing
        .map((platform) => {
            const availableClass = platform.available ? 'available' : 'unavailable';
            const badge = platform.isInternal ? `<span class="event-badge badge-msc">${translate('labels.internalBadge')}</span>` : '';
            return `
                <div class="ticketing-platform ${availableClass}" ${platform.available && platform.url ? `data-platform-url=\"${platform.url}\"` : ''}>
                    <div class="platform-info">
                        <div class="platform-name">${platform.name}</div>
                        <div class="platform-price">${platform.price === 0 ? translate('labels.priceFree') : formatPrice(platform)}</div>
                        ${badge}
                    </div>
                    <button type="button" class="platform-button" ${platform.available ? `data-platform-url=\"${platform.url}\"` : 'disabled'}>${platform.available ? translate('labels.available') : translate('labels.unavailable')}</button>
                </div>
            `;
        })
        .join('');

    return `
        <article class="card event-card">
            <header class="event-card-header">
                <div class="event-card-category">${categoryLabel}</div>
                ${statusBadge}
            </header>
            <h3 class="event-card-title">${event.title}</h3>
            <div class="event-card-meta">
                <span>📅 ${formatDate(event.startsAt)} • ${formatTime(event.startsAt)}</span>
                <span>📍 ${event.location}</span>
            </div>
            <p class="event-card-description">${event.description}</p>
            <div class="event-card-info">
                <span>${participantsLabel}</span>
                <span>${price}</span>
            </div>
            <div class="event-card-actions">
                <button type="button" class="btn btn-secondary" data-event-id="${event.id}" data-role="open-detail">${translate('labels.seeDetails')}</button>
                <button type="button" class="btn btn-primary ${isParticipant ? 'active' : ''}" data-event-id="${event.id}" data-role="toggle-participation">${isParticipant ? translate('labels.cancelParticipation') : translate('labels.participate')}</button>
            </div>
            ${event.ticketing.length ? `<div class="ticketing-wrapper"><h4>${translate('labels.ticketing')}</h4>${ticketing}</div>` : ''}
        </article>
    `;
}

function renderEventDetails(event) {
    const memberNames = event.participants
        .map((id) => state.memberById.get(id)?.name || 'Membre MSC')
        .join(', ');
    const participationButton = event.participants.includes(state.currentUserId)
        ? `<button type="button" class="btn btn-secondary" data-event-id="${event.id}" data-role="toggle-participation">${translate('labels.cancelParticipation')}</button>`
        : `<button type="button" class="btn btn-primary" data-event-id="${event.id}" data-role="toggle-participation">${translate('labels.participate')}</button>`;

    const ticketing = event.ticketing
        .map((platform) => {
            const price = platform.price === 0 ? translate('labels.priceFree') : formatPrice(platform);
            const availability = platform.available ? translate('labels.available') : translate('labels.soldOut');
            return `
                <div class="ticketing-platform ${platform.available ? 'available' : 'unavailable'}" ${platform.available && platform.url ? `data-platform-url=\"${platform.url}\"` : ''}>
                    <div class="platform-info">
                        <span class="platform-name">${platform.name}</span>
                        <span class="platform-price">${price}</span>
                    </div>
                    <button type="button" class="platform-button" ${platform.available ? `data-platform-url=\"${platform.url}\"` : 'disabled'}>${availability}</button>
                </div>
            `;
        })
        .join('');

    return `
        <div class="event-detail">
            <header class="event-detail-header">
                <h3>${event.title}</h3>
                <div class="event-detail-meta">
                    <span>📅 ${formatDate(event.startsAt)} • ${formatTime(event.startsAt)}</span>
                    <span>📍 ${event.location}</span>
                    <span>💶 ${formatPrice(event)}</span>
                </div>
            </header>
            <p class="event-detail-description">${event.description}</p>
            <section class="event-detail-section">
                <h4>${translate('labels.participants')}</h4>
                <p>${memberNames || (state.language === 'fr' ? 'Soyez le premier à participer.' : 'Be the first to join.')}</p>
            </section>
            ${event.ticketing.length ? `<section class="event-detail-section"><h4>${translate('labels.ticketing')}</h4>${ticketing}</section>` : ''}
            <footer class="event-detail-footer">
                ${participationButton}
                <button type="button" class="btn btn-secondary">${translate('labels.share')}</button>
            </footer>
        </div>
    `;
}

function renderMemberCard(member) {
    return `
        <article class="card member-card">
            <div class="member-avatar" aria-hidden="true">${member.avatar}</div>
            <h3 class="member-name">${member.name}</h3>
            <p class="member-role">${member.role}</p>
            <p class="member-bio">${member.bio}</p>
            <ul class="member-meta">
                <li><strong>${member.eventsAttended}</strong> events</li>
                <li>${member.location}</li>
            </ul>
            <div class="member-genres">${member.genres.map((genre) => `<span>${genre}</span>`).join('')}</div>
            <button type="button" class="btn btn-secondary" data-member-id="${member.id}">💬 Message</button>
        </article>
    `;
}

function renderConversationItem(conversation) {
    const lastMessage = conversation.messages.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
    const unread = conversation.messages.filter((msg) => msg.authorId !== state.currentUserId && !msg.readBy.includes(state.currentUserId)).length;
    return `
        <div class="conversation-item ${conversation.id === state.currentConversationId ? 'active' : ''}" data-conversation-id="${conversation.id}">
            <div class="conversation-initials">${computeConversationInitials(conversation)}</div>
            <div class="conversation-chunk">
                <div class="conversation-header">
                    <span class="conversation-title">${conversation.title}</span>
                    <span class="conversation-time">${lastMessage ? formatRelative(lastMessage.createdAt) : ''}</span>
                </div>
                <p class="conversation-preview">${lastMessage ? lastMessage.content : 'Nouvelle conversation'}</p>
            </div>
            ${unread ? `<span class="conversation-unread">${unread}</span>` : ''}
        </div>
    `;
}

function renderChatMessage(message, conversation) {
    const isOwn = message.authorId === state.currentUserId;
    const author = isOwn ? 'Vous' : state.memberById.get(message.authorId)?.name || 'Membre MSC';
    return `
        <div class="message ${isOwn ? 'message-own' : ''}">
            <div class="message-bubble">
                <div class="message-author">${author}</div>
                <div class="message-content">${message.content}</div>
                <div class="message-time">${formatRelative(message.createdAt)}</div>
            </div>
        </div>
    `;
}

function renderBandCard(band) {
    return `
        <article class="card band-card">
            <h3>${band.name}</h3>
            <p class="band-meta">${band.style} • ${band.origin}</p>
            <p class="band-description">${band.description}</p>
            <div class="band-footer">
                <span>${numberFormatter[state.language].format(band.followers)} ${state.language === 'fr' ? 'abonnés' : 'followers'}</span>
                <div class="band-actions">
                    <button type="button" class="btn btn-primary">Voir profil</button>
                    <button type="button" class="btn btn-secondary">Suivre</button>
                </div>
            </div>
        </article>
    `;
}

function renderForumRow(topic) {
    const author = state.memberById.get(topic.authorId)?.name || 'MSC';
    const badgeClass = topic.category === 'annonces' ? 'badge-msc' : 'badge-new';
    return `
        <tr>
            <td>
                <div class="forum-topic-title">${topic.title}</div>
                <div class="forum-topic-meta">${translate(`forumCategories.${topic.category}`)} • ${author}</div>
            </td>
            <td><span class="event-badge ${badgeClass}">${translate(`forumCategories.${topic.category}`)}</span></td>
            <td>${topic.replies}</td>
            <td>${formatRelative(topic.lastActivity)}</td>
        </tr>
    `;
}

function renderNotificationItem(notification) {
    const icon = {
        event: '📅',
        message: '💬',
        community: '👥',
        forum: '💭'
    }[notification.type] || '🔔';
    return `
        <article class="notification-item ${notification.read ? 'read' : ''}" data-notification-id="${notification.id}">
            <div class="notification-icon">${icon}</div>
            <div class="notification-content">
                <div class="notification-title">${notification.title}</div>
                <p class="notification-text">${notification.body}</p>
                <span class="notification-time">${formatRelative(notification.createdAt)}</span>
            </div>
        </article>
    `;
}

function renderEmptyState(message) {
    return `
        <div class="empty-state">
            <div class="empty-state-icon">🤘</div>
            <p>${message}</p>
        </div>
    `;
}

function getUpcomingEvents(limit) {
    return state.events
        .filter((event) => new Date(event.startsAt) >= new Date())
        .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt))
        .slice(0, limit);
}

function getRecentMessages(limit) {
    const messages = [];
    state.conversations.forEach((conversation) => {
        conversation.messages.forEach((message) => {
            messages.push({ ...message, conversationId: conversation.id, conversationTitle: conversation.title });
        });
    });
    return messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, limit).map((message) => ({
        author: message.authorId === state.currentUserId ? 'Vous' : state.memberById.get(message.authorId)?.name || message.conversationTitle,
        content: message.content,
        createdAt: message.createdAt
    }));
}

function computeDashboardStats() {
    const monthStart = new Date();
    monthStart.setDate(1);
    const eventsThisMonth = state.events.filter((event) => new Date(event.startsAt) >= monthStart).length;
    const activeMembers = state.members.length;
    const unreadMessages = state.conversations.reduce((total, conversation) => {
        const unread = conversation.messages.filter((msg) => msg.authorId !== state.currentUserId && !msg.readBy.includes(state.currentUserId)).length;
        return total + unread;
    }, 0);
    const pendingInvites = 3;
    return { eventsThisMonth, activeMembers, unreadMessages, pendingInvites };
}

function computeAdminStats() {
    return [
        {
            label: state.language === 'fr' ? 'Membres totaux' : 'Total members',
            value: state.members.length
        },
        {
            label: state.language === 'fr' ? 'Événements programmés' : 'Scheduled events',
            value: state.events.length
        },
        {
            label: state.language === 'fr' ? 'Suggestions en attente' : 'Pending suggestions',
            value: state.suggestedEvents.filter((suggestion) => suggestion.status === 'pending').length
        },
        {
            label: state.language === 'fr' ? 'Messages forum' : 'Forum messages',
            value: state.forumTopics.reduce((total, topic) => total + topic.replies, 0)
        },
        {
            label: state.language === 'fr' ? 'Groupes référencés' : 'Bands referenced',
            value: Object.values(state.bands).reduce((total, bands) => total + bands.length, 0)
        }
    ];
}

function filterEventsByCategory(event) {
    if (state.currentEventFilter === 'all') return true;
    return event.category === state.currentEventFilter;
}

function filterEventsBySearch(event) {
    if (!state.eventSearchTerm) return true;
    const term = state.eventSearchTerm;
    return (
        event.title.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term)
    );
}

function updateUserAvatar(member) {
    const avatarText = computeInitials(member.name);
    document.querySelector('.user-avatar').textContent = avatarText;
    dom.userMenuAvatar.textContent = avatarText;
    dom.userMenuName.textContent = member.name;
    dom.userMenuEmail.textContent = member.email;
}

function openUserMenu() {
    const member = state.memberById.get(state.currentUserId);
    if (member) {
        updateUserAvatar(member);
    }
    openModal('userMenuModal');
}

function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('active');
    dom.body.classList.add('modal-open');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('active');
    if (id === 'eventModal') {
        delete dom.eventModalContent.dataset.context;
        delete dom.eventModalContent.dataset.suggestionId;
    }
    if (!document.querySelector('.modal.active')) {
        dom.body.classList.remove('modal-open');
    }
}

function logout() {
    dom.appContainer.classList.remove('active');
    dom.loginPage.style.display = 'flex';
    dom.body.classList.remove('app-active');
    state.currentUserId = null;
    state.currentConversationId = null;
    dom.chatInput.value = '';
    dom.chatInput.disabled = true;
    dom.chatSendButton.disabled = true;
}

function showForgotPassword() {
    updateFeedback(dom.loginFeedback, translate('labels.forgotPassword'), 'success');
}

function updateFeedback(element, message, type) {
    element.textContent = message;
    element.className = `form-feedback ${type}`;
}

function generateId(prefix) {
    return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function computeInitials(name) {
    return name
        .split(' ')
        .map((part) => part.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('');
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
    return new Intl.NumberFormat(state.language === 'fr' ? 'fr-FR' : 'en-US', {
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
            return relativeFormatter[state.language].format(-value, range.unit);
        }
    }
    return '';
}

function computeConversationInitials(conversation) {
    if (conversation.participantIds.length === 2) {
        const other = conversation.participantIds.find((id) => id !== state.currentUserId);
        return computeInitials(state.memberById.get(other)?.name || conversation.title);
    }
    return conversation.title
        .split(' ')
        .map((part) => part.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('');
}

function getConversationLastDate(conversation) {
    const lastMessage = conversation.messages.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
    return lastMessage ? new Date(lastMessage.createdAt) : new Date(0);
}

function createMemberFromIdentifier(identifier) {
    const clean = identifier.replace(/@.+/, '').replace(/[^a-zA-Z]/g, ' ');
    const name = clean
        .split(' ')
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ') || 'Membre MSC';
    return {
        id: generateId('mem'),
        name,
        email: identifier.includes('@') ? identifier : `${identifier}@msc.fr`,
        role: 'Membre MSC',
        bio: 'Nouveau membre enthousiaste du MSC.',
        location: 'Paris, FR',
        genres: ['Metal'],
        instruments: [],
        eventsAttended: 0,
        messagesSent: 0,
        joinedAt: new Date().toISOString().slice(0, 10),
        avatar: computeInitials(name)
    };
}

function populateRecipientSelect() {
    dom.messageRecipient.innerHTML = state.members
        .filter((member) => member.id !== state.currentUserId)
        .map((member) => `<option value="${member.id}">${member.name}</option>`)
        .join('');
}

function createNotification({ type, title, body, read }) {
    state.notifications.unshift({
        id: generateId('not'),
        type,
        title,
        body,
        createdAt: new Date().toISOString(),
        read
    });
    renderNotificationBadge();
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

function handleTicketingInteraction(target) {
    if (!target || !target.dataset.platformUrl) {
        return false;
    }
    const isDisabled = target.hasAttribute('disabled') || target.classList.contains('unavailable');
    if (isDisabled) {
        return true;
    }
    const url = target.dataset.platformUrl;
    if (!url || url === '#') {
        const msg = state.language === 'fr' ? 'Réservation MSC disponible prochainement.' : 'MSC booking coming soon.';
        showToast(msg, 'info');
    } else {
        window.open(url, '_blank');
    }
    return true;
}

function simulateAutoReply(conversation) {
    const otherParticipant = conversation.participantIds.find((id) => id !== state.currentUserId);
    if (!otherParticipant) return;
    const otherMember = state.memberById.get(otherParticipant);
    setTimeout(() => {
        const replyText = otherMember
            ? (state.language === 'fr'
                ? `${otherMember.name.split(' ')[0]} a vu votre message et répondra très vite !`
                : `${otherMember.name.split(' ')[0]} saw your message and will reply soon!`)
            : state.language === 'fr'
                ? 'Message reçu !'
                : 'Message received!';
        conversation.messages.push({
            id: generateId('msg'),
            authorId: otherParticipant,
            content: replyText,
            createdAt: new Date().toISOString(),
            readBy: [otherParticipant]
        });
        if (state.currentConversationId === conversation.id) {
            renderConversation(conversation.id);
        }
        renderConversationsList();
    }, 2000 + Math.random() * 2000);
}
