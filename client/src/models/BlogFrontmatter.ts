export interface BlogFrontmatter {
  title: string;
  pubDate: Date;
  description: string;
  author: string;
  image: { url: string; alt: string };
  tags: string[];
}

export interface BlogProps {
  url: string,
  frontmatter: BlogFrontmatter
}
