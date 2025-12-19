import type { Event, Booking, UserProfile } from './types';

export const allEvents: Event[] = [
  {
    id: '1',
    title: 'Galaxy Runners',
    category: 'Movie',
    date: '2024-08-15',
    time: '20:00',
    venue: 'Starlight Cinema',
    price: 15,
    imageUrl: 'https://picsum.photos/seed/movie1/400/600',
    imageHint: 'sci-fi movie',
    synopsis: 'In a distant galaxy, a group of rebels fights against an oppressive regime. A thrilling sci-fi adventure with stunning visual effects and a captivating story.',
    reviews: [
      { rating: 5, text: 'An absolute masterpiece of the sci-fi genre!', author: 'Jane Doe' },
      { rating: 4, text: 'Great action, a bit predictable plot.', author: 'John Smith' },
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
    title: 'The Crimson Heist',
    category: 'Movie',
    date: '2024-08-20',
    time: '19:30',
    venue: 'Metroplex 12',
    price: 14,
    imageUrl: 'https://picsum.photos/seed/movie2/400/600',
    imageHint: 'action movie',
    synopsis: 'A team of elite thieves attempts to pull off the most daring robbery in history. Full of twists, turns, and high-octane action sequences.',
    reviews: [
      { rating: 4, text: 'Edge-of-your-seat thriller!', author: 'Emily White' },
    ],
    seating: {
        rows: 9,
        cols: 15,
        unavailable: ['B3', 'B4', 'E9', 'E10', 'G11', 'G12'],
    }
  },
  {
    id: '3',
    title: 'Echoes of the Void',
    category: 'Concert',
    date: '2024-09-05',
    time: '21:00',
    venue: 'The Grand Arena',
    price: 75,
    imageUrl: 'https://picsum.photos/seed/concert1/600/400',
    imageHint: 'rock concert',
    synopsis: 'Legendary rock band "Echoes of the Void" returns for a one-night-only performance, playing their greatest hits and new tracks from their latest album.',
    reviews: [
      { rating: 5, text: 'A night to remember! Their energy is unmatched.', author: 'Mike Ross' },
    ],
    seating: {
        rows: 10,
        cols: 20,
        unavailable: ['C1', 'C2', 'D10', 'H5', 'H6', 'H7'],
    }
  },
  {
    id: '4',
    title: 'A Midsummer Night\'s Dream',
    category: 'Theatre',
    date: '2024-09-12',
    time: '19:00',
    venue: 'Royal Theatre',
    price: 50,
    imageUrl: 'https://picsum.photos/seed/theatre1/600/400',
    imageHint: 'stage play',
    synopsis: 'A classic Shakespearean comedy brought to life with a modern twist. Follow the hilarious misadventures of lovers, fairies, and amateur actors in a magical forest.',
    reviews: [
      { rating: 5, text: 'A fresh and brilliant take on a classic.', author: 'Sarah Lee' },
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
    title: 'Laugh Riot',
    category: 'Movie',
    date: '2024-08-25',
    time: '21:00',
    venue: 'Comedy Central Cinema',
    price: 12,
    imageUrl: 'https://picsum.photos/seed/movie3/400/600',
    imageHint: 'comedy movie',
    synopsis: 'When a meticulously planned wedding goes hilariously wrong, two families must survive a weekend of chaos. A side-splitting comedy.',
    reviews: [
      { rating: 4, text: 'I haven\'t laughed this hard in years!', author: 'Ben Carter' },
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
