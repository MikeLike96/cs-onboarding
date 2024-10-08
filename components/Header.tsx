import { Hexagon } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-[60px] py-4 px-6 flex justify-between items-center max-w-[1440px] mx-auto">
      <div className="flex items-center space-x-2">
        <Hexagon className="h-[30px] w-[30px] text-primary" />
        <span className="text-xl font-bold">Content Swarm</span>
      </div>
      <nav>
        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors duration-200">
          Home
        </Link>
      </nav>
    </header>
  );
}