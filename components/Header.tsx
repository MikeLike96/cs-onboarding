import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left side placeholder */}
          <div className="w-24"></div>
          
          {/* Centered logo */}
          <div className="flex justify-center flex-grow">
            <Image
              src="/cs-logo-no-bg.png"
              alt="Content Swarm Logo"
              width={150}
              height={40}
              priority
            />
          </div>
          
          {/* Right side navigation */}
          <nav className="w-24 flex justify-end">
            <Link href="/" className="text-sm font-medium text-black hover:text-primary transition-colors duration-200">
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}