"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JoinSwarmInstructions() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/invite-team');
  };

  const handleNext = () => {
    router.push('/trust-users');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Button variant="ghost" className="mb-6 pl-0" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <h1 className="text-2xl font-bold mb-2 text-center">Take Your First Steps with Content Swarm</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center max-w-[80%] mx-auto">
        Step 1 of 4: Follow these instructions to join your swarm and log in.
      </p>
      <ol className="list-decimal list-inside space-y-4 mb-8 text-sm text-foreground/90">
        <li>Open Content Swarm application</li>
        <li>Enter your Swarm ID</li>
        <li>Sign in with LinkedIn credentials</li>
        <li>Accept user agreement</li>
      </ol>
      <div className="space-y-4">
        <Button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90 text-white">
          Next
        </Button>
        <Button variant="outline" onClick={handleBack} className="w-full border-[#3A3D4A] text-white">
          Back
        </Button>
      </div>
    </div>
  );
}