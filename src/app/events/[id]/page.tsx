'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { Calendar, Clock, MapPin, Ticket, Star } from 'lucide-react';
import { allEvents } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function EventDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const event = allEvents.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const upiLink = `upi://pay?pa=recipient@bank&pn=Recipient%20Name&am=${event.price}&cu=INR&tn=Booking%20for%20${encodeURIComponent(event.title)}`;


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
            <Link href={upiLink}>
                <Ticket className="mr-2 h-6 w-6"/>
                Book Now from ₹{event.price}
            </Link>
        </Button>

        <Separator />
        
        <div className="space-y-8">
            <h2 className="font-headline text-2xl font-semibold">Reviews</h2>
            <Card>
              <CardHeader>
                <CardTitle>Write a Review</CardTitle>
                <CardDescription>Share your thoughts about this event.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="grid w-full gap-2">
                      <Label htmlFor="review">Your Review</Label>
                      <Textarea id="review" placeholder="What did you think of the event?" />
                  </div>
                  <Button>Submit Review</Button>
              </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
