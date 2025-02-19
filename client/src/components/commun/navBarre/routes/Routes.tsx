import { useLocation } from "react-router-dom";
import { UseTokenContext } from "../../../../context/tokenContext";
import style from "./routes.module.css";

const Routes = () => {
  const location = useLocation();
  const { token, isAdmin } = UseTokenContext();

  //récupère la route actuel
  const pageName = location.pathname.split("://").filter(Boolean).pop();

  //function qui défini quelle route est actuel
  function defClasse(pageRequired: string) {
    if (
      pageName === pageRequired ||
      (pageName?.includes("detail") && pageRequired === "/detail")
    ) {
      return `${style.pRoutes} ${style.active}`;
    }
    return `${style.pRoutes}`;
  }

  return (
    <div className={style.divFlex}>
      <p className={defClasse("/")}>
        <a href="/">home</a>
      </p>
      <p className={defClasse("/recherche")}>
        <a href="/recherche">recherche</a>
      </p>
      {token && (
        <p className={defClasse("")}>
          <a href="/compte">compte</a>
        </p>
      )}
      {pageName?.includes("/detail") && (
        <p className={defClasse("/detail")}>film</p>
      )}
      {isAdmin && (
        <p className={defClasse("")}>
          <a href="/admin/recherche">admin</a>
        </p>
      )}
    </div>
  );
};

export default Routes;
