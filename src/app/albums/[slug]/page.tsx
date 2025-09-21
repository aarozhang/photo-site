import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAlbumBySlug, getAlbumSlugs } from '../../../../lib/albums';
import { PhotoGallery } from '../../../components/PhotoGallery';
import { Header } from '../../../components/Header';

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
      <Header currentAlbum={slug} />

      {/* Album Header */}
      <header className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-light text-gray-900 text-center">
            {album.title}
          </h1>
        </div>
      </header>

      {/* Photo Gallery */}
      <section>
        <PhotoGallery images={album.images} albumTitle={album.title} />
      </section>
    </main>
  );
}
