"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function VerificationForm() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '']);
  const router = useRouter();

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
    <div className="w-full max-w-md">
      <Button variant="ghost" className="mb-6 pl-0" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <h1 className="text-3xl font-bold mb-2">Enter Verification Code</h1>
      <p className="text-base text-muted-foreground mb-8 md:max-w-[50%]">
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