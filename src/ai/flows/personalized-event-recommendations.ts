'use server';

/**
 * @fileOverview A personalized event recommendation AI agent.
 *
 * - personalizedEventRecommendations - A function that generates personalized event recommendations.
 * - PersonalizedEventRecommendationsInput - The input type for the personalizedEventRecommendations function.
 * - PersonalizedEventRecommendationsOutput - The return type for the personalizedEventRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedEventRecommendationsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('The user profile information including past booking history and preferences.'),
  currentEvents: z
    .string()
    .describe('A list of current events available for recommendation.'),
});
export type PersonalizedEventRecommendationsInput =
  z.infer<typeof PersonalizedEventRecommendationsInputSchema>;

const PersonalizedEventRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of personalized event recommendations.'),
});
export type PersonalizedEventRecommendationsOutput =
  z.infer<typeof PersonalizedEventRecommendationsOutputSchema>;

export async function personalizedEventRecommendations(
  input: PersonalizedEventRecommendationsInput
): Promise<PersonalizedEventRecommendationsOutput> {
  return personalizedEventRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedEventRecommendationsPrompt',
  input: {schema: PersonalizedEventRecommendationsInputSchema},
  output: {schema: PersonalizedEventRecommendationsOutputSchema},
  prompt: `You are an AI event recommendation agent. Given a user profile and a list of current events, you will generate a list of personalized event recommendations.

User Profile: {{{userProfile}}}

Current Events: {{{currentEvents}}}

Recommendations:`,
});

const personalizedEventRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedEventRecommendationsFlow',
    inputSchema: PersonalizedEventRecommendationsInputSchema,
    outputSchema: PersonalizedEventRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
