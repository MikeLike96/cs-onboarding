"use client";

import { useRouter } from 'next/navigation';
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
    <div className="w-full max-w-md">
      <p className="text-sm text-muted-foreground mb-2">Step 4 of 4</p>
      <h1 className="text-3xl font-bold mb-6">How to create a post using AI</h1>
      <p className="text-base text-foreground/90 mb-8 md:max-w-[50%]">
        Boost your social presence with ease. Share content by pasting LinkedIn URLs or create new posts with our AI tool. Enhance your messages with images and emojis for added impact. Craft engaging content for your network in seconds, whether you're sharing existing ideas or generating fresh ones.
      </p>
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleBack} className="border-[#3A3D4A] text-white">
          Back
        </Button>
        <Button onClick={handleFinish} className="bg-[#10B981] hover:bg-[#10B981]/90 text-white">
          Finish
        </Button>
      </div>
    </div>
  );
}