import styles from "./card.module.css";

export default function Card() {
  return (
    <section className={styles.card}>
      <img
        className={styles.cardphoto}
        src="https://via.placeholder.com/150"
        alt="Image showing something"
      />
      <h2 className={styles.cardTitle}> {}Title Name </h2>
      <p className={styles.p}> Description of what this is going to be about</p>
    </section>
  );
}
