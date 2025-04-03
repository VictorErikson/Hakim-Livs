import { showProductsAdmin } from "../services/showProductsAdmin.js";
import { fetchProducts } from "../utils/api.js";

export async function deleteItem (id) {
    try{
        const response = await axios.delete(`https://grupp-11-backend.vercel.app/api/products/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`
            }
        });
        if (response.status === 200) {
            products = await fetchProducts();
            showProductsAdmin(products);
        }
    }catch(error){
        console.log("Något gick fel: " + error);
    }
}