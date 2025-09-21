'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Lightbox } from './Lightbox';

interface PhotoGalleryProps {
  images: string[];
  albumTitle: string;
}

export function PhotoGallery({ images, albumTitle }: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-12 p-12">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-zoom-in overflow-hidden bg-gray-200 mb-12 break-inside-avoid"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image}
              alt={`${albumTitle} - Photo ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          albumTitle={albumTitle}
        />
      )}
    </>
  );
}
