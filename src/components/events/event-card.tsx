import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';
import type { Event } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <CardHeader className="p-4">
        <Badge className="w-fit" variant={event.category === 'Movie' ? 'default' : 'secondary'}>{event.category}</Badge>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-lg mb-2">
          <Link href={`/events/${event.id}`} className="hover:text-primary">
            {event.title}
          </Link>
        </CardTitle>
        <div className="text-sm text-muted-foreground space-y-1">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.venue}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="outline">
          <Link href={`/events/${event.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
