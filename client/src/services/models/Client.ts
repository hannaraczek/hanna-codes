import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Client {
  name: string;
  slug: string;
  logoUrl: string;
  splash: SanityImageSource
}

export interface ClientRouteParams {
  params: {
    client: string;
  }
}
