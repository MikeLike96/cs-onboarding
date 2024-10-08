"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function CongratulationsPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/invite-team');
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