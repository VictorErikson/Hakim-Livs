import { fetchProducts } from "../utils/api.js";
import { createProductCard } from "../services/createProductCard.js";
import { productList } from "../../tempTestData/products.js";
import { showCategories } from "../services/showCategories.js";
import { searchProduct } from "../services/searchProduct.js";
import { addToCart } from "../services/addToCart.js";

document.addEventListener("DOMContentLoaded", loadProducts);

export let products;

// Function to fetch and render products
async function loadProducts() {
  const productsContainer = document.getElementById("productContainer");
  productsContainer.innerHTML = "<p>Loading products...</p>"; // Temporary message while loading
  
  // try {
  //   // products = productList;
  //   const products = await fetchProducts();
  //   productsContainer.innerHTML = ""; // Clear loading text

  //   if (products.length > 0) {
  //     products.forEach((product) => {
  //       const productCard = createProductCard(product);
  //       productsContainer.appendChild(productCard);
  //     });
  //   } else {
  //     productsContainer.innerHTML = "<p>No products available.</p>";
  //   }
  // } catch (error) {
  //   console.error("Error fetching products:", error);
  //   productsContainer.innerHTML = "<p>Failed to load products.</p>";
  // }
    // Justinas egna 
  try {
    products = productList;
    productsContainer.innerHTML = ""; // Clear loading text

    if (products.length > 0) {
      createProductCard(products);
      showCategories(Promise.resolve(products)); // change to await later when switching to fetch/database
    } else {
      productsContainer.innerHTML = "<p>No products available.</p>";
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    productsContainer.innerHTML = "<p>Failed to load products.</p>";
  }
}


addToCart(3, products[1])


// Fuction search products with searchbar

const searchbar = document.querySelector(".search");
// searchbar.addEventListener("blur", () => searchProduct(searchbar.value))
searchbar.addEventListener("input", () => searchProduct(searchbar.value))



//Function to make the searchfield active if clicked outside input-field

const searchfield = document.querySelector(".searchfield");

searchfield.addEventListener("click", () => {
  searchbar.focus();
})

