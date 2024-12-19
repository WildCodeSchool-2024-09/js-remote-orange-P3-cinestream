import style from "./navBarre.module.css";

const NavBarre = () => {
  return (
    <div className={`${style.navBarre} ${style.a} ${style.b}`}>
      <p>bonjour</p>
    </div>
  );
};

export default NavBarre;
