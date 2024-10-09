import Image from 'next/image';

export default function EmailCaptureImagePlaceholder() {
  return (
    <div className="w-full md:w-2/5 aspect-[4/3] bg-[#1E2028] rounded-l-lg hidden md:flex items-center justify-center overflow-hidden">
      <div className="relative w-[80%] h-[80%]">
        <Image
          src="/"
          alt="Email Capture Illustration"
          fill
          sizes="(max-width: 768px) 100vw, 32vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
