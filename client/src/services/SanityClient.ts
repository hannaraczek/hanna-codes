import { createClient } from '@sanity/client';
import type { Client } from '@services/models/Client.ts';
import type { Home } from '@services/models/Home.ts';
import type { Project, ProjectRouteParams } from '@services/models/Project.ts';
import type { ProjectMeta } from '@services/models/ProjectMeta.ts';

export const SanityClient = createClient({
  projectId: 'uh7kbf9e',
  dataset: 'production',
  apiVersion: "2026-03-20",
  useCdn: true
});

export const getProject = async (client: string, project: string): Promise<Project> =>  SanityClient.fetch<Project>(`*[
  _type == "project" 
  && slug.current == $project 
  && client->slug.current == $client
  ][0]{
    "name": fullName,
    "service": service->name,
    "description": description,
    "videoUrl": video.asset->url,
    "images": gallery[]{
      "asset": asset,
      "url": asset->url,
      "aspectRatio": asset->metadata.dimensions.aspectRatio,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height,
      "lqip": asset->metadata.lqip
    }
  }`,
  { project, client });

export const getProjectMetas = async (client: string): Promise<ProjectMeta[]> => SanityClient.fetch<ProjectMeta[]>(`*[
    _type == "project" &&
    client->slug.current == $client
  ] | order(_createdAt desc) {
    "slug": slug.current,
    "shortName":  coalesce(shortName, fullName)
  }`, { client });

export const getFirstProjectSlug = async (client: string): Promise<string> => SanityClient.fetch<string>(`
  *[
    _type == "project" &&
    client->slug.current == $client
  ] | order(_createdAt desc) {
    "slug": slug.current
  }.slug`, { client });

export const getClient = async (client: string): Promise<Client> => SanityClient.fetch<Client>(`*[
  _type == "client" &&
  slug.current == $client][0]{ 
    name, 
    "slug": slug.current,
    "logoUrl": logo.asset->url,
    "splash": splash.asset 
  }
`, { client });

export const getProjectRoutes = async (): Promise<ProjectRouteParams[]> => SanityClient.fetch(`*[_type == "project"]{
  "params": {
    "project": slug.current,
    "client": client->slug.current
  }
}`);

export const getHome = async (): Promise<Home> => SanityClient.fetch<Home>(`
  *[_type == "home"][0]{
    "header": header,
    "subheader": subheader,
    "logos": featuredLogos[]->logo.asset->url,
    "services": services[]->{
      name,
      description
    },
    "clients": featuredClients[]->{
      name,
      "logoUrl": logo.asset->url,
      "slug": slug.current,
      "splash": splash.asset
    }
  }
`)
