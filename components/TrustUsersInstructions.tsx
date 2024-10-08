"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function TrustUsersInstructions() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/join-swarm');
  };

  const handleNext = () => {
    router.push('/create-profile');
  };

  return (
    <div className="w-full max-w-md">
      <p className="text-sm text-muted-foreground mb-2">Step 2 of 4</p>
      <h1 className="text-3xl font-bold mb-6">Trust users</h1>
      <ol className="list-decimal list-inside space-y-4 mb-8">
        <li>Review the list of users in your swarm</li>
        <li>Select users you want to trust</li>
        <li>Confirm your selections</li>
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