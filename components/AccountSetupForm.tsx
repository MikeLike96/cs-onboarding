"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  companyEmail: z.string().email({ message: "Invalid email address." }),
  swarmName: z.string().min(2, { message: "Swarm name must be at least 2 characters." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  swarmSize: z.string().min(1, { message: "Please select a swarm size." }),
});

export default function AccountSetupForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyEmail: "",
      swarmName: "",
      companyName: "",
      swarmSize: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Here you would typically send the account setup details to your backend
    router.push('/linkedin-connect');
  };

  const handleBack = () => {
    router.push('/payment');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Button variant="ghost" className="mb-6 pl-0" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <div className="flex justify-center mb-6">
        <div className="bg-primary rounded-full p-4">
          <User className="h-8 w-8 text-white" />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2 text-center">Welcome to Content Swarm!</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center max-w-[80%] mx-auto">
        Your 14 day free trial is ready! Please enter your details below to set up your account.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" className="input-bg border-border" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" className="input-bg border-border" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@company.com" className="input-bg border-border" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="swarmName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Swarm Name</FormLabel>
                <FormControl>
                  <Input placeholder="My Awesome Swarm" className="input-bg border-border" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." className="input-bg border-border" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="swarmSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Swarm Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="input-bg border-border">
                      <SelectValue placeholder="Select swarm size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="501+">501+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}