import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  createWishlistCard,
  deleteWishlistCard,
  getWishlistCard,
} from "../api/CardAPI";

export default function AdditemForm() {
  const [text, setText] = useState("");
  const [wishlistCards, setWishlistCards] = useState([]);
  const { wishlistId } = useParams();

  async function handleCreateCard(e) {
    e.preventDefault();
    const { wishlistCards } = await createWishlistCard(wishlistId, text);
    setWishlistCards(wishlistCards);
    setText("");
  }

  async function handleDeleteWishCard(wishlistId) {
    await deleteWishlistCard(wishlistId);
    setWishlistCards(
      wishlistCards.filter((wishlistCard) => wishlistCard._id !== wishlistId)
    );
  }

  useEffect(() => {
    async function fetchSingleWishCard() {
      const newSingleWishCard = await getWishlistCard(wishlistId);
      setWishlistCards(newSingleWishCard);
    }
    fetchSingleWishCard();
  }, []);

  return (
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
        {wishlistCards.map((wishlistCard) => (
          <ul key={wishlistCard}>
            <li>{wishlistCard}</li>
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
  );
}
