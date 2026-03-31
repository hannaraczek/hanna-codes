import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Project {
  name: string;
  shortName: string;
  service: string;
  description: string;
  videoUrl: string | null;
  images: SanityImage[];
}

export interface SanityImage {
  asset: SanityImageSource;
  url: string;
  aspectRatio: number;
  width: number;
  height: number;
  lqip: any;
}

export interface ProjectRouteParams {
  params: {
    project: string,
    client: string;
  }
}
