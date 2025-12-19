import Link from 'next/link';
import { notFound } from 'next/navigation';
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

// Mock reviews for demonstration
const mockReviews = [
  {
    id: '1',
    author: 'Anjali Kumar',
    rating: 5,
    text: 'What a masterpiece! The direction and acting were top-notch. A must-watch for all cinema lovers.',
    date: '2024-08-16',
  },
  {
    id: '2',
    author: 'Rohan Sharma',
    rating: 4,
    text: 'A great action entertainer. The second half was a bit slow, but the climax was mind-blowing.',
    date: '2024-08-17',
  },
];


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

            <div className="space-y-6">
                {mockReviews.map(review => (
                    <Card key={review.id} className="bg-background">
                        <CardHeader className="p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg">{review.author}</CardTitle>
                                    <CardDescription>{new Date(review.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</CardDescription>
                                </div>
                                <div className="flex items-center gap-1 text-amber-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'fill-muted stroke-muted-foreground'}`} />
                                    ))}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="text-muted-foreground">{review.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
