interface ItemData {
  description: string;
  title: string;
  photographer?: string;
  location?: string;
  nasa_id: string;
  media_type: string;
  keywords: string[];
  date_created: string;
  description_508?: string;
  secondary_creator?: string;
  center: string;
  album?: string[];
}

interface ItemLink {
  href: string;
  rel: string;
  render?: string;
}

interface CollectionItem {
  href: string;
  data: ItemData[];
  links: ItemLink[];
}

interface NasaCollection {
  version: string;
  href: string;
  items: CollectionItem[];
}

export interface INasaApiResponse {
  collection: NasaCollection;
}
