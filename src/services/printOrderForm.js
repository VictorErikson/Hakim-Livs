export function printOrderForm () {

    const container = document.querySelector("body");
    
    const formArea = document.createElement("div");
    formArea.id = "formArea";

    const formContainer = document.createElement("div");
    formContainer.id = "formContainer";
    const form = document.createElement("form");
    form.classList.add("userForm");
  
    formArea.append(formContainer)
    const fields = [
      { label: "Förnamn*", className: "firstName", placeholder: "Fyll i förnamn"},
      { label: "Efternamn*", className: "lastName", placeholder: "Fyll i efternamn" },
      { label: "Mailadress*", className: "email", placeholder: "Fyll i mailadress" },
      { label: "Telefonnummer*", className: "phone", placeholder: "Fyll i telefonnummer" },
      { label: "Hemadress*", className: "address", placeholder: "Fyll i adress" },
      { label: "Ort*", className: "city", placeholder: "Fyll i ort" },
      { label: "Postnummer*", className: "postalCode", placeholder: "Fyll i postnummer"},
    ];
  
    fields.forEach(({ label, className, placeholder }) => {
      const div = document.createElement("div");
      div.classList.add("formGroup");
  
      const lbl = document.createElement("label");
      lbl.textContent = label;
      lbl.setAttribute("for", className);
  
      const input = document.createElement("input");
      input.placeholder = placeholder;

      label === "Postnummer" ? input.type = "number" || "phone" : input.type = "text";
      
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
    
    const lblFormGroup = document.createElement("label");
    lblFormGroup.textContent = "Särskilda instruktioner";
    lblFormGroup.setAttribute("for", "info");

    formGroupInfoField.append(lblFormGroup, infoField);
    form.append(formGroupInfoField);

    const sendFormBtn = document.createElement("button");
    sendFormBtn.classList.add("sendFormBtn");
    sendFormBtn.innerText = "Skicka beställning!"

    formContainer.append(form, sendFormBtn);
    container.append(formArea);
}

