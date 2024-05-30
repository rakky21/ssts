import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteWishlist, getWishlist, createWishlist } from "../../api/wishlistAPI";

export default function AdditemForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [wishlists, setWishlists] = useState([]);

  async function handleCreateWish(e) {
    e.preventDefault();
    const wishlist = await createWishlist(title, description);
    setTitle("");
    setDescription("");
    setWishlists([...wishlists, wishlist]);
  }

  async function handleDeleteWish(wishlistId) {
    await deleteWishlist(wishlistId);
    setWishlists(wishlists.filter((wishlist) => wishlist._id !== wishlistId));
  }

  useEffect(() => {
    async function fetchWishes() {
      const newWishlist = await getWishlist();
      setWishlists(newWishlist);
    }
    fetchWishes();
  }, []);

  return (
    <div className="AddItemform">
      <h2> Add an Item</h2>
      <form onSubmit={handleCreateWish} className="AddItemform">
        <label htmlFor="wishlist-title"> Wishlist Title: </label>
        <input
          required
          id="wishlist-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <br />
        <label htmlFor="wishlist-description"> Wishlist Description: </label>
        <input
          required
          id="wishlist-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
        />
        <br />
        <button className="btn"> Add Wish</button>
      </form>
      <div className="cardsdisplay">
        {wishlists.map((wishlist) => (
          <ul key={wishlist._id}>
            <li>{wishlist.title}</li>
            <li>{wishlist.description}</li>
            <Link to={`/wishlist/${wishlist._id}`} className="btn">
              {" "}
              {wishlist.title}
            </Link>
            <button
              className="btn"
              onClick={() => handleDeleteWish(wishlist._id)}
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
