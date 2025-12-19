export type Event = {
  id: string;
  title: string;
  category: 'Movie' | 'Concert' | 'Theatre' | 'Sports';
  date: string;
  time: string;
  venue: string;
  price: number;
  imageUrl: string;
  imageHint: string;
  synopsis: string;
  trailerUrl?: string;
  seating?: {
    rows: number;
    cols: number;
    unavailable: string[];
  }
};

export type Booking = {
  id: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  eventImageUrl: string;
  seats: string[];
  totalPrice: number;
  bookingDate: string;
};

export type UserProfile = {
  name: string;
  email: string;
  preferences: string[];
  pastBookings: Pick<Booking, 'eventId' | 'eventTitle' | 'bookingDate'>[];
};
