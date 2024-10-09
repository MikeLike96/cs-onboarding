"use client";

import Header from '@/components/Header';
import TrustUsersContent from '@/components/TrustUsersContent';

export default function TrustUsersPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="w-full md:w-1/2">
          <TrustUsersContent />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {children}
        </div>
      </main>
    </div>
  );
}