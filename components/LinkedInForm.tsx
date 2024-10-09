"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  linkedinUrl: z.string().url({ message: "Please enter a valid LinkedIn URL." }).includes("linkedin.com", { message: "Please enter a valid LinkedIn profile URL." }),
});

export default function LinkedInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      linkedinUrl: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      console.log(values);
      // Here you would typically send the LinkedIn URL to your backend
      // and handle the profile syncing process
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API call
      // Navigate to the congratulations page
      router.push('/congratulations');
    } catch (error) {
      console.error('Error syncing LinkedIn profile:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    router.push('/welcome');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Button variant="ghost" className="mb-6 pl-0" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <div className="flex justify-center mb-6">
        <div className="bg-primary rounded-full p-4">
          <Linkedin className="h-8 w-8 text-white" />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2 text-center">Connect Your LinkedIn Profile</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center max-w-[80%] mx-auto">
        Paste your company LinkedIn profile URL to sync your profile with our app.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="linkedinUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn URL</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="https://www.linkedin.com/in/yourprofile" 
                    className="input-bg border-border placeholder:text-muted-foreground/50"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Syncing..." : "Sync LinkedIn Profile"}
          </Button>
        </form>
      </Form>
    </div>
  );
}