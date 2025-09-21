'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  currentPage?: string;
  currentAlbum?: string;
}

export function Header({ currentPage, currentAlbum }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mock album data - you can replace with actual album fetching
  const placeAlbums = [
    { slug: 'north-cascades', title: 'North Cascades' },
    { slug: 'fullframetest', title: 'Full Frame Test' }
  ];

  const projectAlbums = [
    { slug: 'street-photography', title: 'Street Photography' },
    { slug: 'portraits', title: 'Portraits' }
  ];

  // Determine if current album is in places or projects
  const isPlacesActive = currentAlbum && placeAlbums.some(album => album.slug === currentAlbum);
  const isProjectsActive = currentAlbum && projectAlbums.some(album => album.slug === currentAlbum);

  return (
    <header className="bg-white shadow-sm">
      <div className="px-8 sm:px-12 lg:px-16 py-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-4xl font-light text-gray-900 hover:text-gray-700 transition-colors">
            Aaron Zhang
          </Link>
          <nav className="flex space-x-8">
            <Link 
              href="/about" 
              className={`text-lg font-light transition-colors ${
                currentPage === 'about' 
                  ? 'text-gray-900 border-b-2 border-gray-900' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              About Me
            </Link>
            
            {/* Places Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('places')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`text-lg font-light transition-colors pb-2 ${
                isPlacesActive 
                  ? 'text-gray-900 border-b-2 border-gray-900' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}>
                Places
              </button>
              {activeDropdown === 'places' && (
                <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                  {placeAlbums.map((album) => (
                    <Link
                      key={album.slug}
                      href={`/albums/${album.slug}`}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 text-right ${
                        currentAlbum === album.slug
                          ? 'text-gray-900 font-medium bg-gray-50'
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {album.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('projects')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`text-lg font-light transition-colors pb-2 ${
                isProjectsActive 
                  ? 'text-gray-900 border-b-2 border-gray-900' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}>
                Projects
              </button>
              {activeDropdown === 'projects' && (
                <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                  {projectAlbums.map((album) => (
                    <Link
                      key={album.slug}
                      href={`/albums/${album.slug}`}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 text-right ${
                        currentAlbum === album.slug
                          ? 'text-gray-900 font-medium bg-gray-50'
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {album.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
