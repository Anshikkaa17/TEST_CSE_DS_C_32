
const basePrice = 96.99;


function updateTotalPrice() {
    const quantityInput = document.getElementById('quantity').value;
    const totalPrice = (quantityInput * basePrice).toFixed(2); 
    document.getElementById('total-price').textContent = `Total Price: $${totalPrice}`; 
}


document.getElementById('quantity').addEventListener('input', updateTotalPrice);


function addToCart() {
    const quantity = document.getElementById('quantity').value;
    const totalPrice = (quantity * basePrice).toFixed(2);

    
    alert(`You added ${quantity} item(s) to your cart. Total price: $${totalPrice}`);
}
