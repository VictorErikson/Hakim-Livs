export const addToCart = (userId, product) => {
    const cartKey = `cart_${userId}`
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    cart.push(product); 
    localStorage.setItem(cartKey, JSON.stringify(cart))
} 
//Function to show price in basket
let totalPricePrint = document.querySelector(".price");

// export const countTotalPrice = (userId) => {
export const countTotalPrice = () => {
  const cartItems = JSON.parse(localStorage.getItem(cart)) || []; 
//   const cart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || []; 
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice = totalPrice + item.price;
  });
  totalPricePrint.innerText = totalPrice;
}

// export const addToCart = (userId, product) => {
// export const addToCart = (product) => {
//     // const cartKey = `cart_${userId}`
//     const cartItems = JSON.parse(localStorage.getItem(cart)) || [];
//     cartItems.push(product); 
//     localStorage.setItem(cart, JSON.stringify(cartItems))
//     // localStorage.setItem(cartKey, JSON.stringify(cart))

//     // countTotalPrice(userId);
// } 

//Cart to session storage
