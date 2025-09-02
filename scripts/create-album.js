#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function createAlbum(albumName, title, location, description) {
  const slug = albumName.toLowerCase().replace(/\s+/g, '-');
  const date = new Date().toISOString().split('T')[0];
  
  // Create album markdown file
  const albumContent = `---
title: "${title}"
date: "${date}"
location: "${location}"
description: "${description}"
coverImage: "/images/${slug}/cover.jpg"
images:
  - "/images/${slug}/cover.jpg"
---

Add your album story here...
`;

  // Create directories
  const albumsDir = path.join(process.cwd(), 'albums');
  const imagesDir = path.join(process.cwd(), 'public', 'images', slug);
  
  if (!fs.existsSync(albumsDir)) {
    fs.mkdirSync(albumsDir, { recursive: true });
  }
  
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Write album file
  fs.writeFileSync(path.join(albumsDir, `${slug}.md`), albumContent);
  
  console.log(`✅ Created album: ${slug}`);
  console.log(`📁 Album file: albums/${slug}.md`);
  console.log(`📁 Images directory: public/images/${slug}/`);
  console.log(`📝 Next steps:`);
  console.log(`   1. Add your photos to public/images/${slug}/`);
  console.log(`   2. Run: node scripts/update-album-images.js ${slug}`);
  console.log(`   3. Or manually copy: cp "path/to/photos/"* "public/images/${slug}/"`);
}

// Command line usage
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 4) {
    console.log('Usage: node scripts/create-album.js "Album Name" "Album Title" "Location" "Description"');
    console.log('Example: node scripts/create-album.js "summer vacation" "Summer Vacation 2024" "California" "Our amazing summer trip"');
    process.exit(1);
  }
  
  createAlbum(args[0], args[1], args[2], args[3]);
}

module.exports = { createAlbum };
