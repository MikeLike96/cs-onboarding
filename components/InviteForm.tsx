"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

export default function InviteForm() {
  const [emails, setEmails] = useState<string[]>([]);
  const [currentEmail, setCurrentEmail] = useState('');
  const router = useRouter();

  const handleAddEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentEmail && emails.length < 24) {
      setEmails([...emails, currentEmail]);
      setCurrentEmail('');
    }
  };

  const handleRemoveEmail = (email: string) => {
    setEmails(emails.filter((e) => e !== email));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inviting team members:', emails);
    // Here you would typically send the invitations to your backend
    router.push('/join-swarm');
  };

  const handleSkip = () => {
    router.push('/join-swarm');
  };

  return (
    <div className="w-full max-w-md">
      <Button variant="ghost" className="mb-6 pl-0" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <h1 className="text-3xl font-bold mb-2">Invite Team Members</h1>
      <p className="text-base text-muted-foreground mb-8">
        Enter email addresses to invite team members. You can invite up to 24 members.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email-input">Email Addresses ({emails.length}/24)</Label>
          <div className="bg-[#2A2C37] border border-[#3A3D4A] rounded-lg p-2 flex flex-wrap gap-2">
            {emails.map((email) => (
              <Badge
                key={email}
                variant="secondary"
                className="bg-[#3A3D4A] text-white"
              >
                {email}
                <button
                  type="button"
                  onClick={() => handleRemoveEmail(email)}
                  className="ml-2 text-gray-400 hover:text-white focus:outline-none"
                >
                  ×
                </button>
              </Badge>
            ))}
            <Input
              id="email-input"
              type="email"
              placeholder="Enter email and press Enter"
              value={currentEmail}
              onChange={(e) => setCurrentEmail(e.target.value)}
              onKeyDown={handleAddEmail}
              className="bg-transparent border-none text-white placeholder-[#6C7080] flex-grow min-w-[200px]"
            />
          </div>
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12">
          Confirm and Continue
        </Button>
        <Button type="button" variant="outline" onClick={handleSkip} className="w-full border-[#3A3D4A] text-white h-12">
          Skip this step for now
        </Button>
      </form>
    </div>
  );
}