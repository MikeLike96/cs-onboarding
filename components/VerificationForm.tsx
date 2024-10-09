"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function VerificationForm() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '']);
  const router = useRouter();
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus on the first input field when the component mounts
    firstInputRef.current?.focus();
  }, []);

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value !== '' && index < 4) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join('');
    console.log('Submitted verification code:', code);
    // Here you would typically validate the code with your backend
    // For now, we'll just navigate to the payment page
    router.push('/payment');
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Button variant="ghost" className="mb-6 pl-0" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <div className="flex justify-center mb-6">
        <div className="bg-primary rounded-full p-4">
          <Lock className="h-8 w-8 text-white" />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2 text-center">Enter Verification Code</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center max-w-[80%] mx-auto">
        Please enter the 5-character verification code sent to your email inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between">
          {verificationCode.map((digit, index) => (
            <Input
              key={index}
              id={`code-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-12 h-12 text-center text-2xl font-bold input-bg border-border"
              ref={index === 0 ? firstInputRef : null}
            />
          ))}
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
          Submit
        </Button>
      </form>
    </div>
  );
}