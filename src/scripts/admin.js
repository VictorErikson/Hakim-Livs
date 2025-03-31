import { fetchProducts } from "../utils/api.js";
import { createProductCard } from "../services/createProductCard.js";
import { productList } from "../../tempTestData/products.js";

export let products;

document.addEventListener("DOMContentLoaded", () => {
    loadProducts(); // or await loadProducts() if it's async
  
    const toggleFormBtn = document.getElementById('showFormBtn');
    const form = document.getElementById('addProductsForm');
  
    toggleFormBtn.addEventListener('click', () => {
      const isVisible = form.style.display === 'flex';
      form.style.display = isVisible ? 'none' : 'flex';
      toggleFormBtn.textContent = isVisible ? 'Lägg till Produkt' : 'Göm formulär';
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
            createProductCard(products);
            //remove add to cart btn for admin
            document.querySelectorAll('.cartAdd').forEach(button => {
                button.remove();
            });

            //add edit button to each productCard
            document.querySelectorAll('.productCard').forEach(card => {
                const editBtn = document.createElement('button');
                editBtn.innerText = 'Redigera';
                editBtn.classList.add('editBtn');

                //funktionalitet sen för edit knappen
                editBtn.addEventListener('click', () => {
                    console.log('Redigera Produkt');
                });

                card.appendChild(editBtn);
            });
        }else {
            container.innerHTML = '<p>No products found.</p>'
        }
    } catch (error) {
        console.error('Failed to load products:', error);
        container.innerHTML = '<p>Error loading products.</p>'
    }
}
