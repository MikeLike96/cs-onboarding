"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
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
    <div className="w-full max-w-md mx-auto">
      <Button variant="ghost" className="mb-6 pl-0" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <h1 className="text-2xl font-bold mb-2 text-center">How to add company posts</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center max-w-[80%] mx-auto">
        Step 3 of 4: Learn how to add company posts to your Swarm.
      </p>
      <p className="text-sm text-foreground/90 mb-8">
        As a company admin, amplify your LinkedIn Company Page content with ease. In the &apos;My post&apos; section, you&apos;ll find a one-click solution to import company posts directly into your swarm. This seamless integration ensures your team stays aligned with official messaging, saves time, and empowers everyone to share company updates effortlessly. Expand your reach and maintain consistency across platforms with just a single click.
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