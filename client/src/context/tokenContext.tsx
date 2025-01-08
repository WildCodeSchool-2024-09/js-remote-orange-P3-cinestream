import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

const TokenContext = createContext<
  | {
      token: string | null;
      setToken: React.Dispatch<React.SetStateAction<string | null>>;
    }
  | undefined
>(undefined);

//hook pour utiliser le contexte
const UseTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("UseTokenContext must be used within a TokenProvider");
  }
  return context;
};

const TokenProvider = ({ children }: { children: ReactNode }) => {
  // Vérifie si une valeur est stockée dans le localStorage, sinon initialise avec une valeur par défaut
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });

  // Mettre à jour le localStorage chaque fois que l'état change
  useEffect(() => {
    if (token) {
      //mettre a jour le token
      localStorage.setItem("token", token);
    } else {
      //suprimer la clé pour étre sur que personne ne puisse se connecter
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider, UseTokenContext };
