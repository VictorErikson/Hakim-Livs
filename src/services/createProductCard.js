// products.js
export function createProductCard(products) {
  let productContainer = document.querySelector("#productContainer");

  products.forEach(product => {
    let productCard = document.createElement("div");
    productCard.classList.add("productCard");

    let productName = document.createElement("h2");
    productName.textContent = product.name;

    let productDescription = document.createElement("p");
    productDescription.textContent = product.description;

    let productCategories = document.createElement("p");
    productCategories.textContent = "Categories: " + product.categories.join(", ");

    let productPrice = document.createElement("p");
    productPrice.classList.add("price");
    productPrice.textContent = `$${product.price.toFixed(2)}`;

    productCard.append(productName);
    productCard.append(productDescription);
    productCard.append(productCategories);
    productCard.append(productPrice);

    productContainer.append(productCard);
  });
}
