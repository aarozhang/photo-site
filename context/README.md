# Photo Site Project Context

## Project Overview
Next.js-based photo gallery/journal website for organizing and displaying photo albums with markdown-driven content management.

## Tech Stack
- **Framework**: Next.js 15.4.6 (App Router)
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with PostCSS
- **Content**: Markdown with gray-matter frontmatter parsing
- **Markdown Processing**: marked library
- **Image Optimization**: Next.js Image component

## Project Structure
```
photo-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page (album grid)
│   │   ├── globals.css         # Global styles
│   │   └── albums/
│   │       └── [slug]/
│   │           └── page.tsx    # Individual album pages
│   └── components/
│       ├── PhotoGallery.tsx    # Gallery component
│       └── Lightbox.tsx        # Image lightbox
├── lib/
│   ├── albums.ts               # Album data functions
│   └── types.ts                # TypeScript interfaces
├── albums/                     # Markdown album files
│   ├── tokyo-streets-2024.md
│   └── iceland-2025.md
├── public/
│   └── images/
│       ├── tokyo-streets-2024/
│       └── iceland-2025/
└── context/                    # This directory
```

## Key Features
- Album-based photo organization
- Markdown-driven content with frontmatter metadata
- Responsive grid layout
- Image optimization and lazy loading
- Clean, modern UI design
- TypeScript for type safety

## Current Albums
1. **North Cascades National Park** - Day trip to North Cascades with Cascade Pass hike and Diablo Lake (46 images)

## Dependencies
### Production
- next: 15.4.6
- react: 19.1.0
- react-dom: 19.1.0
- gray-matter: ^4.0.3
- marked: ^16.1.2

### Development
- typescript: ^5
- @types/node: ^20
- @types/react: ^19
- @types/react-dom: ^19
- @types/marked: ^5.0.2
- tailwindcss: ^4
- @tailwindcss/postcss: ^4
- eslint: ^9
- eslint-config-next: 15.4.6

## Scripts
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - ESLint

## Last Updated
September 1, 2025 - 11:00 PM UTC
