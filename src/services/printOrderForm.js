import { printOrder } from "./printOrder.js";

export function printOrderForm() {
  document.querySelector("#cartDiv").style.display = "none";

  const container = document.querySelector("body");

  const formArea = document.createElement("div");
  formArea.id = "formArea";

  const order = printOrder();

  if (!order) {
    return;
  }
  const formContainer = document.createElement("div");
  formContainer.id = "formContainer";
  const form = document.createElement("form");
  form.classList.add("userForm");
  const background = document.createElement("div");
  background.classList.add("background");
  const productsOrderCont = document.createElement("div");
  productsOrderCont.classList.add("productsOrderCont");

  const obligatoriskt = document.createElement("p");
  obligatoriskt.classList.add("obligatoriskt");
  obligatoriskt.innerText = "Fält markerade med * är obligatoriska.";

  const deliveryTitle = document.createElement("h2");
  deliveryTitle.classList.add("deliveryTitle");
  deliveryTitle.innerText = "LEVERANS";

  const sendFormBtn = document.createElement("button");
  sendFormBtn.classList.add("sendFormBtn");
  sendFormBtn.innerText = "Skicka beställning!";

  productsOrderCont.append(order, formContainer);
  background.append(productsOrderCont, sendFormBtn);

  formArea.append(background);
  const fields = [
    {
      label: "Förnamn*",
      className: "firstName",
      placeholder: "Fyll i förnamn",
    },
    {
      label: "Efternamn*",
      className: "lastName",
      placeholder: "Fyll i efternamn",
    },
    {
      label: "Mailadress*",
      className: "email",
      placeholder: "Fyll i mailadress",
    },
    {
      label: "Telefonnummer*",
      className: "phone",
      placeholder: "Fyll i telefonnummer",
    },
    { label: "Hemadress*", className: "address", placeholder: "Fyll i adress" },
    { label: "Ort*", className: "city", placeholder: "Fyll i ort" },
    {
      label: "Postnummer*",
      className: "postalCode",
      placeholder: "Fyll i postnummer",
    },
  ];

  fields.forEach(({ label, className, placeholder }) => {
    const div = document.createElement("div");
    div.classList.add("formGroup");

    const lbl = document.createElement("label");
    lbl.textContent = label;
    lbl.setAttribute("for", className);

    const input = document.createElement("input");
    input.placeholder = placeholder;
    input.maxLength = 20;

    if (label === "Postnummer*") {
      input.type = "number";
    } else if (label === "Telefonnummer*") {
      input.type = "tel";
    } else if (label === "Mailadress*") {
      input.type = "email";
    } else {
      input.type = "text";
      if (label === "Förnamn*" || label === "Efternamn*") {
        input.pattern = "[A-Za-zÅÄÖåäö]+";
        input.title = "Endast bokstäver tillåtna";
      }
    }

    input.className = className;
    input.id = className;
    input.name = className;
    input.required = true;

    div.appendChild(lbl);
    div.appendChild(input);
    form.appendChild(div);
  });

  const formGroupInfoField = document.createElement("div");
  formGroupInfoField.classList.add("formGroup");

  const infoField = document.createElement("textarea");
  infoField.classList.add("infoField");
  infoField.id = "info";
  infoField.name = "info";
  infoField.placeholder = "Lägg till en anteckning";
  infoField.maxLength = 80;

  const charCount = document.createElement("div");
  charCount.id = "charCount";
  charCount.textContent = "0 / 100";

  const lblFormGroup = document.createElement("label");
  lblFormGroup.textContent = "Särskilda instruktioner";
  lblFormGroup.setAttribute("for", "info");

  infoField.addEventListener("input", () => {
    charCount.textContent = `${infoField.value.length} / ${infoField.maxLength}`;
  });

  formGroupInfoField.append(lblFormGroup, infoField, charCount);
  form.append(formGroupInfoField);

  formContainer.append(deliveryTitle, obligatoriskt, form);
  container.append(formArea);
}
