import React from 'react';
import { EventFilters } from '@/components/events/event-filters';
import { EventList } from '@/components/events/event-list';
import { Recommendations } from '@/components/events/recommendations';
import { Separator } from '@/components/ui/separator';
import { allEvents } from '@/lib/data';
import type { Event } from '@/lib/types';
import { Suspense } from 'react';

export default function HomePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchTerm = typeof searchParams?.search === 'string' ? searchParams.search.toLowerCase() : '';
  
  const filteredEvents: Event[] = allEvents.filter(event => {
    const matchesSearch = searchTerm ? event.title.toLowerCase().includes(searchTerm) : true;
    const matchesCategory = event.category === 'Movie';
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 animate-in fade-in-50 duration-500">
      <section className="bg-card py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-primary">
              Find Your Next Movie
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
              Discover and book tickets for the best movies happening near you.
            </p>
        </div>
      </section>

      <main className="container mx-auto py-8 px-4 md:px-6">
        <EventFilters />

        <Separator className="my-12" />

        <div>
          <h2 className="font-headline text-3xl font-bold mb-6" id="events">Upcoming Movies</h2>
          <EventList events={filteredEvents} />
        </div>
      </main>
    </div>
  );
}

function RecommendationsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-4">
          <div className="h-48 w-full rounded-lg bg-muted animate-pulse" />
          <div className="space-y-2">
            <div className="h-6 w-3/4 rounded bg-muted animate-pulse" />
            <div className="h-4 w-1/2 rounded bg-muted animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}
