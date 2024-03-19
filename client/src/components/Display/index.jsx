import { Link } from "react-router-dom";
import style from "./display.module.css";

function Display() {
  return (
    <>
      <section className={style.display}>
        <h2> This is the title</h2>
        <div className={style.content}>
          <img src="https://via.placeholder.com/150" />
          <p>
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
          </p>
        </div>
        <Link to="/" className={style.read_more_left}>
          Read more...
        </Link>
      </section>

      <section className={style.display}>
        <h2> This is the title</h2>
        <div className={style.content}>
          <img src="https://via.placeholder.com/150" />
          <p>
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
            This will be a "card" of how the layout of the page will look like
          </p>
        </div>
        <Link to="/" className={style.read_more_right}>
          Read more...
        </Link>
      </section>
    </>
  );
}

export default Display;
