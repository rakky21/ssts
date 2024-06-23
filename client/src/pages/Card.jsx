import { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";

import Layout from "../components/Layout";
import { createCard, getCard, deleteCard } from "../api/cardAPI";

export default function WishCard() {
  const [wishlist, setWishlist] = useState();
  const [text, setText] = useState("");
  const { wishlistId } = useParams();

  const [cards, setCards] = useState([]);

  // // CREATE CARD
  async function handleCreateCard(e) {
    e.preventDefault();
    const { cards: serverCards } = await createCard(wishlistId, text);
    setCards(serverCards);
    setText("");
  }
  // // DELETE CARD
  async function handleDeleteWishCard(index) {
    if (!wishlistId) return;
    const newWishlist = await deleteCard(wishlistId, index);
    setCards(newWishlist.cards);
  }
  // // GET CARD
  useEffect(() => {
    async function fetchCard() {
      if (!wishlistId) return;
      const newWishlist = await getCard(wishlistId);
      setWishlist(newWishlist);
      setCards(newWishlist.cards);
    }
    fetchCard();
  }, [wishlistId]);

  return (
    <Layout>
      <div className="cardForm">
        <h2> Add an Item</h2>
        <form onSubmit={handleCreateCard} className="AddItemform">
          <label htmlFor="card-text"> Item Name: </label>
          <input
            required
            id="card-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Item Name"
          />
          <br />
          <button className="btn"> Submit </button>
        </form>
        <div className="cardsdisplay">
          {cards.map((card, index) => (
            <ul key={index}>
              <li>{card}</li>
              <button
                className="btn"
                onClick={() => handleDeleteWishCard(index)}
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
