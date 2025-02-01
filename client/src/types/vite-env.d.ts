/// <reference types="vite/client" />
// This provides types for the Vite-injected env variables on import.meta.env
// See https://vite.dev/guide/features.html#client-types

interface Episodes {
  episode_description: string | null;
  episode_id: number;
  episode_image: string | null;
  episode_lien_video: string | null;
  episode_nom: string;
  episode_numero: number;
}

export interface Saison {
  saison_id: number;
  saison_numero: number;
  episodes: Episodes[];
  article_type: string;
}
