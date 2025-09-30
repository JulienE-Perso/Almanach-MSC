'use strict';

window.MSC_DATA = (function() {
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
            bio: 'Anime les échanges de la communauté et les activités réseaux sociaux du MSC.',
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
            type: 'discussion',
            title: 'Nouvelle réponse : Gojira + Knocked Loose',
            body: 'Diane a relancé la discussion de covoiturage pour Gojira.',
            createdAt: '2025-02-09T09:05:00',
            read: false
        }
    ],
    eventDiscussions: {
        'evt-gojira': [
            {
                id: 'ed-gojira-001',
                authorId: 'mem-diane',
                content: 'Je pars de République à 18h pour covoiturer. Il me reste 2 places.',
                createdAt: '2025-02-10T10:45:00'
            },
            {
                id: 'ed-gojira-002',
                authorId: 'mem-bob',
                content: 'Intéressé ! Je peux amener des bouchons d’oreille pour tout le monde.',
                createdAt: '2025-02-10T11:05:00'
            }
        ],
        'evt-session12': [
            {
                id: 'ed-session12-001',
                authorId: 'mem-alice',
                content: 'On prévoit un after à partir de 1h au bar du Klub, venez tôt !',
                createdAt: '2025-02-09T21:20:00'
            },
            {
                id: 'ed-session12-002',
                authorId: 'mem-frank',
                content: 'Besoin d’un coup de main pour installer la captation vidéo à 18h.',
                createdAt: '2025-02-09T22:15:00'
            }
        ],
        'evt-hellfest': [
            {
                id: 'ed-hellfest-001',
                authorId: 'mem-ines',
                content: 'On a un camping MSC réservé, envoyez-moi un message pour réserver votre place.',
                createdAt: '2025-02-08T17:50:00'
            }
        ]
    },
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
            dashboard: 'Accueil',
            events: 'Événements',
            messages: 'Messages',
            members: 'Membres',
            bands: 'Groupes'
        },
        headings: {
            dashboardTitle: '🏠',
            dashboardSubtitle: (name) => `Bienvenue ${name} ! Voici les dernières nouvelles du MSC`,
            eventsTitle: '📅 Événements',
            eventsSubtitle: 'Tous les événements Metal à venir',
            membersTitle: '👥 Membres',
            membersSubtitle: 'La communauté Metal Social Club',
            bandsTitle: '🎵 Groupes & Artistes',
            bandsSubtitle: 'Base de données des groupes Metal',
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
            loginRequired: 'Veuillez vous connecter pour proposer un concert.',
            eventDiscussionHeading: 'Discussion de l’événement',
            eventDiscussionEmpty: 'Pas encore de message. Lancez la discussion !',
            eventDiscussionPlaceholder: 'Partagez une info, proposez un covoiturage...',
            eventDiscussionSubmit: 'Publier',
            eventDiscussionPosted: 'Message publié',
            dashboardEventDiscussionTitle: '💬 Discussions événements'
        },
        categories: {
            all: 'Tous',
            concert: '🎸 Concerts',
            festival: '🏕️ Festivals',
            msc: '⭐ Sessions MSC',
            conference: '🎤 Conférences',
            expo: '🎨 Expositions'
        },
        time: {
            today: 'Aujourd’hui',
            yesterday: 'Hier'
        }
    },
    en: {
        nav: {
            dashboard: 'Home',
            events: 'Events',
            messages: 'Messages',
            members: 'Members',
            bands: 'Artists'
        },
        headings: {
            dashboardTitle: '🏠',
            dashboardSubtitle: (name) => `Welcome ${name}! Here is the latest MSC activity`,
            eventsTitle: '📅 Events',
            eventsSubtitle: 'All upcoming metal events',
            membersTitle: '👥 Members',
            membersSubtitle: 'Meet the Metal Social Club community',
            bandsTitle: '🎵 Artists & Bands',
            bandsSubtitle: 'Curated database of metal acts',
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
            loginRequired: 'Please log in to submit a concert.',
            eventDiscussionHeading: 'Event discussion',
            eventDiscussionEmpty: 'No message yet. Start the conversation!',
            eventDiscussionPlaceholder: 'Share info, organize transport, ask questions...',
            eventDiscussionSubmit: 'Post',
            eventDiscussionPosted: 'Message posted',
            dashboardEventDiscussionTitle: '💬 Event discussions'
        },
        categories: {
            all: 'All',
            concert: '🎸 Concerts',
            festival: '🏕️ Festivals',
            msc: '⭐ MSC Sessions',
            conference: '🎤 Conferences',
            expo: '🎨 Exhibitions'
        },
        time: {
            today: 'Today',
            yesterday: 'Yesterday'
        }
    }
};



    return { seedData, translations };
})();
