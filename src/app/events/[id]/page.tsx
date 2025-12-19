import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, MapPin, Star, Ticket } from 'lucide-react';
import { allEvents } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = allEvents.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  const averageRating =
    event.reviews.length > 0
      ? event.reviews.reduce((acc, r) => acc + r.rating, 0) / event.reviews.length
      : 0;

  return (
    <div className="container mx-auto max-w-5xl py-8 px-4 md:px-6 animate-in fade-in-50 duration-500">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card className="overflow-hidden sticky top-24">
            <Image
              src={event.imageUrl}
              alt={event.title}
              width={400}
              height={600}
              className="w-full object-cover"
              data-ai-hint={event.imageHint}
            />
          </Card>
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary">{event.category}</Badge>
            <h1 className="font-headline text-4xl font-bold">{event.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
                {averageRating > 0 && (
                    <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="font-bold">{averageRating.toFixed(1)}</span>
                        <span>({event.reviews.length} reviews)</span>
                    </div>
                )}
            </div>
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

          <div>
            <h2 className="font-headline text-2xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-6">
              {event.reviews.length > 0 ? event.reviews.map((review, index) => (
                <Card key={index}>
                  <CardHeader className="flex-row gap-4 items-center">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${review.author}`} />
                      <AvatarFallback>{review.author.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{review.author}</CardTitle>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={cn("w-4 h-4", i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50")} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              )) : <p className="text-muted-foreground">No reviews yet for this event.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
