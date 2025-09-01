export interface Album {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
  content: string;
}

export interface AlbumMetadata {
  title: string;
  date: string;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
}
