import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CompteConnection from "./pages/compte/compteConnection/CompteConnection";
import Home from "./pages/utilisateur/home/Home";
("./pages/compte/compteConnection/CompteConnection");
import CompteInsciption from "./pages/compte/compteInsciption/CompteInsciption";
("./pages/compte/compteInsciption/CompteInsciption");
import Error404Page from "./pages/error404Page/Error404Page";
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
    <RouterProvider router={router} />
  </StrictMode>,
);
