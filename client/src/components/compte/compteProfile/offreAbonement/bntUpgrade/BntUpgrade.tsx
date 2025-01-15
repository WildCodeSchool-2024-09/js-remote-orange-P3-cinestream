import style from "./BntUpgrade.module.css";

const BntUpgrade = () => {
  return (
    <div className={`${style.contenerbntUpgrade}`}>
      <p className={`${style.pTexteUpgrade}`}>Passer au premium ?</p>
      <button className={`${style.BntUpgrade}`} type="button">
        👑 Upgrade
      </button>
    </div>
  );
};

export default BntUpgrade;
