let cart = [];
function addToCart(name, price) {

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}


function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}


function updateCart() {

    const cartList = document.getElementById("cartList");
    const totalPrice = document.getElementById("totalPrice");

    cartList.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        const li = document.createElement("li");
        li.classList.add("cart-item");

        li.innerHTML = `
            ${item.name} - Rs ${item.price} x ${item.quantity}
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;

        cartList.appendChild(li);
    });

    totalPrice.textContent = "Total Price: Rs " + total;
}