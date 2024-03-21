import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <a href="/">
        &copy; 2024 - {new Date().getFullYear()} Cribas Development
      </a>
      <br />
      All Rights Reserved
    </footer>
  );
}
