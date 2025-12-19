'use server';

import { personalizedEventRecommendations } from '@/ai/flows/personalized-event-recommendations';
import { allEvents, userProfile } from '@/lib/data';
import type { Event } from '@/lib/types';

// This is a simplified function to parse recommendations.
// In a real app, this would be more robust, and the AI model could be prompted for JSON output.
function parseRecommendations(text: string, events: Event[]): Event[] {
  const recommendedTitles = text.split('\n').map(line => {
    // Example line: "1. The Grand Symphony" or "- Galaxy Runners"
    const match = line.match(/^(?:\d+\.|\-)\s*(.+)/);
    return match ? match[1].trim().toLowerCase() : null;
  }).filter(Boolean);

  if(recommendedTitles.length === 0) return [];
  
  const eventMap = new Map(events.map(e => [e.title.toLowerCase(), e]));
  
  return recommendedTitles.reduce((acc: Event[], title: string) => {
    if (eventMap.has(title)) {
      acc.push(eventMap.get(title)!);
    }
    return acc;
  }, []);
}

export async function getRecommendations(): Promise<Event[]> {
  try {
    const userProfileString = `Name: ${userProfile.name}, Preferences: ${userProfile.preferences.join(', ')}, Past Bookings: ${userProfile.pastBookings.map(b => b.eventTitle).join(', ')}`;
    const currentEventsString = allEvents.map(e => `- ${e.title} (${e.category}): ${e.synopsis.substring(0, 70)}...`).join('\n');

    const result = await personalizedEventRecommendations({
      userProfile: userProfileString,
      currentEvents: currentEventsString,
    });
    
    const recommendedEvents = parseRecommendations(result.recommendations, allEvents);
    
    if (recommendedEvents.length === 0) {
        // Fallback: if parsing fails or returns no events, return a few popular ones.
        return allEvents.filter(e => e.category === 'Movie').slice(0, 3);
    }

    return recommendedEvents;
  } catch (error) {
    console.error('Error getting recommendations:', error);
    // Return a fallback on error
    return allEvents.filter(e => e.category === 'Concert').slice(0, 3);
  }
}
