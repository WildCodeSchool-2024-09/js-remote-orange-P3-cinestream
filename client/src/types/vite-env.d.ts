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
  article_date: string;
  article_premium: number;
}

export interface Commentaire {
  comentaire: string;
  note: number;
  nomUtilisateur: string;
  article_id: number;
  utilisateur_id: number;
  commentaire_date: string;
  utilisateur_is_admin: number;
  photo_utilisateur?: string | null;
}
