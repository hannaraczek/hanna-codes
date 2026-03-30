export interface Client {
  name: string;
  slug: string;
}

export interface ClientRouteParams {
  params: {
    client: string;
  }
}
