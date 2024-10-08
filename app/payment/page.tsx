import Header from '@/components/Header';
import PaymentForm from '@/components/PaymentForm';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <PaymentForm />
          <ImagePlaceholder />
        </div>
      </div>
    </main>
  );
}