

export const addToCart = (userId, product) => {
    const cartKey = `cart_${userId}`
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    cart.push(product); 
    localStorage.setItem(cartKey, JSON.stringify(cart))
} 