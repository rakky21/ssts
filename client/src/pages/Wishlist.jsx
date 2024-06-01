import { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
// import { createCard, deleteCard, getCard } from "../api/cardAPI";

import Layout from "../components/Layout";

export default function AdditemForm() {
  const [text, setText] = useState("");
  const { wishlistId } = useParams();

  const [cards, setCards] = useState([]);
  // // CREATE CARD
  async function handleCreateCard(e) {
    e.preventDefault();
    const cards = await createCard(wishlistId, text);
    setCards([...cards, cards]);
    setText("");
  }
  // // DELETE CARD
  async function handleDeleteWishCard(wishlistId) {
    await deleteCard(wishlistId);
    setCards(cards.filter((card) => card._id !== wishlistId));
  }
  // // GET CARD
  useEffect(() => {
    async function fetchSingleWishCard() {
      const newSingleWishCard = await getCard();
      setCards(newSingleWishCard);
    }
    fetchSingleWishCard();
  }, []);

  return (
    <Layout>
      <div className="AddItemform">
        <h2> Add an Item</h2>
        <form onSubmit={handleCreateCard} className="AddItemform">
          <label htmlFor="wishlist-text"> Item Name: </label>
          <input
            required
            id="wishlist-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Item Name"
          />
          <br />
          <button className="btn"> Submit </button>
        </form>
        <div className="cardsdisplay">
          {cards.map((cards) => (
            <ul key={cards}>
              <li>{cards}</li>
              <button
                className="btn"
                onClick={() => handleDeleteWishCard(wishlist._id)}
              >
                {" "}
                Delete
              </button>
            </ul>
          ))}
        </div>
      </div>
      <Outlet />
    </Layout>
  );
}
