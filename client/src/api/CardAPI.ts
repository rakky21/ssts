import { API_URL } from "./config";

// // CREATE
export async function createWishlistCard(wishlistId, text) {
  const response = await fetch(`${API_URL}/wishlist/${wishlistId}/card`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
// // GET ONE
export async function getWishlistCard(wishlistId) {
  const response = await fetch(`${API_URL}/wishlist/${wishlistId}/card`);
  return response.json();
}
// // DELETE
export async function deleteWishlistCard(wishlistId) {
  fetch(`${API_URL}/wishlist/${wishlistId}/card`);
}
