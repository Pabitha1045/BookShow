'use client';

import { useState, useEffect } from 'react';
import type { Event } from '@/lib/types';
import { getRecommendations } from '@/actions/get-recommendations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { EventCard } from './event-card';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function Recommendations() {
  const [recommendations, setRecommendations] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      try {
        const recs = await getRecommendations();
        setRecommendations(recs);
      } catch (error) {
        console.error("Failed to fetch recommendations:", error);
        setRecommendations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <Carousel opts={{ align: 'start' }} className="w-full">
        <CarouselContent>
          {[...Array(3)].map((_, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-1">
              <Card className="overflow-hidden">
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/2 mt-2" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }

  if (!recommendations || recommendations.length === 0) {
    return <p className="text-muted-foreground text-center py-8">No special recommendations for you at the moment. Explore our upcoming events!</p>;
  }

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2">
        {recommendations.map((event) => (
          <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3 pl-2">
            <div className="p-1 h-full">
              <EventCard event={event} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
