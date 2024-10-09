import Header from '@/components/Header';
import VerificationForm from '@/components/VerificationForm';
import ImagePlaceholder from '@/components/ImagePlaceholder2';

export default function VerificationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <VerificationForm />
          <ImagePlaceholder />
        </div>
      </div>
    </main>
  );
}