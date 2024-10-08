"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function CreateProfileInstructions() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/trust-users');
  };

  const handleNext = () => {
    router.push('/setup-complete');
  };

  return (
    <div className="w-full max-w-md">
      <p className="text-sm text-muted-foreground mb-2">Step 3 of 4</p>
      <h1 className="text-3xl font-bold mb-6">Create your profile</h1>
      <ol className="list-decimal list-inside space-y-4 mb-8">
        <li>Add a profile picture</li>
        <li>Enter your display name</li>
        <li>Write a short bio</li>
        <li>Set your preferences</li>
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