"use client";

import React from 'react';
import Header from '@/components/Header';
import AddCompanyPostsContent from '@/components/AddCompanyPostsContent';

interface AddCompanyPostsPageProps {
  children: React.ReactNode;
}

function AddCompanyPostsPage({ children }: AddCompanyPostsPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <AddCompanyPostsContent />
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddCompanyPostsPage;
