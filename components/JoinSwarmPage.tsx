"use client";

import React from 'react';
import Header from '@/components/Header';
import JoinSwarmInstructions from '@/components/JoinSwarmInstructions';

interface JoinSwarmPageProps {
  children: React.ReactNode;
}

export default function JoinSwarmPage({ children }: JoinSwarmPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <JoinSwarmInstructions />
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}