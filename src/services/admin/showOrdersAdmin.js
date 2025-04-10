// // services/showProductsAdmin.js
// import { deleteOrder } from "./deleteOrder.js";

// export function showOrdersAdmin(orders) {
//   const container = document.querySelector("#productContainer");
//   const showingProductCont = document.querySelector("#showingProductCont");
//   container.innerHTML = "";

//   const table = document.createElement("table");
//   table.classList.add("adminProductTable");

//   // Table header
//   table.innerHTML = `
//       <thead>
//         <tr>
//           <th>Status</th>
//           <th>Id</th>
//           <th>Kundnamn</th>
//           <th>Totalpris</th>
//           <th></th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody></tbody>
//     `;
//   const tbody = table.querySelector("tbody");

//   //   const sortedProducts = orders
//   //     .slice()
//   //     .sort((a, b) => a.namn.localeCompare(b.namn));
//   orders.forEach((order) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//         <td><select id="statusSelect">
//                 <option value="ny">Ny</option>
//                 <option value="betald">Betald</option>
//                 <option value="packas">Packas</option>
//                 <option value="levererad">Levererad</option>
//             </select></td>
//         <td>${order._id}</td>
//         <td>${capitalize(order.fornamn)} ${capitalize(order.efternamn)}</td>
//         <td>${order.totalsumma}</td>
//         <td><button class="show">Visa</button></td>
//         <td><button class="deleteBtn">Radera</button></td>
//       `;

//     const deleteBtn = row.querySelector(".deleteBtn");
//     const showBtn = row.querySelector(".show");

//     //DELETE
//     deleteBtn.addEventListener("click", () => {
//       deleteOrder(order._id, order.fornamn);
//     });

//     //VISA

//     showBtn.addEventListener("click", () => {
//       showingProductCont.innerHTML = "";

//       const productsContainer = document.createElement("div");
//       productsContainer.classList.add("productsContainer");
//       const ul = document.createElement("ul");

//       const heading = document.createElement("h2");
//       heading.innerText = `PRODUKTER`;
//       heading.classList.add("orderHeading");

//       let sumProducts = 0;
//       const products = order.produkter;

//       const priceDiv = document.createElement("div");
//       priceDiv.classList.add("priceDiv");

//       let sumCont = document.createElement("div");
//       sumCont.classList.add("sumCont");
//       let sumTitle = document.createElement("p");
//       sumTitle.classList.add("sumTitle");
//       sumTitle.innerText = "Summa varor";
//       let sum = document.createElement("p");
//       sum.classList.add("sum");
//       //   sum.innerText = `${sumProducts.toFixed(2)} kr`;
//       sumCont.append(sumTitle, sum);

//       let deliverCont = document.createElement("div");
//       deliverCont.classList.add("deliverCont");
//       let deliverTitle = document.createElement("p");
//       deliverTitle.classList.add("deliverTitle");
//       deliverTitle.innerText = "Leverans";
//       let deliver = document.createElement("p");
//       deliver.classList.add("deliver");
//       deliver.innerText = `59 kr`;
//       deliverCont.append(deliverTitle, deliver);

//       //   let totalPriceSum = (sumProducts + 59) * 1.12;
//       let totalCont = document.createElement("div");
//       totalCont.classList.add("totalCont");
//       let totalTitle = document.createElement("p");
//       totalTitle.classList.add("totalPrice");
//       totalTitle.innerText = `Totalsumma: `;
//       let total = document.createElement("p");
//       total.classList.add("total");
//       //   total.innerText = `${totalPriceSum.toFixed(2)} kr`;
//       totalCont.append(totalTitle, total);

//       let momsCont = document.createElement("div");
//       momsCont.classList.add("momsCont");
//       let momsTitle = document.createElement("p");
//       momsTitle.classList.add("momsTitle");
//       momsTitle.innerText = "Moms (12%)";
//       let moms = document.createElement("p");
//       moms.classList.add("moms");
//       //   moms.innerText = `${((sumProducts + 59) * 0.12).toFixed(2)} kr`;
//       momsCont.append(momsTitle, moms);

//       const customerInfo = document.createElement("div");
//       customerInfo.classList.add("customerInfo");

//       //   products.forEach((product) => {
//       //     const fetchedProduct = async () => {
//       //       try {
//       //         products = await fetchProducts(`api/products/${produktId}/`);
//       //         console.log("products: ", products);
//       //         return products;
//       //       } catch {
//       //         console.error("Failed to load products:");
//       //         container.innerHTML = "<p>Error loading products.</p>";
//       //       }
//       //     };
//       //     const li = document.createElement("li");
//       //     const div = document.createElement("div");
//       //     li.append(div);
//       //     const title = document.createElement("p");
//       //     title.classList.add("title");
//       //     title.innerText = `${product.antal}st ${fetchedProduct.namn}`;
//       //     // title.style.fontWeight = "bold";
//       //     const price = document.createElement("p");
//       //     price.classList.add("price");
//       //     price.innerText = `${fetchedProduct.pris} kr`;
//       //     div.append(title, price);

