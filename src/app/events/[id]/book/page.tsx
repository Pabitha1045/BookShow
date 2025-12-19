import { notFound } from 'next/navigation';
import { allEvents } from '@/lib/data';
import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { SeatSelector } from '@/components/booking/seat-selector';
import { PaymentForm } from '@/components/booking/payment-form';
import { Card } from '@/components/ui/card';

export default function BookingPage({ params }: { params: { id: string } }) {
  const event = allEvents.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4 md:px-6 animate-in fade-in-50 duration-500">
        <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8">Complete Your Booking</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-8">
          <SeatSelector event={event} />
          <PaymentForm />
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <div className="relative h-48 w-full">
              <Image
                src={event.imageUrl}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                data-ai-hint={event.imageHint}
              />
            </div>
            <div className="p-4 space-y-3">
              <h2 className="font-headline text-xl font-bold">{event.title}</h2>
              <div className="text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.venue}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
