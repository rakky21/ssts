import styles from "./display.module.css";


export default function Display() {

  const displayedData = [
    {
      id: 8,
      title: "Zyraphine",
      displayedPicture: "image",
      textBox: "sculture",
      stars: 5,
    },
    {
      id: 7,
      title: "Apple",
      displayedPicture: "image",
      textBox: "fruit",
      stars: 5,
    },
    {
      id: 6,
      title: "Belt",
      displayedPicture: "image",
      textBox: "Small belt",
      stars: 3,
    },
    {
      id: 5,
      title: "Book case",
      displayedPicture: "image",
      textBox: "Cover",
      stars: 5,
    },
    {
      id: 4,
      title: "Bike",
      displayedPicture: "image",
      textBox: "Mount bike",
      stars: 5,
    },
    {
      id: 3,
      title: "Book One",
      displayedPicture: "image",
      textBox: "This is all about the book",
      stars: 5,
    },
    {
      id: 2,
      title: "Car",
      displayedPicture: "image",
      textBox: "Drive phoo",
      stars: 2,
    },
    {
      id: 1,
      title: "Wings",
      displayedPicture: "image",
      textBox: "They are delish",
      stars: 4,
    },
  ];

  // This organizes them based on their star ranking
  const topItem = displayedData.filter((data) => data.stars >= 5);

  const dataList = topItem.map((data) => (
    <li key={data.id} className={styles.display}>
      <h2 className={styles.titulo}>{data.title}: &nbsp;</h2>
      <img src={data.displayedPicture} />
      <p className={styles.parro}> {data.textBox}</p>
      <a>{data.stars}</a>
    </li>
  ));
  return <ol> {dataList} </ol>;
}
