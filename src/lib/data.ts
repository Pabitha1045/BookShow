import type { Event, Booking, UserProfile } from './types';

export const allEvents: Event[] = [
  {
    id: '1',
    title: 'Jailer',
    category: 'Movie',
    date: '2024-08-15',
    time: '20:00',
    venue: 'Starlight Cinema',
    price: 18,
    imageUrl: '/images/jailer.jpg',
    imageHint: 'tamil movie poster',
    synopsis: 'A retired jailer goes on a spree to avenge his son\'s death, who was a police officer. The film is a roller coaster of emotions and action.',
    trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    seating: {
        rows: 8,
        cols: 12,
        unavailable: ['A5', 'A6', 'C7', 'C8', 'F2', 'F3'],
    }
  },
  {
    id: '2',
    title: 'Leo',
    category: 'Movie',
    date: '2024-08-20',
    time: '19:30',
    venue: 'Metroplex 12',
    price: 20,
    imageUrl: '/images/leo.jpg',
    imageHint: 'action movie',
    synopsis: 'A cafe owner becomes a local hero, but his past actions return to haunt him. This action-packed movie is full of thrilling chase sequences.',
    seating: {
        rows: 9,
        cols: 15,
        unavailable: ['B3', 'B4', 'E9', 'E10', 'G11', 'G12'],
    }
  },
  {
    id: '3',
    title: 'Vikram',
    category: 'Movie',
    date: '2024-09-05',
    time: '21:00',
    venue: 'The Grand Arena',
    price: 15,
    imageUrl: '/images/vikram.jpg',
    imageHint: 'thriller movie',
    synopsis: 'A special agent investigates a series of murders, which leads him to a drug syndicate. An intense, action-packed thriller.',
    seating: {
        rows: 10,
        cols: 20,
        unavailable: ['C1', 'C2', 'D10', 'H5', 'H6', 'H7'],
    }
  },
  {
    id: '4',
    title: 'Ponniyin Selvan: I',
    category: 'Movie',
    date: '2024-09-12',
    time: '19:00',
    venue: 'Royal Theatre',
    price: 25,
    imageUrl: '/images/ponniyin-selvan.jpg',
    imageHint: 'historical movie',
    synopsis: 'Based on the classic novel, this epic historical drama tells the story of the early days of Arulmozhivarman, who would become the great Chola emperor.',
    seating: {
        rows: 7,
        cols: 10,
        unavailable: ['A1', 'A10', 'D5'],
    }
  },
    {
    id: '5',
    title: 'Starlight Serenade',
    category: 'Concert',
    date: '2024-09-18',
    time: '20:30',
    venue: 'City Amphitheater',
    price: 60,
    imageUrl: 'https://picsum.photos/seed/concert2/600/900',
    imageHint: 'pop concert',
    synopsis: 'Chart-topping pop sensation "Aria" brings her spectacular "Starlight Serenade" tour to the city. Expect dazzling visuals and unforgettable melodies.',
    seating: {
        rows: 12,
        cols: 25,
        unavailable: ['SEC-A-R5-S10', 'SEC-B-R2-S4'],
    }
  },
  {
    id: '6',
    title: 'Beast',
    category: 'Movie',
    date: '2024-08-25',
    time: '21:00',
    venue: 'Comedy Central Cinema',
    price: 16,
    imageUrl: '/images/beast.jpg',
    imageHint: 'action comedy',
    synopsis: 'A former RAW agent is trapped in a mall taken over by terrorists. He decides to save the hostages by himself. A mix of action and dark comedy.',
    seating: {
        rows: 6,
        cols: 8,
        unavailable: ['A3', 'C4', 'C5', 'E7'],
    }
  },
  {
    id: '7',
    title: 'Championship Finals',
    category: 'Sports',
    date: '2024-09-22',
    time: '15:00',
    venue: 'National Stadium',
    price: 120,
    imageUrl: 'https://picsum.photos/seed/sports1/600/900',
    imageHint: 'football match',
    synopsis: 'The two best teams in the league face off for the ultimate prize. Witness history in the making in this high-stakes football championship final.',
     seating: {
        rows: 30,
        cols: 40,
        unavailable: [],
    }
  },
];

export const userProfile: UserProfile = {
    name: 'Alex Ray',
    email: 'alex.ray@example.com',
    preferences: ['sci-fi', 'rock music', 'thrillers'],
    pastBookings: [
        { eventId: '1', eventTitle: 'Galaxy Runners', bookingDate: '2024-07-01'},
        { eventId: '2', eventTitle: 'The Crimson Heist', bookingDate: '2024-07-10'},
    ],
};


export const userBookings: Booking[] = [
    {
        id: 'booking1',
        eventId: '3',
        eventTitle: 'Echoes of the Void',
        eventDate: '2024-09-05',
        eventImageUrl: 'https://picsum.photos/seed/concert1/600/900',
        seats: ['D5', 'D6'],
        totalPrice: 150,
        bookingDate: '2024-08-01',
    },
    {
        id: 'booking2',
        eventId: '7',
        eventTitle: 'Championship Finals',
        eventDate: '2024-09-22',
        eventImageUrl: 'https://picsum.photos/seed/sports1/600/900',
        seats: ['Section 102, Row G, Seat 12', 'Section 102, Row G, Seat 13'],
        totalPrice: 240,
        bookingDate: '2024-08-10',
    }
]
