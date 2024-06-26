import style from "./footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={style.footer}>
      // horizontal
      <div className={style.middleSection}>
        <div className={style.socialMedia}>
          <h3> Follow Us</h3>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="mb-3 me-2 emoticons"
          >
            <FaLinkedin size="2em" title="LinkedIn" />
            <br />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="mb-3 me-2 emoticons"
          >
            <BsFacebook size="2em" title="facebook" />
            <br />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="mb-3 me-2 emoticons"
          >
            <AiFillInstagram size="2em" title="instagram" />
            <br />
          </a>
        </div>
        <div className={style.followus}>
          <h3> Contact Us</h3>
          <p> THIS IS THE CONTACT</p>
        </div>
      </div>
      <br />
      <div>
        <a href="/">
          &copy; 2024 - {new Date().getFullYear()} Cribas Development
        </a>
        All Rights Reserved
      </div>
    </footer>
  );
}
