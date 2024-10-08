"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function AddCompanyPostsContent() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/trust-users');
  };

  const handleNext = () => {
    router.push('/create-post-ai');
  };

  return (
    <div className="w-full max-w-2xl">
      <p className="text-sm text-muted-foreground mb-2">Step 3 of 4</p>
      <h1 className="text-3xl font-bold mb-6">How to add company posts</h1>
      <p className="text-base text-foreground/90 mb-8">
        As a company admin, amplify your LinkedIn Company Page content with ease. In the 'My post' section, you'll find a one-click solution to import company posts directly into your swarm. This seamless integration ensures your team stays aligned with official messaging, saves time, and empowers everyone to share company updates effortlessly. Expand your reach and maintain consistency across platforms with just a single click.
      </p>
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