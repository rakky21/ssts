import { API_URL } from "./config";

// // CREATE
export async function createCard(wishlistId, text) {
  const response = await fetch(`${API_URL}/wishlist/${wishlistId}/cards`, {
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

// // THIS IS THE BITCHASS THAT'S BREAKING
// // GET ONE
export async function getCard(wishlistId) {
  const response = await fetch(`${API_URL}/wishlist/${wishlistId}`);
  return response.json();
}
// // DELETE
export async function deleteCard(wishlistId, index) {
  await fetch(`${API_URL}/wishlist/${wishlistId}/cards/${index}`, {
    method: "DELETE",
  });
}
