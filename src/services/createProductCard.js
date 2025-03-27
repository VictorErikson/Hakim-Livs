// products.js
// import { productList } from "../../tempTestData/products.js";


export function createProductCard(products) {
  let productContainer = document.querySelector("#productContainer");

  products.forEach(product => {
    let productCard = document.createElement("div");
    productCard.classList.add("productCard");

    let productName = document.createElement("h2");
    productName.textContent = product.namn;

    let productDescription = document.createElement("p");
    productDescription.textContent = product.beskrivning;

    let productCategories = document.createElement("p");
    productCategories.textContent = "Categories: " + product.kategorier.join(", ");

    let productPrice = document.createElement("p");
    productPrice.classList.add("price");
    productPrice.textContent = `$${product.pris.toFixed(2)}`;

    productCard.append(productName);
    productCard.append(productDescription);
    productCard.append(productCategories);
    productCard.append(productPrice);

    productContainer.append(productCard);
  });
}

// createProductCard(productList);
