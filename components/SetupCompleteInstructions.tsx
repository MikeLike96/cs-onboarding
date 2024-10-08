"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function SetupCompleteInstructions() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/create-profile');
  };

  const handleFinish = () => {
    router.push('/dashboard');
  };

  return (
    <div className="w-full max-w-md">
      <p className="text-sm text-muted-foreground mb-2">Step 4 of 4</p>
      <h1 className="text-3xl font-bold mb-6">Setup complete!</h1>
      <ul className="list-disc list-inside space-y-4 mb-8">
        <li>Your swarm is set up</li>
        <li>Trusted users are added</li>
        <li>Your profile is created</li>
        <li>You&apos;re ready to start collaborating</li>
      </ul>
      <div className="flex">
        <Button variant="outline" onClick={handleBack} className="border-[#3A3D4A] text-white mr-4">
          Back
        </Button>
        <Button onClick={handleFinish} className="bg-primary hover:bg-primary/90 text-white">
          Finish
        </Button>
      </div>
    </div>
  );
}