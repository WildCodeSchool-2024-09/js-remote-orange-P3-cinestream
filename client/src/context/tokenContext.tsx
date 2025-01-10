import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

const TokenContext = createContext<
  | {
      token: string | null;
      setToken: React.Dispatch<React.SetStateAction<string | null>>;
      isAdmin: boolean;
    }
  | undefined
>(undefined);

//hook pour utiliser le contexte
const UseTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("eurreur l'ore de l'utilisation du contexte");
  }
  return context;
};

const TokenProvider = ({ children }: { children: ReactNode }) => {
  // récupérer le token du localStorage
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });
  //state isAdmin
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Mettre à jour le localStorage chaque fois que l'état change
  useEffect(() => {
    //chargement des function
    async function fetcheIsAdmin() {
      const values = {
        token: token,
      };
      try {
        const { data } = await axios.post(
          "http://localhost:3310/api/isAdmin",
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setIsAdmin(data.isAdmin);
        return data.isAdmin;
      } catch (error) {
        console.error(error);
      }
    }

    //exécuter lu code
    if (token) {
      //mettre a jour le token
      localStorage.setItem("token", token);
      //mettre a jour le isAdmin
      fetcheIsAdmin();
    } else {
      //suprimer la clé pour étre sur que personne ne puisse se connecter
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, setToken, isAdmin }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider, UseTokenContext };
