export async function sendOrder(event, form) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log("data: " + JSON.stringify(data, null, 2));

  try {
    const response = await axios.post(
      "https://grupp-11-backend.vercel.app/",
      data
    );
    if (response.ok) {
      const data = await response.json();
      console.log("data:" + data);
      return data;
    } else {
    }
  } catch {
    alert("Ett fel inträffade vid beställning.");
  }

  //   .then((res) => res.json())
  //   .then((response) => {
  //     alert("Beställningen har skickats!");
  //     console.log("Order response:", response);
  //   })
  //   .catch(() => {
  //     alert("Ett fel inträffade vid beställning.");
  //   });
}
