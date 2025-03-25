
import { createProductCard } from "./createProductCard.js";
import { products } from "../scripts/index.js";

export const searchProduct = async(searchWord) => {

    const productsContainer = document.getElementById("productContainer");

    productsContainer.innerHTML = ""; 
    if (products.length > 0) {
        const sortedProducts = []

        products.forEach((product) => {
            (product.categories.some(cat => cat.toLowerCase().includes(searchWord.toLowerCase())) || product.name.toLowerCase().includes(searchWord.toLowerCase())) && sortedProducts.push(product)
        });

        createProductCard(sortedProducts);


    } else {
        productsContainer.innerHTML = "<p>No products available.</p>";
    }

}