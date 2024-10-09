import Header from '@/components/Header';
import LinkedInForm from '@/components/LinkedInForm';
import ImagePlaceholder from '@/components/ImagePlaceholder5';

export default function LinkedInConnectPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <LinkedInForm />
          <ImagePlaceholder />
        </div>
      </div>
    </main>
  );
}