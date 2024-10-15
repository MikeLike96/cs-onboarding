"use client";

import Header from '@/components/Header';
import AddCompanyPostsContent from '@/components/AddCompanyPostsContent';
import ImagePlaceholder from '@/components/ImagePlaceholder9';

export default function AddCompanyPostsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-start justify-between gap-8">
        <AddCompanyPostsContent />
        <ImagePlaceholder />
      </main>
    </div>
  );
}