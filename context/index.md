# Photo Site Context Index

Quick reference for AI assistants and developers to understand the project state.

## 📋 Context Files
- **[README.md](./README.md)** - Project overview, tech stack, structure
- **[technical-details.md](./technical-details.md)** - Architecture, data flow, APIs
- **[project-status.md](./project-status.md)** - Current status, roadmap, next steps
- **[development-guide.md](./development-guide.md)** - Workflows, commands, guidelines

## 🚀 Quick Facts
- **Status**: MVP Complete ✅
- **Framework**: Next.js 15.4.6 + React 19 + TypeScript
- **Content**: Markdown-driven albums with frontmatter
- **Styling**: Tailwind CSS v4
- **Albums**: 1 active (North Cascades)

## 🎯 Current Priority
Image management system and content creation tools

## 📁 Key Directories
```
src/app/          # Next.js app router pages
src/components/   # React components
lib/              # Utility functions and types
albums/           # Markdown album files
public/images/    # Static image assets
context/          # This documentation
```

## 🔧 Essential Commands
```bash
npm run dev       # Start development
npm run build     # Production build
npm run lint      # Code linting
```

## 📝 Adding Content
1. Create `albums/album-name.md` with frontmatter
2. Add images to `public/images/album-name/`
3. Update frontmatter with image paths

## 🐛 Common Issues
- Image path case sensitivity
- YAML frontmatter syntax
- TypeScript type errors

---
*Last updated: September 1, 2025 - 11:00 PM UTC*
*For detailed information, see individual context files above.*
