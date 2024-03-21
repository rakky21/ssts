import { Link } from "react-router-dom";
import styles from "./display.module.css";

export default function Display() {
  return (
    <>
      <section className={styles.display}>
        <h2 className={styles.titulo}> This is the title</h2>

        {/* alternate sides when displayed */}
        <div className={styles.content}>
          <img src="https://via.placeholder.com/150" />
          <p className={styles.parro}>
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
          </p>
        </div>
        <Link to="/" className={styles.read_more_left}>
          Read more...
        </Link>
      </section>

      <section className={styles.display}>
        <h2 className={styles.titulo}> This is the title</h2>
        <div className={styles.content}>
          <p className={styles.parro}>
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
          </p>
          <img src="https://via.placeholder.com/150" />
        </div>
        <Link to="/" className={styles.read_more_right}>
          Read more...
        </Link>
      </section>
    </>
  );
}
