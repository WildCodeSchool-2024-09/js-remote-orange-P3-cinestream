import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={`${style.contenerSection}`}>
        <img
          className={`${style.logoFooter}`}
          src="/images/logo/Cinestream.png"
          alt="Cinestream Logo"
        />
        <p className={`${style.Coyrite}`}>&copy; 2024/2025 Wild Code School</p>
      </div>
    </footer>
  );
};

export default Footer;
