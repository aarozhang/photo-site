#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function updateAlbumImages(albumSlug) {
  const albumFile = path.join(process.cwd(), 'albums', `${albumSlug}.md`);
  const imagesDir = path.join(process.cwd(), 'public', 'images', albumSlug);
  
  if (!fs.existsSync(albumFile)) {
    console.error(`❌ Album file not found: albums/${albumSlug}.md`);
    process.exit(1);
  }
  
  if (!fs.existsSync(imagesDir)) {
    console.error(`❌ Images directory not found: public/images/${albumSlug}/`);
    process.exit(1);
  }
  
  // Read current album content
  const content = fs.readFileSync(albumFile, 'utf8');
  
  // Get all image files
  const imageFiles = fs.readdirSync(imagesDir)
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .sort()
    .map(file => `/images/${albumSlug}/${file}`);
  
  if (imageFiles.length === 0) {
    console.log(`⚠️  No image files found in public/images/${albumSlug}/`);
    return;
  }
  
  // Split content into frontmatter and markdown
  const parts = content.split('---');
  if (parts.length < 3) {
    console.error('❌ Invalid frontmatter format');
    process.exit(1);
  }
  
  const frontmatter = parts[1];
  const markdownContent = parts.slice(2).join('---');
  
  // Parse and rebuild frontmatter
  const lines = frontmatter.trim().split('\n');
  const newLines = [];
  let inImagesSection = false;
  
  for (const line of lines) {
    if (line.startsWith('images:')) {
      inImagesSection = true;
      newLines.push('images:');
      imageFiles.forEach(img => newLines.push(`  - "${img}"`));
    } else if (line.startsWith('coverImage:')) {
      newLines.push(`coverImage: "${imageFiles[0]}"`);
    } else if (inImagesSection && line.trim().startsWith('- ')) {
      // Skip old image entries
      continue;
    } else {
      if (inImagesSection && !line.trim().startsWith('- ') && line.trim() !== '') {
        inImagesSection = false;
      }
      newLines.push(line);
    }
  }
  
  const updatedContent = `---\n${newLines.join('\n')}\n---${markdownContent}`;
  
  fs.writeFileSync(albumFile, updatedContent);
  
  console.log(`✅ Updated ${albumSlug} with ${imageFiles.length} images`);
  console.log(`📸 Cover image: ${imageFiles[0]}`);
  console.log(`📁 Images: ${imageFiles.length} total`);
}

// Command line usage
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.log('Usage: node scripts/update-album-images.js <album-slug>');
    console.log('Example: node scripts/update-album-images.js summer-vacation');
    process.exit(1);
  }
  
  updateAlbumImages(args[0]);
}

module.exports = { updateAlbumImages };
