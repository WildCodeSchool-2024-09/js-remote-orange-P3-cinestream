import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//import pages
import AdminEpisode from "./pages/backOffice/adminEpisode/AdminEpisode";
import AdminRecherche from "./pages/backOffice/adminRecherche/AdminRecherche";
import AdminSeries from "./pages/backOffice/adminSeries/AdminSeries";
import CompteConnection from "./pages/compte/compteConnection/CompteConnection";
import CompteInsciption from "./pages/compte/compteInsciption/CompteInsciption";
import CompteProfile from "./pages/compte/compteProfile/CompteProfile";
import Error404Page from "./pages/error404Page/Error404Page";
import Home from "./pages/utilisateur/home/Home";
import Presentation from "./pages/utilisateur/presentation/Presentation";
import Recherche from "./pages/utilisateur/recherche/Recherche";

//conexte
import { TokenProvider } from "./context/tokenContext";

//import css
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "connection",
    element: <CompteConnection />,
  },
  {
    path: "insciption",
    element: <CompteInsciption />,
  },
  {
    path: "compte",
    element: <CompteProfile />,
  },
  {
    path: "detail/:idA",
    element: <Presentation />,
  },
  {
    path: "recherche",
    element: <Recherche />,
  },
  {
    path: "admin/recherche",
    element: <AdminRecherche />,
  },
  {
    path: "admin/organisation/:id/:numS?",
    element: <AdminSeries />,
  },
  {
    path: "admin/description/article/:idA/saison/:numS/:idS/episode/:idE",
    element: <AdminEpisode />,
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </StrictMode>,
);
