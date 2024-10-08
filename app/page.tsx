import Header from '@/components/Header';
import EmailCaptureForm from '@/components/EmailCaptureForm';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <EmailCaptureForm />
          <ImagePlaceholder />
        </div>
      </div>
    </main>
  );
}