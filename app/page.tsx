import Header from '@/components/Header';
import EmailCaptureForm from '@/components/EmailCaptureForm';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-8 md:py-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <EmailCaptureForm />
            <ImagePlaceholder />
          </div>
        </div>
      </main>
    </>
  );
}