const AddToCart = document.querySelectorAll(".add_to_cart");
const CartItems = document.querySelector(".cart-items");


// ����� ����� ��� ������ �� ������ �� �������
AddToCart.forEach((button) => {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        const title = button.getAttribute("data-title");
        const image = button.getAttribute("data-image");
        const price = button.getAttribute("data-price");

        const cartItem = { id, title, image, price };
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // ������ �� ���� ������ ������
        const itemExists = cart.some(item => item.id === id);
        if (!itemExists) {
            cart.push(cartItem);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Item added to cart!");
            displayCartItems(); // ����� ��� �������
        } else {
            alert("Item already in cart!");
        }
    });
});

// ����� ��� ���� �� ������
function deleteCartItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // ��� ������
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems(); // ����� ����� �������
}

// ��� ����� ������ �� �� ����� ����� ��������
function displayCartItems() {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    CartItems.innerHTML = ""; // ����� ������� ������

    // ������ �� ���� ����� �� ������
    if (items.length === 0) {
        CartItems.innerHTML = `<p class="cart_empty">Your cart is empty</p>`;
        return;
    }

    let cartTotal = 0; // ����� ����� ��������

    items.forEach((item, index) => {
        cartTotal += parseFloat(item.price); // ���� ��������

        const cartItem = document.createElement("div");
        cartItem.className = "cart_item";
        cartItem.innerHTML = `
            <p class="cart_id">${item.id}</p>
            <p class="cart_title">${item.title}</p>
            <img src="${item.image}" alt="${item.title}" class="cart_img" />
            <p class="cart_price">$${item.price}</p>
            <button class="cart_delete" style="cursor:pointer">Delete</button>
        `;
        CartItems.appendChild(cartItem);

        // ����� ����� �� �����
        cartItem.querySelector(".cart_delete").addEventListener("click", () => {
            deleteCartItem(index);
        });
    });

    // ��� ����� ��������
    const totalElement = document.createElement("div");
    totalElement.className = "cart_total";
    totalElement.innerHTML = `<p>Total Price: $${cartTotal.toFixed(2)}</p>`;
    CartItems.appendChild(totalElement);
}

// ������� ����� ����� ��� ����� ������
displayCartItems();
