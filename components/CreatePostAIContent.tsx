"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CreatePostAIContent() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/add-company-posts');
  };

  const handleFinish = () => {
    router.push('/all-set');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Button variant="ghost" className="mb-6 pl-0" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <h1 className="text-2xl font-bold mb-2 text-center">How to create a post using AI</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center max-w-[80%] mx-auto">
        Step 4 of 4: Learn how to create posts using AI in your Swarm.
      </p>
      <p className="text-sm text-foreground/90 mb-8">
        Boost your social presence with ease. Share content by pasting LinkedIn URLs or create new posts with our AI tool. Enhance your messages with images and emojis for added impact. Craft engaging content for your network in seconds, whether you&apos;re sharing existing ideas or generating fresh ones.
      </p>
      <div className="space-y-4">
        <Button onClick={handleFinish} className="w-full bg-[#10B981] hover:bg-[#10B981]/90 text-white">
          Finish
        </Button>
        <Button variant="outline" onClick={handleBack} className="w-full border-[#3A3D4A] text-white">
          Back
        </Button>
      </div>
    </div>
  );
}