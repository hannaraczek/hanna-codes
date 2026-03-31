import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityClient } from '@services/SanityClient.ts';

export type ImageContext = 'gallery' | 'content' | 'banner';

export const ImageBuilder = imageUrlBuilder(SanityClient);

export const ImageSizes: Record<ImageContext, { defaultDownloadWidth: number, sizes: string }> = {
  gallery: {
    defaultDownloadWidth: 800,
    sizes: '(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw'
  },
  content: {
    defaultDownloadWidth: 1600,
    sizes: '(max-width: 800px) 100vw, 800px'
  },
  banner: {
    defaultDownloadWidth: 2400,
    sizes: '100vw'
  }
}

const getWidths = (context: ImageContext): number[] => {
  const widths = [320, 480, 640, 960, 1280];
  if (context === 'banner') { widths.push(...[1920, 2400]); }
  return widths;
}

export const getUrl = (image: SanityImageSource, width: number) => ImageBuilder
  // TODO: lower the quality for banners, if needed
  .image(image)
  .auto('format')
  .width(width)
  .url();

export const getSrcSet = (image: SanityImageSource, context: ImageContext) => getWidths(context)
  .map(width => `${getUrl(image, width)} ${width}w`)
  .join(', ');
