import PropTypes from "prop-types";
import styles from "./list.module.css";

export default function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id} className={styles.display}>
      <h2 className={styles.titulo}>{item.title}: &nbsp;</h2>
      <img src={item.src} />
      <p className={styles.parro}> {item.textBox}</p>
      <a>{item.stars}</a>
    </li>
  ));
  return (
    <>
      <h3 className="listCategory"> {category}</h3>
      <ol> {listItems} </ol>
    </>
  );
}
//Confirms the data entered is acurate
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      // src: PropTypes.src, NEED TO FIND THE PROPS FOR SRC DATA
      textBox: PropTypes.string,
      stars: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "Category",
  items: [],
};
