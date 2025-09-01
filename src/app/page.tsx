import Link from 'next/link';
import Image from 'next/image';
import { getAllAlbums } from '../../lib/albums';

export default function Home() {
  const albums = getAllAlbums();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Photo Journal
          </h1>
          <p className="text-lg text-gray-600 text-center mt-2">
            Stories through the lens
          </p>
        </div>
      </header>

      {/* Albums Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {albums.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No albums found. Create your first album!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <Link
                key={album.slug}
                href={`/albums/${album.slug}`}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-64 relative">
                    <Image
                      src={album.coverImage}
                      alt={`${album.title} cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {album.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {album.location} • {new Date(album.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mt-3 line-clamp-3">
                    {album.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span>{album.images.length} photos</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
