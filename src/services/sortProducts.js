import { fetchProducts } from "../utils/api.js";
import { createProductCard } from "../scripts/services/createProductCard.js";
// import { createProductCard } from "../scripts/index.js";
import { productList } from "../../tempTestData/products.js";

export const sortProducts = async(chosenCategory) => {

    const productsContainer = document.getElementById("products");

    try {
    // const products = await fetchProducts();
    const products = productList;
    productsContainer.innerHTML = ""; 

    if (products.length > 0) {
        const sortedProducts = []

        products.forEach((product) => {
            product.categories.forEach(category => {
                category === chosenCategory && sortedProducts.push(product);
            })
        });

        sortedProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
        })


    } else {
        productsContainer.innerHTML = "<p>No products available.</p>";
    }
    } catch (error) {
    console.error("Error fetching products:", error);
    productsContainer.innerHTML = "<p>Failed to load products.</p>";
    }
}