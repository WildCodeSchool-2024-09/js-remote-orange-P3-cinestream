declare global {
  namespace Express {
    export interface Request {
      user?: Utilisateur;
    }
  }
}

// src/types/index.d.ts
export interface Utilisateur {
  id: number;
  mail: string;
  password: string;
  speudo: string;
  photo_profil?: string | null;
  is_admin: boolean;
  date_inscription: string;
}
