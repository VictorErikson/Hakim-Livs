import { sortProducts } from "./sortProducts.js";


// export  async function showCategories(productsPromise) {
export  async function showCategories(products) {
    // const products = await productsPromise;

    const categoryContainer = document.querySelector('#categoryContainer');
    if (!categoryContainer) return;

    //products is an array of product objects
    //each product has a key 'kategorier' which is an array of categories
    //.flatMap() goes through each product and collects all the categories into
    //one single flat array. EXAMPLE:
//     [{ kategorier: [a, b] }, { kategorier: [b, c] }]
// → flatMap → [a, b, b, c]

// A set is a special object that only stores unique values
// so by wrapping the array from flatMap in new Set() we automatically remove duplicates
// ... (spread operator) converts the set back into a normal Arr so we can loop over it later. otherwise doesnt work as well with forEach
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