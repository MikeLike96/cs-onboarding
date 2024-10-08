"use client";

import Header from '@/components/Header';
import CreatePostAIContent from '@/components/CreatePostAIContent';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function CreatePostAIPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-start justify-between gap-8">
        <CreatePostAIContent />
        <ImagePlaceholder />
      </main>
    </div>
  );
}