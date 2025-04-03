import { showProductsAdmin } from "../showProductsAdmin.js";
import { fetchProducts } from "../../utils/api.js";

export async function deleteItem (id) {
    console.log(id)
    try{
        const response = await axios.delete(`https://grupp-11-backend.vercel.app/api/products/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`
            }
        });
        if (response.status === 200) {
            location.reload();
        }
        console.log(response.status);
    }catch(error){
        console.log("Något gick fel: " + error);
    }
}