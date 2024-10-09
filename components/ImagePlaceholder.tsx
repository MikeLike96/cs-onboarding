'use client';

import Lottie from 'lottie-react';
import animationData from '/Animation - email.json';

export default function EmailCaptureImagePlaceholder() {
  return (
    <div className="w-full md:w-1/2 aspect-[4/3] rounded-l-lg hidden md:flex items-center justify-center overflow-hidden bg-gray-800">
      <div className="relative w-full h-full">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '120%' }}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid contain'
          }}
        />
      </div>
    </div>
  );
}
