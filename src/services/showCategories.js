import { sortProducts } from "./sortProducts.js";


// export  async function showCategories(productsPromise) {
export  async function showCategories(products) {
    // const products = await productsPromise;

    const categoryContainer = document.querySelector('#categoryContainer');
    if (!categoryContainer) return;

    const uniqueCategories = [
        ...new Set(products.flatMap(product => product.kategorier)),
    ];

    uniqueCategories.forEach(category => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = category.namn;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            sortProducts(category.namn);
        });
        
        li.appendChild(link);
        categoryContainer.appendChild(li);
    });
}