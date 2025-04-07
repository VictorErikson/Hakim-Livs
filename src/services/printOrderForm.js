


export function printOrderForm () {

    //Se till att skapa en formContainer
    const container = document.querySelector("#formContainer");
    container.innerHTML = "";
  
    const form = document.createElement("form");
    form.classList.add("userForm");
  
    const fields = [
      { label: "Förnamn", className: "firstName" },
      { label: "Efternamn", className: "lastName" },
      { label: "Mailadress", className: "email" },
      { label: "Telefonnummer", className: "phone" },
      { label: "Hemadress", className: "address" },
      { label: "Ort", className: "city" },
      { label: "Postnummer", className: "postalCode" },
    ];
  
    fields.forEach(({ label, className }) => {
      const div = document.createElement("div");
      div.classList.add("formGroup");
  
      const lbl = document.createElement("label");
      lbl.textContent = label;
      lbl.setAttribute("for", className);
  
      const input = document.createElement("input");

      label === "Postnummer" ? input.type = "number" || "phone" : input.type = "text";
      
      input.className = className;
      input.id = className;
      input.name = className;
  
      div.appendChild(lbl);
      div.appendChild(input);
      form.appendChild(div);
    });
  
    container.appendChild(form);
}