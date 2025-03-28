// products.js
import { productList } from "../../tempTestData/products.js";
import { addToCart } from "./addToCart.js";

export function createProductCard(products) {
  let productContainer = document.querySelector("#productContainer");

  products.forEach(product => {
    let productCard = document.createElement("div");
    productCard.classList.add("productCard");

    let productName = document.createElement("h2");
    productName.textContent = product.namn.charAt(0).toUpperCase() + product.namn.slice(1);

    let productDescription = document.createElement("p");
    productDescription.textContent = product.beskrivning.charAt(0).toUpperCase() + product.beskrivning.slice(1);

    let productCategories = document.createElement("p");
    productCategories.textContent = "Kategorier: " + product.kategorier.map(category => category.namn).join(", ");

    let productPrice = document.createElement("p");
    productPrice.classList.add("price");
    let formattedPrice = new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
      minimumFractionDigits: 2,
    }).format(product.pris);
    productPrice.textContent = `${formattedPrice}`;

    let cartAdd = document.createElement("button");
    cartAdd.classList.add("cartAdd");
    cartAdd.innerHTML = `<img src="assets/logos/basket.svg" alt="">`

    cartAdd.addEventListener("click", ()=>{
      addToCart(`id:01`, product);
      
    })

    // let plus = document.createElement("button");
    // plus.classList.add("plus");
    // plus.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    // <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
    // </svg>`;

    // let minus = document.createElement("button");
    // minus.classList.add("minus");
    // minus.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
    // <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
    // </svg>`;
    

    productCard.append(productName, productDescription, productCategories, productPrice ,cartAdd);
    productContainer.append(productCard);
  });
}
