# Photo Site

A Next.js-based photo gallery for organizing and displaying photo albums with markdown-driven content.

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open [http://localhost:3000](http://localhost:3000) to view your site**

## Creating Albums

### Quick Album Creation
Use the built-in script to create a new album:

```bash
node scripts/create-album.js "album name" "Album Title" "Location" "Description"
```

**Example:**
```bash
node scripts/create-album.js "summer vacation" "Summer Vacation 2024" "California" "Our amazing summer trip"
```

This creates:
- `albums/summer-vacation.md` - Album markdown file
- `public/images/summer-vacation/` - Directory for your photos

### Adding Photos

1. **Copy your photos** to the created images directory:
```bash
cp /path/to/your/photos/* public/images/summer-vacation/
```

2. **Automatically update the album** with all photos:
```bash
node scripts/update-album-images.js summer-vacation
```

3. **Your album is live!** The script automatically:
   - Finds all images in the directory
   - Updates the album markdown file
   - Sets the first image as the cover photo

## Image Preparation

### Lightroom Export Settings (Recommended)
For optimal web performance and quality:

- **Format**: JPEG
- **Quality**: 85-90%
- **Color Space**: sRGB
- **Image Sizing**: 2000px long edge
- **Output Sharpening**: Screen, Standard

### Why Lightroom Export?
- Superior image quality control vs post-processing
- Consistent color management
- Optimal file sizes for web (vs 30-32MB originals)
- Professional workflow integration

## Amazon Q Context Usage

This project includes comprehensive context documentation in the `/context` directory to help Amazon Q provide better assistance:

```bash
# The context directory contains:
context/README.md           # Project overview
context/technical-details.md # Architecture info  
context/development-guide.md # Workflows and commands
context/project-status.md    # Current status and roadmap
```

When working with Amazon Q, reference these files for accurate project understanding and recommendations.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
