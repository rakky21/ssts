import { useState } from "react";
import Layout from "../components/Layout";

// IF LOGGED IN

const AddItem = () => {
  const [data, setData] = useState({
    itemName: "",
    itemDescription: "",
    imageUpload: "",
    itemPrice: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  return (
    <Layout>
      <div className="signupStyle">
        <h2> Add an Item </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="itemName">
            Item Name
            <input
              id="itemName"
              type="text"
              name="itemName"
              autoComplete="on"
              value={data.itemName}
              placeholder="Item Name"
              className=""
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="itemPrice">
            Item Price
            <input
              name="itemPrice"
              type="number"
              id="itemPrice"
              autoComplete="on"
              value={data.itemPrice}
              placeholder="Item Price"
              className=""
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="itemDescription">
            Item Description
            <textarea
              type="text"
              name="itemDescription"
              id="itemDescription"
              autoComplete="on"
              value={data.itemDescription}
              placeholder="Item Description"
              className=""
              onChange={handleChange}
              rows={4}
              cols={40}
            />
          </label>
          <br />
          <label htmlFor="imageUpload">
            Image Upload
            <input
              id="imageUpload"
              type="file"
              name="imageUpload"
              accept="image/png, image/jpg"
              multiple
              value={data.imageUpload}
              placeholder="Upload Your Images"
              className=""
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit" className="btn">
            Add Item
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddItem;
