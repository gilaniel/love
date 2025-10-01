export type Locale = "en" | "es" | "pt";

export type SeriesItem = {
  id: number;
  banner: string;
  poster: string;
  title: string;
  name: string;
  subtitle: string;
  description: string;
  genre: string[];
  episodes: number;
  video: string;
  prev?: boolean;
  next?: boolean;
  l10n: {
    en: SeriesMeta;
    es: SeriesMeta;
    pt: SeriesMeta;
  };
  tags: {
    id: number;
    weight: number;
    name: string;
  }[];
  weight: number | string;
  sort_number: number;
};

export type SeriesMeta = {
  description: string;
  name: string;
  thumbnail: string;
};

export type FaqItem = {
  title: string;
  description: string;
};

export type ContentResponse = {
  items: ContentItem[];
  count_all: number;
};

export type ContentItem = {
  id: number;
  ext_id: string;
  brand_id: number;
  cf_link: string;
  thumbnail: string;
  is_open: true;
  season: number;
  episode: number;
  price: number;
  is_reloading: false;
  track_langs: string[];
  subs_langs: string[];
};

export type TagItem = {
  name: string;
  weight: number;
  id: number;
  brands: SeriesItem[];
  l10n: {
    en: TagMeta;
    es: TagMeta;
    pt: TagMeta;
  };
};

export type TagMeta = {
  name: string;
};
