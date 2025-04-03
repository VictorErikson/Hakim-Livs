

export async function deleteItem (id) {
    try{
        const response = await axios.delete(`https://grupp-11-backend.vercel.app/api/products/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        });
    }catch(error){
        console.log("Något gick fel: " + error);
    }
}