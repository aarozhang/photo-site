import Link from 'next/link';
import Image from 'next/image';
import { getAllAlbums } from '../../lib/albums';
import { Header } from '../components/Header';

export default function Home() {
  const albums = getAllAlbums();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Gallery - Placeholder for favorite photos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Favorite photos gallery coming soon...</p>
          <p className="text-gray-400 text-sm mt-2">This will replace the album grid</p>
        </div>
      </div>
    </main>
  );
}
