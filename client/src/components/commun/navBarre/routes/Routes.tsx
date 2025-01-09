import { useLocation } from "react-router-dom";
import { UseTokenContext } from "../../../../context/tokenContext";
import style from "./Routes.module.css";

const Routes = () => {
  const location = useLocation();
  const { token, isAdmin } = UseTokenContext();

  //récupère la route actuel
  const pageName = location.pathname.split("://").filter(Boolean).pop();

  //function qui défini quelle route est actuel
  function defClasse(pageRequired: string) {
    if (pageName === pageRequired) {
      return `${style.pRoutes} ${style.active}`;
    }
    return `${style.pRoutes}`;
  }

  return (
    <div className={style.divFlex}>
      <p className={defClasse("/")}>home</p>
      <p className={defClasse("/recherche")}>recherche</p>
      {token && <p className={defClasse("")}>compte</p>}
      {pageName === "/detail" && <p className={defClasse("/detail")}>film</p>}
      {isAdmin && <p className={defClasse("")}>admin</p>}
    </div>
  );
};

export default Routes;