//       //     sumProducts += fetchedProduct.pris * product.antal;
//       //     li.classList.add(`product`);
//       //     ul.append(li);
//       //   });
//       (async () => {
//         for (const product of products) {
//           try {
//             const fetchedProduct = await fetchProducts(
//               `api/products/${product.produktId}/`
//             );

//             const li = document.createElement("li");
//             const div = document.createElement("div");
//             li.append(div);
//             const title = document.createElement("p");
//             title.classList.add("title");
//             title.innerText = `${product.antal}st ${fetchedProduct.namn}`;
//             const price = document.createElement("p");
//             price.classList.add("price");
//             price.innerText = `${fetchedProduct.pris} kr`;
//             div.append(title, price);

//             sumProducts += fetchedProduct.pris * product.antal;
//             li.classList.add(`product`);
//             ul.append(li);
//           } catch (err) {
//             console.error("Failed to load product:", err);
//             container.innerHTML = "<p>Error loading products.</p>";
//             return;
//           }
//         }

//         sum.innerText = `${sumProducts.toFixed(2)} kr`;
//         let totalPriceSum = (sumProducts + 59) * 1.12;
//         total.innerText = `${totalPriceSum.toFixed(2)} kr`;
//         moms.innerText = `${((sumProducts + 59) * 0.12).toFixed(2)} kr`;

//         priceDiv.append(sumCont, deliverCont, totalCont, momsCont);
//         productsContainer.append(heading, ul, priceDiv);
//         showingProductCont.append(productsContainer, customerInfo);
//       })();

//       //   priceDiv.append(sumCont, deliverCont, totalCont, momsCont);
//       //   productsContainer.append(heading, ul, priceDiv);

//       const headingCustomer = document.createElement("h2");
//       headingCustomer.innerText = `KUNDINFO`;
//       headingCustomer.classList.add("headingCustomer");

//       const name = document.createElement("p");
//       name.classList.add("name");
//       name.innerText = `${capitalize(order.fornamn)} ${capitalize(
//         order.efternamn
//       )}`;

//       const adress = document.createElement("p");
//       adress.classList.add("adress");
//       adress.innerText = `${capitalize(order.gatuadress)}, ${capitalize(
//         order.postnr
//       )}, ${capitalize(order.postort)}`;

//       const phone = document.createElement("p");
//       phone.classList.add("phone");
//       phone.innerText = `Telefonnummer: ${order.mobil}`;

//       const email = document.createElement("p");
//       email.classList.add("email");
//       email.innerText = `E-post: ${order.mejl}`;

//       const note = document.createElement("p");
//       note.classList.add("note");
//       note.innerText = `Anmärkning: ${order.anmarkning}`;

//       customerInfo.append(headingCustomer, name, adress, phone, email, note);
//       //   showingProductCont.append(productsContainer, customerInfo);
//     });
//     tbody.appendChild(row);
//   });

//   container.appendChild(table);
// }

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// services/showProductsAdmin.js
import { deleteOrder } from "./deleteOrder.js";
import { fetchProducts } from "../../utils/api.js";
import { fetchOrders } from "../fetchOrders.js";

