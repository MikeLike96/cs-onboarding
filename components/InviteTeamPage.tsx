"use client";

import Header from '@/components/Header';
import InviteForm from '@/components/InviteForm';
import ImagePlaceholder from '@/components/ImagePlaceholder6';

export default function InviteTeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-start justify-between gap-8">
        <InviteForm />
        <ImagePlaceholder />
      </main>
    </div>
  );
}