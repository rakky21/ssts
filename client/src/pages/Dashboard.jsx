import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [wishlist, setWishlist] = useState("");

  function handleCreateWish(e) {
    e.preventDefault();
    fetch("http://localhost:4000/wishlist", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTitle("");
    setDescription("");
  }

  useEffect(() => {
    async function fetchWishes() {
      const response = await fetch("http://localhost:4000/wishlist");
      const newWishlist = await response.json();
      setWishlist(newWishlist);
    }
    fetchWishes();
  }, []);

  // useEffect(() => {
  //   async function fetchWishes() {
  //     const response = await fetch("http://localhost:4000/wishlist").then(
  //       (response) => response.json()
  //     );
  //     fetchWishes();
  //   }
  // }, []);

  return (
    <Layout>
      <form onSubmit={handleCreateWish}>
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
        {/* {wishlist.map((wish) => (
          <ul key={wishlist._id}> {wish.title} </ul>
        ))} */}
      </div>
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
