import { fetchProducts } from "../utils/api.js";
import { showProductsAdmin } from "../services/showProductsAdmin.js";
import { productList } from "../../tempTestData/products.js";


export let products;

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();

  const toggleFormBtn = document.getElementById('showFormBtn');
  const form = document.getElementById('addProductsForm');

  toggleFormBtn.addEventListener('click', () => {
    const isVisible = form.style.display === 'flex';
    form.style.display = isVisible ? 'none' : 'flex';
    toggleFormBtn.textContent = isVisible ? 'Lägg till Produkt' : 'Göm formulär';
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const productData = {
        namn: document.getElementById("name").value,
        beskrivning: document.getElementById("info").value,
        pris: parseFloat(document.getElementById("price").value),
        kategorier: document.getElementById("category").value.split(",").map(k => k.trim()),
        mängd: document.getElementById("ammount").value,
        varumärke: document.getElementById("brand").value,
        innehållsförteckning: document.getElementById("content").value,
        jämförelsepris: `${document.getElementById("compare").value} kr/kg`,
        leverantör: document.getElementById("supplier").value,
        bild: document.getElementById("image").value
      };    

    try {
    const url = "https://grupp-11-backend.vercel.app/api/products";

    const response = await axios.post(url, productData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      });

      console.log("Produkt tillagd:", response.data);
      loadProducts();
      form.reset();
      form.style.display = "none";
      toggleFormBtn.textContent = "Lägg till Produkt";
    } catch (error) {
      console.error("Misslyckades med att lägga till produkt:", error);
    }
  });
});

async function loadProducts() {
  const container = document.getElementById('productContainer');
  container.innerHTML = '<p>Loading products...</p>';

  try {
    // products = await fetchProducts();
    products = productList;

    container.innerHTML = '';

    if (products.length > 0) {
      showProductsAdmin(products);

      document.querySelectorAll('.productCard').forEach(card => {
        const editBtn = document.createElement('button');
        editBtn.innerText = 'Redigera';
        editBtn.classList.add('editBtn');

        editBtn.addEventListener('click', () => {
          console.log('Redigera Produkt');
        });

        card.appendChild(editBtn);
      });
    } else {
      container.innerHTML = '<p>No products found.</p>'
    }
  } catch (error) {
    console.error('Failed to load products:', error);
    container.innerHTML = '<p>Error loading products.</p>'
  }
}
