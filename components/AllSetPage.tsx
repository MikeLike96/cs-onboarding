"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function AllSetPage() {
  const router = useRouter();

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const handleContinue = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div 
        className="max-w-[1440px] w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          You're all set to go!
        </h1>
        <p className="text-lg text-foreground/80 mb-8 max-w-[80%] mx-auto">
          Click continue to enter the Content Swarm app and begin sharing your content!
        </p>
        <Button 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </motion.div>
    </div>
  );
}