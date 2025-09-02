import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAlbumBySlug, getAlbumSlugs } from '../../../../lib/albums';
import { PhotoGallery } from '../../../components/PhotoGallery';

interface AlbumPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAlbumSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);

  if (!album) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Albums
          </Link>
        </div>
      </nav>

      {/* Album Header */}
      <header className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {album.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="font-medium">{album.location}</span>
            <span className="mx-2">•</span>
            <span>{new Date(album.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{album.images.length} photos</span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {album.description}
          </p>
        </div>
      </header>

      {/* Photo Gallery */}
      <section>
        <PhotoGallery images={album.images} albumTitle={album.title} />
      </section>
    </main>
  );
}
