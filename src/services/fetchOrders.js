export async function fetchOrders() {
  try {
    const response = await axios.get(
      "https://grupp-11-backend.vercel.app/api/orders"
    );
    return response.data;
  } catch (error) {
    alert("Ett fel inträffade vid hämtningen av orders.");
    console.error(error);
  }
}
