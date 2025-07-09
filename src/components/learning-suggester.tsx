"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getLearningSuggestions } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Loader2, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  currentFocus: z.string().min(3, { message: "Focus must be at least 3 characters." }),
  interests: z.string().min(3, { message: "Interests must be at least 3 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function LearningSuggester() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentFocus: "",
      interests: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setSuggestions([]);
    
    const result = await getLearningSuggestions(values);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: result.error,
      });
    } else if (result.data) {
      setSuggestions(result.data.suggestedResources);
    }
    setIsLoading(false);
  }

  return (
    <section id="learning" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Current Focus & AI Learning Bot</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm passionate about continuous learning. Tell my AI assistant about your goals to get personalized learning suggestions!
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Get Learning Suggestions</CardTitle>
              <CardDescription>Enter a professional focus and some interests to get AI-powered recommendations.</CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="currentFocus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Focus</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Web Development, Machine Learning" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specific Interests</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Real-time applications, NLP" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
                    Generate Suggestions
                  </Button>
                </CardFooter>
              </form>
            </Form>
            {suggestions.length > 0 && (
              <CardContent>
                <h3 className="mb-4 text-lg font-semibold">Here are some suggestions for you:</h3>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <Badge key={index} variant="default" className="text-base px-3 py-1 bg-accent text-accent-foreground hover:bg-accent/80">
                      {suggestion}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
