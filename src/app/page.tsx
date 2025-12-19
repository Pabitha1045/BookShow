import React from 'react';
import { EventFilters } from '@/components/events/event-filters';
import { EventList } from '@/components/events/event-list';
import { Separator } from '@/components/ui/separator';
import { allEvents } from '@/lib/data';
import type { Event } from '@/lib/types';
import { Suspense } from 'react';

function EventLists({ searchTerm }: { searchTerm: string }) {
  const filteredEvents: Event[] = allEvents.filter(event => {
    const matchesSearch = searchTerm ? event.title.toLowerCase().includes(searchTerm) : true;
    return matchesSearch;
  });

  const movies = filteredEvents.filter(e => e.category === 'Movie');
  const series = filteredEvents.filter(e => e.category === 'Series');

  return (
    <>
      <div>
        <h2 className="font-headline text-3xl font-bold mb-6" id="movies">Upcoming Movies</h2>
        <EventList events={movies} />
      </div>

      {series.length > 0 && (
        <div className="mt-16">
          <h2 className="font-headline text-3xl font-bold mb-6" id="series">Popular Series</h2>
          <EventList events={series} />
        </div>
      )}
    </>
  );
}

export default function HomePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchTerm = typeof searchParams?.search === 'string' ? searchParams.search.toLowerCase() : '';

  return (
    <div className="flex-1 animate-in fade-in-50 duration-500">
      <section className="bg-card py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-primary">
              Find Your Next Favourite
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
              Discover and book tickets for the best movies, and binge-watch the best series.
            </p>
        </div>
      </section>

      <main className="container mx-auto py-8 px-4 md:px-6">
        <EventFilters />

        <Separator className="my-12" />
        
        <Suspense fallback={<div>Loading...</div>}>
          <EventLists searchTerm={searchTerm} />
        </Suspense>

      </main>
    </div>
  );
}
