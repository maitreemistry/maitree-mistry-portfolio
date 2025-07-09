'use server';

/**
 * @fileOverview An AI agent that suggests learning resources based on the user's current focus and interests.
 *
 * - suggestLearningResources - A function that suggests learning resources.
 * - LearningResourceSuggestionInput - The input type for the suggestLearningResources function.
 * - LearningResourceSuggestionOutput - The return type for the suggestLearningResources function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LearningResourceSuggestionInputSchema = z.object({
  currentFocus: z
    .string()
    .describe('The user\'s current professional focus or area of study.'),
  interests: z
    .string()
    .describe('The user\'s specific interests within their field.'),
});
export type LearningResourceSuggestionInput = z.infer<
  typeof LearningResourceSuggestionInputSchema
>;

const LearningResourceSuggestionOutputSchema = z.object({
  suggestedResources: z
    .array(z.string())
    .describe('A list of suggested learning resources (e.g., online courses, books, articles).'),
});
export type LearningResourceSuggestionOutput = z.infer<
  typeof LearningResourceSuggestionOutputSchema
>;

export async function suggestLearningResources(
  input: LearningResourceSuggestionInput
): Promise<LearningResourceSuggestionOutput> {
  return suggestLearningResourcesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'learningResourceSuggestionPrompt',
  input: {schema: LearningResourceSuggestionInputSchema},
  output: {schema: LearningResourceSuggestionOutputSchema},
  prompt: `You are an AI learning assistant. Your goal is to suggest learning resources to the user based on their current professional focus and interests.

Current Focus: {{{currentFocus}}}
Interests: {{{interests}}}

Suggest a list of relevant learning resources, providing the name of each resource.`,
});

const suggestLearningResourcesFlow = ai.defineFlow(
  {
    name: 'suggestLearningResourcesFlow',
    inputSchema: LearningResourceSuggestionInputSchema,
    outputSchema: LearningResourceSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
