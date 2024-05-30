
import { API_URL } from "./config";
// // CREATE
export async function createWishlist(title, description) {
  const response = await fetch(`${API_URL}/wishlist`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
// // GET
export async function getWishlist() {
  const response = await fetch(`${API_URL}/wishlist`);
  return response.json();
}
// // DELETE
export async function deleteWishlist(wishlistId) {
  fetch(`${API_URL}/wishlist/${wishlistId}`, {
    method: "DELETE",
  });
}