export function showOrdersAdmin(orders) {
  const container = document.querySelector("#productContainer");
  const showingProductCont = document.querySelector("#showingProductCont");
  container.innerHTML = "";

  const table = document.createElement("table");
  table.classList.add("adminProductTable");

  table.innerHTML = `
    <thead>
      <tr>
        <th>Status</th>
        <th>Id</th>
        <th>Kundnamn</th>
        <th>Totalpris</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");

  orders.forEach((order) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><select class="statusSelect">
              <option value="ny">Ny</option>
              <option value="betald">Betald</option>
              <option value="plockas">Plockas</option>
              <option value="plockad">Plockad</option>
              <option value="levererad">Levererad</option>
          </select></td>
      <td>${order._id}</td>
      <td>${capitalize(order.fornamn)} ${capitalize(order.efternamn)}</td>
      <td>${order.totalsumma.toFixed(2)}</td>
      <td><button class="show">Visa</button></td>
      <td><button class="deleteBtn">Radera</button></td>
    `;

    const deleteBtn = row.querySelector(".deleteBtn");
    const showBtn = row.querySelector(".show");

    deleteBtn.addEventListener("click", () => {
      deleteOrder(order._id, order.fornamn);
    });

    const statusSelect = row.querySelector(".statusSelect");

    if (order.status) {
      statusSelect.value = order.status;
    }

    statusSelect.addEventListener("change", async () => {
      const newStatus = statusSelect.value;
      try {
        await axios.patch(
          `https://grupp-11-backend.vercel.app/api/orders/${order._id}`,
          { status: newStatus },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            },
          }
        );
        const newOrders = await fetchOrders();
        showOrdersAdmin(newOrders);
        console.log(`Order ${order._id} updated to ${newStatus}`);
      } catch (err) {
        console.error("Failed to update status:", err);
        statusSelect.value = order.status;
        alert("Kunde inte uppdatera orderstatus.");
      }
    });

    showBtn.addEventListener("click", () => {
      showingProductCont.innerHTML = "";

      const productsContainer = document.createElement("div");
      productsContainer.classList.add("productsContainer");
      const ul = document.createElement("ul");

      const heading = document.createElement("h2");
      heading.innerText = `PRODUKTER`;
      heading.classList.add("orderHeading");

      let sumProducts = 0;
      const products = order.produkter;

      const priceDiv = document.createElement("div");
      priceDiv.classList.add("priceDiv");

      const sumCont = document.createElement("div");
      sumCont.classList.add("sumCont");
      const sumTitle = document.createElement("p");
      sumTitle.classList.add("sumTitle");
      sumTitle.innerText = "Summa varor";
      const sum = document.createElement("p");
      sum.classList.add("sum");
      sumCont.append(sumTitle, sum);

      const deliverCont = document.createElement("div");
      deliverCont.classList.add("deliverCont");
      const deliverTitle = document.createElement("p");
      deliverTitle.classList.add("deliverTitle");
      deliverTitle.innerText = "Leverans";
      const deliver = document.createElement("p");
      deliver.classList.add("deliver");
      deliver.innerText = `59 kr`;
      deliverCont.append(deliverTitle, deliver);

      const totalCont = document.createElement("div");
      totalCont.classList.add("totalCont");
      const totalTitle = document.createElement("p");
      totalTitle.classList.add("totalPrice");
      totalTitle.innerText = `Totalsumma: `;
      const total = document.createElement("p");
      total.classList.add("total");
      totalCont.append(totalTitle, total);

      const momsCont = document.createElement("div");
      momsCont.classList.add("momsCont");
      const momsTitle = document.createElement("p");
      momsTitle.classList.add("momsTitle");
      momsTitle.innerText = "Moms (12%)";
      const moms = document.createElement("p");
      moms.classList.add("moms");
      momsCont.append(momsTitle, moms);

      (async () => {
        for (const product of products) {
          try {
            console.log("product in for of func: ", product);
            console.log("productId in for of func: ", product.produktId);
            const fetchedProduct = await fetchProducts(
              `api/products/${product.produktId}/`
            );

            const li = document.createElement("li");
            const div = document.createElement("div");
            li.append(div);

            const title = document.createElement("p");
            title.classList.add("title");
            title.innerText = `${product.antal}st ${fetchedProduct.namn}`;

            const price = document.createElement("p");
            price.classList.add("price");
            price.innerText = `${fetchedProduct.pris} kr`;

            div.append(title, price);
            sumProducts += fetchedProduct.pris * product.antal;
            li.classList.add("product");
            ul.append(li);
          } catch (err) {
            console.error("Failed to load product:", err);
            container.innerHTML = "<p>Error loading products.</p>";
            return;
          }
        }

        sum.innerText = `${sumProducts.toFixed(2)} kr`;
        const totalPriceSum = (sumProducts + 59) * 1.12;
        total.innerText = `${totalPriceSum.toFixed(2)} kr`;
        moms.innerText = `${((sumProducts + 59) * 0.12).toFixed(2)} kr`;

        priceDiv.append(sumCont, deliverCont, totalCont, momsCont);
        productsContainer.append(heading, ul, priceDiv);

        const customerInfo = document.createElement("div");
        customerInfo.classList.add("customerInfo");

        const headingCustomer = document.createElement("h2");
        headingCustomer.innerText = `KUNDINFO`;
        headingCustomer.classList.add("headingCustomer");

        const name = document.createElement("p");
        name.classList.add("name");
        name.innerText = `${capitalize(order.fornamn)} ${capitalize(
          order.efternamn
        )}`;

        const adress = document.createElement("p");
        adress.classList.add("adress");
        adress.innerText = `${capitalize(order.gatuadress)}, ${capitalize(
          order.postnr
        )}, ${capitalize(order.postort)}`;

        const phone = document.createElement("p");
        phone.classList.add("phone");
        phone.innerText = `Telefonnummer: ${order.mobil}`;

        const email = document.createElement("p");
        email.classList.add("email");
        email.innerText = `E-post: ${order.mejl}`;

        const note = document.createElement("p");
        note.classList.add("note");
        note.innerText = `Anmärkning: ${order.anmarkning}`;

        customerInfo.append(headingCustomer, name, adress, phone, email, note);
        showingProductCont.append(productsContainer, customerInfo);
      })();
    });

    tbody.appendChild(row);
  });

  container.appendChild(table);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
