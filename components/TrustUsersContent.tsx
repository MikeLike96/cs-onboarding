"use client";

import { useRouter } from 'next/navigation';
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
    <div className="w-full max-w-md">
      <p className="text-sm text-muted-foreground mb-2">Step 2 of 4</p>
      <h1 className="text-3xl font-bold mb-6">How to trust users</h1>
      <p className="text-base text-foreground/90 mb-8 md:max-w-[50%]">
        Find your trusted Swarm users. By trusting them, you consent to the app coordinating LinkedIn engagement between you and these users. This includes managing likes on each other's posts, promoting mutual support within the network and optimizing yours and your company's collective LinkedIn presence.
      </p>
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleBack} className="border-[#3A3D4A] text-white">
          Back
        </Button>
        <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-white">
          Next
        </Button>
      </div>
    </div>
  );
}