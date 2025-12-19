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
    imageUrl: 'data:image/jpeg;base64,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',
    imageHint: 'tamil movie poster',
    synopsis: 'A retired jailer goes on a spree to avenge his son\'s death, who was a police officer. The film is a roller coaster of emotions and action.',
    reviews: [
      { rating: 5, text: 'An absolute masterpiece of Tamil cinema!', author: 'Muthu Krishnan' },
      { rating: 4, text: 'Great action, a bit predictable plot.', author: 'Priya Anand' },
    ],
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
    imageUrl: 'https://picsum.photos/seed/movie2/400/600',
    imageHint: 'action movie',
    synopsis: 'A cafe owner becomes a local hero, but his past actions return to haunt him. This action-packed movie is full of thrilling chase sequences.',
    reviews: [
      { rating: 5, text: 'Edge-of-your-seat thriller!', author: 'Karthik Raja' },
    ],
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
    imageUrl: 'https://picsum.photos/seed/movie3/400/600',
    imageHint: 'thriller movie',
    synopsis: 'A special agent investigates a series of murders, which leads him to a drug syndicate. An intense, action-packed thriller.',
    reviews: [
      { rating: 5, text: 'A night to remember! The suspense is unmatched.', author: 'Anitha Subramanian' },
    ],
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
    imageUrl: 'https://picsum.photos/seed/movie4/400/600',
    imageHint: 'historical movie',
    synopsis: 'Based on the classic novel, this epic historical drama tells the story of the early days of Arulmozhivarman, who would become the great Chola emperor.',
    reviews: [
      { rating: 5, text: 'A fresh and brilliant take on a classic.', author: 'Deepa Iyer' },
    ],
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
    imageUrl: 'https://picsum.photos/seed/concert2/600/400',
    imageHint: 'pop concert',
    synopsis: 'Chart-topping pop sensation "Aria" brings her spectacular "Starlight Serenade" tour to the city. Expect dazzling visuals and unforgettable melodies.',
    reviews: [
      { rating: 4, text: 'A fantastic show, great for all ages.', author: 'Chris Green' },
    ],
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
    imageUrl: 'https://picsum.photos/seed/movie5/400/600',
    imageHint: 'action comedy',
    synopsis: 'A former RAW agent is trapped in a mall taken over by terrorists. He decides to save the hostages by himself. A mix of action and dark comedy.',
    reviews: [
      { rating: 4, text: 'I haven\'t laughed this hard in years!', author: 'Ramesh Kumar' },
    ],
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
    imageUrl: 'https://picsum.photos/seed/sports1/600/400',
    imageHint: 'football match',
    synopsis: 'The two best teams in the league face off for the ultimate prize. Witness history in the making in this high-stakes football championship final.',
    reviews: [
      { rating: 5, text: 'The atmosphere was electric! A must-see for any sports fan.', author: 'David Chen' },
    ],
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
        eventImageUrl: 'https://picsum.photos/seed/concert1/600/400',
        seats: ['D5', 'D6'],
        totalPrice: 150,
        bookingDate: '2024-08-01',
    },
    {
        id: 'booking2',
        eventId: '7',
        eventTitle: 'Championship Finals',
        eventDate: '2024-09-22',
        eventImageUrl: 'https://picsum.photos/seed/sports1/600/400',
        seats: ['Section 102, Row G, Seat 12', 'Section 102, Row G, Seat 13'],
        totalPrice: 240,
        bookingDate: '2024-08-10',
    }
]
