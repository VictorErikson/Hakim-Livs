import { productList } from "../../tempTestData/products.js";
import { addToCart } from "./addToCart.js";

export function createProductCard(products) {
  let productContainer = document.querySelector("#productContainer");

  products.forEach(product => {
    let productCard = document.createElement("div");
    productCard.classList.add("productCard");

    productCard.innerHTML = `
    <div class="productwrap">
      <img src="https://www.vocaleurope.eu/wp-content/uploads/no-image.jpg" class="productImg">
      <p class="bold L">${product.namn.charAt(0).toUpperCase() + product.namn.slice(1)}</p>
      <p>(Amount)</p>
      <p>(Brand)</p>
      <p>Kategorier: ${product.kategorier.map(category => category.namn).join(", ")}</p>
      <p class="bold M">
      ${
        new Intl.NumberFormat('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        minimumFractionDigits: 2,
      }).format(product.pris)
      }
      </p>
    </div>
    <div class="row cartWrap">
      <button class="cartAdd"><img src="assets/logos/basket.svg" alt="Add to Cart"></button>
    </div>
    `;

    let cartAddButton = productCard.querySelector(".cartAdd");

    cartAddButton.addEventListener("click", () => {
      cartAddButton.style.display = "none";
      let quantity = plusMinus();
      productCard.append(quantity);

      let quantityValue = quantity.querySelector(".quantityInput").value;
      addToCart(product, parseInt(quantityValue));

      let currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
      currentCart.push(product);
  
      sessionStorage.setItem("cart", JSON.stringify(currentCart));
    });

    productCard.querySelector(".productwrap").addEventListener("click", () => {
      popUp(product);
    });

    productContainer.append(productCard);

  });
}

function plusMinus() {
  let plusMinusContainer = document.createElement("div");
  plusMinusContainer.classList.add("plusMinusContainer");

  plusMinusContainer.innerHTML = `
  <button class="minus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"></path></svg></button>
  <input type="number" class="quantityInput" value="1" min="1">
  <button class="plus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path></svg></button>
  `;

  plusMinusContainer.querySelector(".minus").addEventListener("click", () => {
    let quantityInput = plusMinusContainer.querySelector(".quantityInput");
    if (parseInt(quantityInput.value) > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });

  plusMinusContainer.querySelector(".plus").addEventListener("click", () => {
    let quantityInput = plusMinusContainer.querySelector(".quantityInput");
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  return plusMinusContainer;
}

function popUp(product) {
  let popupWindow = document.createElement("div");
  popupWindow.classList.add("popup");

  popupWindow.innerHTML = `
    <button class="closePopup"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
      </svg></button>
    <div class="row">
      <img src="https://www.vocaleurope.eu/wp-content/uploads/no-image.jpg" alt="${product.namn}">
      <div class="column">
        <p class="bold L">${product.namn.charAt(0).toUpperCase() + product.namn.slice(1)}</p>
        <p><span>Varumärke</span> | Mängd</p>
        <p class="bold M">
          ${new Intl.NumberFormat('sv-SE', {
            style: 'currency',
            currency: 'SEK',
            minimumFractionDigits: 2,
          }).format(product.pris)}
        </p>
        <div class="cartWrap">
        <button class="cartAdd"><img src="assets/logos/basket.svg" alt="Add to Cart"></button>
        </div>
        <p>Jämförpris: x kr/kg</p>
      </div>
    </div>
    <div class="column productInformation">
      <p class="bold">Produktinformation</p>
      <div class="row">
        <div>
          <p>${product.beskrivning}</p>
        </div>
        <div class="column right">
          <div>
            <p class="bold">Ursprungsland</p>
            <p>land</p>
          </div>
          <div>
            <p class="bold">Leverantör</p>
            <p>...</p>
          </div>
        </div>
      </div>
      <div>
        <p class="bold">Innehållsförteckning</p>
        <p>product innehall</p>
      </div>
    </div>
  `;
  
  popupWindow.querySelector(".cartAdd").addEventListener("click", () => {
    let plusminus = plusMinus();
    popupWindow.querySelector(".cartWrap").innerHTML = "";
    popupWindow.querySelector(".cartWrap").append(plusminus);
    
    let currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    currentCart.push(product);
  
    sessionStorage.setItem("cart", JSON.stringify(currentCart));

  });

  let overlay = document.createElement("div");
  overlay.classList.add("overlay");


  popupWindow.querySelector(".closePopup").addEventListener("click", () => {
    popupWindow.remove();
    overlay.remove();
    document.body.style.overflow = "auto";
  });

  document.body.style.overflow = "hidden";

  document.body.append(overlay);
  document.body.append(popupWindow);
}

//---------------------------

function cartView(){
  let cartDiv = document.createElement("div");
  cartDiv.id = "cartDiv";

  cartDiv.innerHTML = `
  <div id="cartProducts">

    </div>
  <div id="sum">
    <p>SUMMA</p>
    <p>x kr</p>
  </div>
  <button>Till kassan</button>
  <button>Öppna varukorg</button>
  `

  // cartDiv.addEventListener("mouseout",()=>{
  //   cartDiv.style.display = "none";
  // })

  document.querySelector("body > header > nav > ul > li:nth-child(3)").append(cartDiv);
}
cartView();

document.querySelector("a.cart").addEventListener("mouseover",()=>{
  document.querySelector("#cartDiv").style.display = "flex";
})

//----------------------

function cartProduct(product){
  let div = document.createElement("div");
  div.innerHTML = `
  <img src="https://www.vocaleurope.eu/wp-content/uploads/no-image.jpg" width="80px">
  <div>
    <p class="bold L">${product.namn.charAt(0).toUpperCase() + product.namn.slice(1)}</p>
    <p class="bold M">${
      new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
      minimumFractionDigits: 2,
    }).format(product.pris)
    }</p>
    <p>Antal:</p>
    <p>Summa: <span class="bold">x kr</span></p>
  </div>
  `
  document.querySelector("#cartProducts").append(div);
}

let storedCart = JSON.parse(sessionStorage.getItem('cart'));
if(storedCart){
  storedCart.forEach(product=>{
    cartProduct(product);
  })
}