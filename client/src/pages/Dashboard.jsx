import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  deleteWishlist,
  getWishlist,
  createWishlist,
} from "../api/wishlistAPI";
import Layout from "../components/Layout";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [wishlists, setWishlists] = useState([]);
  // // CREATE WISH
  async function handleCreateWish(e) {
    e.preventDefault();
    const wishlist = await createWishlist(title, description);
    setTitle("");
    setDescription("");
    setWishlists([...wishlists, wishlist]);
  }
  // // DELETE WISH
  async function handleDeleteWish(wishlistId) {
    await deleteWishlist(wishlistId);
    setWishlists(wishlists.filter((wishlist) => wishlist._id !== wishlistId));
  }
  // //  GET WISH
  useEffect(() => {
    async function fetchWishes() {
      const newWishlist = await getWishlist();
      setWishlists(newWishlist);
    }
    fetchWishes();
  }, []);
  return ( 
    <Layout>
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
        <div>
          {wishlists.map((wishlist) => (
            <ul key={wishlist._id} className
            ="cardsdisplay">
              <img
                src="https://via.placeholder.com/"
                alt="Image display"
                className="cardsimage"
              />
              <li>{wishlist.title}</li>
              <li>{wishlist.description}</li>
              <Link to={`/wishlist/${wishlist._id}`} className="btn">
                {" "}
                Open
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
      <Outlet />
    </Layout>
  );
};

export default Dashboard;