import { fetchProducts } from "../utils/api.js";
import { createProductCard } from "../services/createProductCard.js";
import { showCategories } from "../services/showCategories.js";
import { searchProduct } from "../services/searchProduct.js";
import { addToCart } from "../services/addToCart.js";
import { productList } from "../../tempTestData/products.js";

document.addEventListener("DOMContentLoaded", loadProducts);

export let products;

// Function to fetch and render products
async function loadProducts() {
  const productsContainer = document.getElementById("productContainer");
  productsContainer.innerHTML = "<p>Loading products...</p>"; // Temporary message while loading
  

  try {
    // products = await fetchProducts();
    products = productList;

    console.log("products:" + products);
    console.log("product1:" + products[0]);
    productsContainer.innerHTML = ""; // Clear loading text

    if (products.length > 0) {
      createProductCard(products);
      showCategories(products); // change to await later when switching to fetch/databas
    } else {
      productsContainer.innerHTML = "<p>No products available.</p>";
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    productsContainer.innerHTML = "<p>Failed to load products.</p>";
  }
}



// addToCart(3, products[1])


// Fuction search products with searchbar

const searchbar = document.querySelector(".search");
// searchbar.addEventListener("blur", () => searchProduct(searchbar.value))
searchbar.addEventListener("input", () => searchProduct(searchbar.value))



//Function to make the searchfield active if clicked outside input-field

const searchfield = document.querySelector(".searchfield");

searchfield.addEventListener("click", () => {
  searchbar.focus();
})

