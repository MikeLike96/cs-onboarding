import React from 'react';
import Image from 'next/image';

export default function ImagePlaceholder9() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative aspect-[16/8] rounded-2xl shadow-lg bg-gray-100 overflow-hidden">
        <Image
          src="/create-post.gif"
          alt="Create post animation"
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-2xl"
          priority
        />
      </div>
    </div>
  );
}
