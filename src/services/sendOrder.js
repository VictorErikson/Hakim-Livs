export async function sendOrder(event, form) {
  event.preventDefault();

  const products = JSON.parse(sessionStorage.getItem("cart") || "[]");

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  let totalSum = 0;
  products.forEach((product) => {
    totalSum += product.pris * product.amount;
  });

  const produkter = products.map((product) => ({
    produktId: product.id,
    antal: product.amount,
  }));

  const payload = {
    produkter,
    totalsumma: totalSum,
    förnamn: data.namn,
    efternamn: data.efternamn,
    gatuadress: data.adress,
    postnr: data.postnummer,
    postort: data.stad,
    mobil: data.tele,
    mejl: data.email,
    anmärkning: data.info,
  };

  console.log(payload);

  try {
    const response = await axios.post(
      "https://grupp-11-backend.vercel.app/api/orders",
      JSON.stringify(payload),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    alert("Ett fel inträffade vid beställning.");
    console.error(error);
  }
}
