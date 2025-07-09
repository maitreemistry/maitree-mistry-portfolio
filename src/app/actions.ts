"use server";

import { suggestLearningResources, LearningResourceSuggestionInput } from '@/ai/flows/learning-suggestion-flow';
import { z } from 'zod';

const formSchema = z.object({
  currentFocus: z.string().min(3, { message: "Focus must be at least 3 characters." }),
  interests: z.string().min(3, { message: "Interests must be at least 3 characters." }),
});

export async function getLearningSuggestions(data: LearningResourceSuggestionInput) {
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    const errorDetails = parsedData.error.flatten().fieldErrors;
    const errorMessage = Object.values(errorDetails).flat().join(' ');
    return { error: errorMessage || 'Invalid input.' };
  }

  try {
    const result = await suggestLearningResources(parsedData.data);
    if (!result || !result.suggestedResources || result.suggestedResources.length === 0) {
      return { error: "Couldn't generate suggestions. Try a different topic." };
    }
    return { data: result };
  } catch (error) {
    console.error("AI flow error:", error);
    return { error: 'An unexpected error occurred. Please try again later.' };
  }
}
