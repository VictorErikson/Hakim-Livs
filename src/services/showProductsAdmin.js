// services/showProductsAdmin.js
import { deleteItem } from "./admin/deleteItem.js";

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
  
    const deleteBtn = row.querySelector('.deleteBtn');
    const editBtn = row.querySelector('.editBtn');

        //DELETE
      deleteBtn.addEventListener('click', () => {
        console.log(product._id);
        deleteItem(product._id, product.namn);
      });
      //EDIT
      editBtn.addEventListener('click', () => {
        const form = document.getElementById('addProductsForm');
        form.style.display = 'flex';

        document.getElementById("name").value = product.namn;
        document.getElementById("info").value = product.beskrivning;
        document.getElementById("price").value = product.pris;
        document.getElementById("category").value = Array.isArray(product.kategorier) 
          ? product.kategorier.join(", ") 
          : product.kategorier;
        document.getElementById("ammount").value = product.mängd;
        document.getElementById("brand").value = product.varumärke || product.varumarke || "";
        document.getElementById("content").value = product.innehållsförteckning;
        document.getElementById("compare").value = product.jämförelsepris
  ? parseFloat(product.jämförelsepris.replace(" kr/kg", "").replace(",", "."))
  : "";
        document.getElementById("supplier").value = product.leverantör;

        console.log("Editing product:", product);
        
        sessionStorage.setItem('editProductId', product._id);

        //update button to show edit mode
        document.querySelector('.submitBtnDiv button').textContent = 'Spara ändringar';
        console.log(`Redigerar: ${product.namn}`);
      });
  
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
  