import Header from '@/components/Header';
import AccountSetupForm from '@/components/AccountSetupForm';
import ImagePlaceholder from '@/components/ImagePlaceholder4';

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <AccountSetupForm />
          <ImagePlaceholder />
        </div>
      </div>
    </main>
  );
}