import style from "./desciptionAnonce.module.css";

const DesciptionAnonce = () => {
  return (
    <div className={`${style.desciptionAnonce}`}>
      {/* type de filme */}
      <p className={`${style.headerType}`}>Film</p>
      {/* titre du filme */}
      <p className={`${style.headerTitre}`}>Star Wars: The force Awaken</p>
      {/* info filme */}
      <p className={`${style.headerInfoFilme}`}>
        2h40m • 2022 • Fantasy • Actions
      </p>
      {/* desciption */}
      <p className={`${style.headerDescription}`}>
        The third season of the American television series The Mandalorian stars
        Pedro Pascal as the title character, a bounty hunter traveling to
        Mandalore to redeem his past transgressions with his adopted son Grogu
        and being aided on their journey by fellow Mandalorian Bo-Katan Kryze.
      </p>
    </div>
  );
};

export default DesciptionAnonce;
