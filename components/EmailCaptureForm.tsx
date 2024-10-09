"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function EmailCaptureForm() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email);
    // Navigate to the verification page
    router.push('/verify');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <div className="bg-primary rounded-full p-4">
          <Mail className="h-8 w-8 text-white" />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2 text-center">Enter your email</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center max-w-[80%] mx-auto">
        Please enter your email to receive a confirmation and get started.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Company email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-bg border-border placeholder:text-muted-foreground/50"
          required
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
          Submit
        </Button>
      </form>
    </div>
  );
}