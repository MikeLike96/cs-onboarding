"use client";

import { useRouter } from 'next/navigation';
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
    <div className="w-full max-w-2xl">
      <p className="text-sm text-muted-foreground mb-2">Step 1 of 4</p>
      <h1 className="text-3xl font-bold mb-6">Join swarm and login</h1>
      <ol className="list-decimal list-inside space-y-4 mb-8 text-base text-foreground/90">
        <li>Open Content Swarm application</li>
        <li>Enter your Swarm ID</li>
        <li>Sign in with LinkedIn credentials</li>
        <li>Accept user agreement</li>
      </ol>
      <div className="flex">
        <Button variant="outline" onClick={handleBack} className="border-[#3A3D4A] text-white mr-4">
          Back
        </Button>
        <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-white">
          Next
        </Button>
      </div>
    </div>
  );
}