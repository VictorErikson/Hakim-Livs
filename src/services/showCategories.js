import { sortProducts } from "./sortProducts.js";


export  async function showCategories(productsPromise) {
    const products = await productsPromise;

    const categoryContainer = document.querySelector('#categoryContainer');
    if (!categoryContainer) return;

    const uniqueCategories = [
        ...new Set(products.flatMap(product => product.categories)),
    ];

    uniqueCategories.forEach(category => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = category;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            sortProducts(category);
        });
        
        li.appendChild(link);
        categoryContainer.appendChild(li);
    });
}