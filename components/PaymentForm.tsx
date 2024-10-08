"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';

const formSchema = z.object({
  nameOnCard: z.string().min(2, { message: "Name must be at least 2 characters." }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Card number must be 16 digits." }),
  expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Expiration date must be in MM/YY format." }),
  cvc: z.string().regex(/^\d{3,4}$/, { message: "CVC must be 3 or 4 digits." }),
});

export default function PaymentForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameOnCard: "",
      cardNumber: "",
      expirationDate: "",
      cvc: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Here you would typically send the payment details to your backend
    // and handle the Stripe payment process
    router.push('/welcome');
  };

  const handleBack = () => {
    router.push('/verify');
  };

  return (
    <div className="w-full max-w-md">
      <Button variant="ghost" className="mb-6 pl-0" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <h1 className="text-3xl font-bold mb-2">Enter Payment Details</h1>
      <p className="text-base text-muted-foreground mb-8">
        Please provide your credit card information to start your free trial.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nameOnCard"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name on Card</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="input-bg border-border" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input placeholder="1234 5678 9012 3456" className="input-bg border-border" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="expirationDate"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Expiration Date</FormLabel>
                  <FormControl>
                    <Input placeholder="MM/YY" className="input-bg border-border" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvc"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>CVC</FormLabel>
                  <FormControl>
                    <Input placeholder="123" className="input-bg border-border" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
            Begin
          </Button>
        </form>
      </Form>
      <p className="text-sm text-muted-foreground mt-4 text-center">
        Your card won't be charged during the 14-day free trial.
      </p>
      <div className="flex items-center mt-4">
        <Image src="/stripe-badge.svg" alt="Powered by Stripe" width={60} height={20} />
        <span className="text-xs text-muted-foreground ml-2">Powered by Stripe</span>
      </div>
    </div>
  );
}