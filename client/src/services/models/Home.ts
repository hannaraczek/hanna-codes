import type { Client } from '@services/models/Client.ts';
import type { Service } from '@services/models/Service.ts';

export interface Home {
  header: string;
  subheader: string;
  clients: Client[];
  services: Service[];
  logos: string[]
}
