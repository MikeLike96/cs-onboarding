"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-confetti to avoid SSR issues
const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function CongratulationsPage() {
  const router = useRouter();
  const [confettiDimensions, setConfettiDimensions] = useState({ width: 0, height: 0 });
  const [runConfetti, setRunConfetti] = useState(false);

  useEffect(() => {
    // Set dimensions for confetti
    setConfettiDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Start confetti immediately
    setRunConfetti(true);

    // Stop confetti after 2 seconds
    const timer = setTimeout(() => setRunConfetti(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    router.push('/invite-team');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {runConfetti && (
        <ReactConfetti
          width={confettiDimensions.width}
          height={confettiDimensions.height}
          recycle={false}
          numberOfPieces={100}
          gravity={0.2}
          initialVelocityY={30}
          tweenDuration={100}
          confettiSource={{
            x: confettiDimensions.width / 2,
            y: confettiDimensions.height / 2,
            w: 0,
            h: 0,
          }}
        />
      )}
      <motion.div 
        className="max-w-[1440px] w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Congratulations!
        </h1>
        <p className="text-lg text-foreground/80 mb-8 max-w-[80%] mx-auto">
          You have successfully created your swarm profile. Check your inbox for a verification email.
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