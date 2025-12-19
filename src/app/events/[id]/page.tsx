import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { allEvents } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = allEvents.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl py-8 px-4 md:px-6 animate-in fade-in-50 duration-500">
      <div className="space-y-6">
        <div className="space-y-2">
          <Badge variant="secondary">{event.category}</Badge>
          <h1 className="font-headline text-4xl font-bold">{event.title}</h1>
        </div>

        <Card>
          <CardContent className="p-6 grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 mt-0.5 text-primary" />
              <div>
                <p className="font-semibold">Date</p>
                <p className="text-muted-foreground">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-0.5 text-primary" />
              <div>
                <p className="font-semibold">Time</p>
                <p className="text-muted-foreground">{event.time}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 col-span-2">
              <MapPin className="w-5 h-5 mt-0.5 text-primary" />
              <div>
                <p className="font-semibold">Venue</p>
                <p className="text-muted-foreground">{event.venue}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="font-headline text-2xl font-semibold mb-2">Synopsis</h2>
          <p className="text-muted-foreground leading-relaxed">{event.synopsis}</p>
        </div>
        
        <Button asChild size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6">
            <Link href={`/events/${event.id}/book`}>
                <Ticket className="mr-2 h-6 w-6"/>
                Book Now from ${event.price}
            </Link>
        </Button>

        <Separator />

      </div>
    </div>
  );
}
