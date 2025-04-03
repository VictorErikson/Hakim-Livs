// services/showProductsAdmin.js
import { deleteItem } from "./admin/deleteItem";

export function showProductsAdmin(products) {
    const container = document.querySelector("#productContainer");
    container.innerHTML = "";
  
    const table = document.createElement("table");
    table.classList.add("adminProductTable");
  
    // Table header
    table.innerHTML = `
      <thead>
        <tr>
          <th>Namn</th>
          <th>Kategori</th>
          <th>Varumärke</th>
          <th>Redigera</th>
          <th>Radera</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
  
    const tbody = table.querySelector("tbody");
  
    products.forEach((product) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${capitalize(product.namn)}</td>
        <td>${formatCategories(product.kategorier)}</td>
       <td>${typeof product.varumarke === "object" ? product.varumarke.namn : product.varumarke || "Saknas"}</td>
        <td><button class="editBtn">Redigera</button></td>
        <td><button class="deleteBtn">Radera</button></td>
      `;

      console.log("Kategorier för", product.namn, ":", product.kategorier);
  
      const deleteBtn = document.querySelector('.deleteBtn');
      deleteBtn.addEventListener('click', () => {
        deleteItem(product.id);
      })
  
      tbody.appendChild(row);
    });
  
    container.appendChild(table);
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
//   function formatCurrency(amount) {
//     return new Intl.NumberFormat("sv-SE", {
//       style: "currency",
//       currency: "SEK",
//       minimumFractionDigits: 2,
//     }).format(amount);
//   }
  
function formatCategories(kategorier) {
    if (Array.isArray(kategorier)) {
      return kategorier.map(k => k.namn).join(", ");
    }
    return kategorier; // Fallback for already-formatted strings
  }
  