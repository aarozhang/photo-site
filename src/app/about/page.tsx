import Image from 'next/image';
import { Header } from '../../components/Header';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header currentPage="about" />

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[60vh]">
          <div>
            <h1 className="text-3xl font-light text-gray-900 mb-6">About Me</h1>
            <p className="text-gray-700 mb-4">
              Photographer and visual storyteller capturing moments through the lens.
            </p>
            <p className="text-gray-700">
              Based in the Pacific Northwest, I focus on landscape, street, and documentary photography.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/fullframetest/R0000762.jpg"
              alt="About Aaron Zhang"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
