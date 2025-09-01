import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Album, AlbumMetadata } from './types';

const albumsDirectory = path.join(process.cwd(), 'albums');

export function getAllAlbums(): Album[] {
  const fileNames = fs.readdirSync(albumsDirectory);
  const allAlbums = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '');
      return getAlbumBySlug(slug);
    })
    .filter((album): album is Album => album !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return allAlbums;
}

export function getAlbumBySlug(slug: string): Album | null {
  try {
    const fullPath = path.join(albumsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const metadata = data as AlbumMetadata;
    
    // Process markdown content to HTML
    const processedContent = marked(content);
    
    return {
      slug,
      title: metadata.title,
      date: metadata.date,
      location: metadata.location,
      description: metadata.description,
      coverImage: metadata.coverImage,
      images: metadata.images || [],
      content: processedContent,
    };
  } catch (error) {
    console.error(`Error reading album ${slug}:`, error);
    return null;
  }
}

export function getAlbumSlugs(): string[] {
  const fileNames = fs.readdirSync(albumsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}
