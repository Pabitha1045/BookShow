import type { Event, Booking, UserProfile } from './types';

export const allEvents: Event[] = [];

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
        eventImageUrl: '/images/concert1.jpg',
        seats: ['D5', 'D6'],
        totalPrice: 150,
        bookingDate: '2024-08-01',
    },
    {
        id: 'booking2',
        eventId: '7',
        eventTitle: 'Championship Finals',
        eventDate: '2024-09-22',
        eventImageUrl: '/images/sports1.jpg',
        seats: ['Section 102, Row G, Seat 12', 'Section 102, Row G, Seat 13'],
        totalPrice: 240,
        bookingDate: '2024-08-10',
    }
]
