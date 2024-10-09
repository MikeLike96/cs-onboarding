import Image from 'next/image';

export default function EmailCaptureImagePlaceholder() {
  return (
    <div className="w-full md:w-2/5 aspect-[4/3] rounded-l-lg hidden md:flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full p-4">
        <Image
          src="/cs piles 3.png"
          alt="Email Capture Illustration"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
