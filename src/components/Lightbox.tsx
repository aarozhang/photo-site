'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  albumTitle: string;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  albumTitle,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 z-10 cursor-pointer"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-gray-600 z-10 cursor-pointer"
          aria-label="Previous image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-gray-600 z-10 cursor-pointer"
          aria-label="Next image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div className="max-w-full max-h-full mx-2 flex items-center justify-center">
        <div className="relative max-w-full max-h-[95vh]">
          <Image
            src={images[currentIndex]}
            alt={`${albumTitle} - Photo ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="max-w-full max-h-[95vh] object-contain"
            priority
          />
        </div>
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-800 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
