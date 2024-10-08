"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TrustUsersContent() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/join-swarm');
  };

  const handleNext = () => {
    router.push('/add-company-posts');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Button variant="ghost" className="mb-6 pl-0" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <h1 className="text-2xl font-bold mb-2 text-center">How to trust users</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center max-w-[80%] mx-auto">
        Step 2 of 4: Learn how to trust users in your Swarm.
      </p>
      <p className="text-sm text-foreground/90 mb-8">
        Find your trusted Swarm users. By trusting them, you consent to the app coordinating LinkedIn engagement between you and these users. This includes managing likes on each other&apos;s posts, promoting mutual support within the network and optimizing yours and your company&apos;s collective LinkedIn presence.
      </p>
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