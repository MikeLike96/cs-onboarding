'use client';

import Lottie from 'lottie-react';
import animationData from '/Animation - email.json';

export default function EmailCaptureImagePlaceholder() {
  return (
    <div className="w-full md:w-1/2 aspect-square rounded-l-lg hidden md:flex items-center justify-center overflow-hidden bg-transparent">
      <div className="relative w-full h-full scale-120">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '65%' }}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice'
          }}
        />
      </div>
    </div>
  );
}
