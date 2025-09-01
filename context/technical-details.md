# Technical Architecture

## Data Flow
1. **Album Discovery**: `getAllAlbums()` scans `/albums` directory for `.md` files
2. **Content Parsing**: gray-matter extracts frontmatter metadata and markdown content
3. **Markdown Processing**: marked converts markdown to HTML
4. **Image Handling**: Next.js Image component optimizes and serves images from `/public/images`

## Core Functions

### Album Management (`lib/albums.ts`)
- `getAllAlbums()`: Returns sorted array of all albums
- `getAlbumBySlug(slug)`: Fetches single album by filename
- `getAlbumSlugs()`: Returns array of available album slugs

### Automation Scripts (`scripts/`)
- `create-album.js`: Creates new album structure with markdown file and image directory
- `update-album-images.js`: Automatically updates album frontmatter with all images in directory

### Type Definitions (`lib/types.ts`)
```typescript
interface Album {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
  content: string;
}

interface AlbumMetadata {
  title: string;
  date: string;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
}
```

## Album Markdown Structure
```yaml
---
title: "Album Title"
date: "YYYY-MM-DD"
location: "Location Name"
description: "Album description"
coverImage: "/images/album-slug/cover.jpg"
images:
  - "/images/album-slug/image1.jpg"
  - "/images/album-slug/image2.jpg"
---

# Markdown Content
Album story and details...
```

## Routing
- `/` - Home page with album grid
- `/albums/[slug]` - Individual album page (dynamic route)

## Styling Architecture
- **Tailwind CSS v4**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Responsive Design**: Mobile-first approach
- **Color Scheme**: Gray-based with blue accents

## Image Optimization
- **Next.js Image**: Automatic optimization, lazy loading, responsive images
- **Sizes Attribute**: `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw`
- **Storage**: Static files in `/public/images/[album-slug]/`

## Build Configuration
- **Next.js Config**: TypeScript configuration in `next.config.ts`
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended configuration
- **PostCSS**: Tailwind CSS processing

## Performance Considerations
- Server-side rendering for album data
- Image optimization and lazy loading
- Static file serving for images
- Efficient markdown parsing on build
