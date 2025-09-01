# Development Guide

## Quick Start
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## Common Development Tasks

### Adding a New Album

**Quick Method (Recommended):**
```bash
node scripts/create-album.js "album name" "Album Title" "Location" "Description"
```

**Example:**
```bash
node scripts/create-album.js "summer vacation" "Summer Vacation 2024" "California" "Our amazing summer trip"
```

**Adding Photos to Existing Album:**
```bash
# Copy your photos to the album directory
cp /path/to/your/photos/* public/images/album-name/

# Automatically update the album with all photos
node scripts/update-album-images.js album-name
```

**Manual Method:**
1. Create album structure:
   ```bash
   # Create directories
   mkdir -p albums public/images/album-name
   
   # Create album file
   touch albums/album-name.md
   ```

2. Add frontmatter and content to the markdown file:
   ```yaml
   ---
   title: "Album Title"
   date: "2025-01-01"
   location: "Location"
   description: "Description"
   coverImage: "/images/album-name/cover.jpg"
   images:
     - "/images/album-name/photo1.jpg"
     - "/images/album-name/photo2.jpg"
   ---
   
   # Album Story
   Your album content here...
   ```

3. Add your photos to `public/images/album-name/` and update the images array

### Project Commands
```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint

# File operations
ls albums/           # List all albums
ls public/images/    # List image directories
```

### File Naming Conventions
- **Albums**: `kebab-case.md` (e.g., `tokyo-streets-2024.md`)
- **Images**: `kebab-case.jpg` (e.g., `shibuya-crossing.jpg`)
- **Directories**: `kebab-case` (e.g., `tokyo-streets-2024/`)

### Image Guidelines
- **Format**: JPG preferred for photos, PNG for graphics
- **Size**: Recommended max width 2000px for web optimization
- **Naming**: Descriptive, lowercase, hyphen-separated
- **Cover Image**: Should be representative of the album

### Code Style
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Formatting**: Prettier (if configured)
- **Components**: PascalCase naming
- **Files**: camelCase for utilities, PascalCase for components

## Debugging Tips
- Check browser console for client-side errors
- Check terminal for server-side errors
- Verify image paths are correct (case-sensitive)
- Ensure markdown frontmatter is valid YAML

## Environment Setup
- **Node.js**: Version 18+ recommended
- **Package Manager**: npm (lockfile: package-lock.json)
- **IDE**: VS Code recommended with TypeScript extensions

## Git Workflow
```bash
# Current branch status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to remote
git push origin main
```

## Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths and case sensitivity
2. **Build errors**: Verify TypeScript types and imports
3. **Styling issues**: Check Tailwind class names and CSS conflicts
4. **Markdown parsing**: Validate YAML frontmatter syntax

### Performance Monitoring
- Use Next.js built-in analytics
- Check Lighthouse scores
- Monitor Core Web Vitals
- Test on different devices and connections

## Useful Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Markdown Guide](https://www.markdownguide.org/)

## Last Updated
September 1, 2025
