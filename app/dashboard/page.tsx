import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-[1440px] w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Welcome to Your Dashboard
        </h1>
        <p className="text-lg text-foreground/80 mb-8 max-w-[80%] mx-auto">
          This is a placeholder for your dashboard. You can customize this page with your swarm's content and features.
        </p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}