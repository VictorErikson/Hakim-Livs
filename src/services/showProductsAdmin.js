
export function showProductsAdmin(products) {
    const container = document.querySelector("#productContainer");
    container.innerHTML = "";
  
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("productCard");
  
      productCard.innerHTML = `
        <div class="productwrap">
          <img src="${product.bild}" class="productImg">
          <p class="bold L">${capitalize(product.namn)}</p>
          <p>${product.mängd}</p>
          <p>Varumärke: ${product.varumärke}</p>
          <p>Kategorier: ${formatCategories(product.kategorier)}</p>
          <p class="bold M">${formatCurrency(product.pris)}</p>
        </div>
      `;
    
      container.appendChild(productCard);
    });
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function formatCurrency(amount) {
    return new Intl.NumberFormat("sv-SE", {
      style: "currency",
      currency: "SEK",
      minimumFractionDigits: 2,
    }).format(amount);
  }
  
  function formatCategories(kategorier) {
    if (Array.isArray(kategorier)) {
      return kategorier.map(k => k.namn).join(", ");
    }
    return kategorier; // fallback if already string
  }