import { API_URL } from "./config";
// // CREATE
export async function createUser(title, description) {
  const response = await fetch(`${API_URL}/user`, {
    method: "POST",
    body: JSON.stringify({ title, description }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}
// // GET
export async function getUser() {
  const response = await fetch(`${API_URL}/user`);
  return response.json();
}
// // DELETE
export async function deleteUser(userId) {
  fetch(`${API_URL}/user/${userId}`, {
    method: "DELETE",
  });
}
