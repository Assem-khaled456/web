const AddToCart = document.querySelectorAll(".add_to_cart");
const CartItems = document.querySelector(".cart-items");


// ÅÖÇİÉ ÚäÇÕÑ Åáì ÇáÚÑÈÉ ãÚ ÇáÊÍŞŞ ãä ÇáÊßÑÇÑ
AddToCart.forEach((button) => {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        const title = button.getAttribute("data-title");
        const image = button.getAttribute("data-image");
        const price = button.getAttribute("data-price");

        const cartItem = { id, title, image, price };
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // ÇáÊÍŞŞ ãä æÌæÏ ÇáãäÊÌ ãÓÈŞğÇ
        const itemExists = cart.some(item => item.id === id);
        if (!itemExists) {
            cart.push(cartItem);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Item added to cart!");
            displayCartItems(); // ÅÚÇÏÉ ÚÑÖ ÇáÚäÇÕÑ
        } else {
            alert("Item already in cart!");
        }
    });
});

// æÙíİÉ ÍĞİ ÚäÕÑ ãä ÇáÚÑÈÉ
function deleteCartItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // ÍĞİ ÇáÚäÕÑ
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems(); // ÅÚÇÏÉ ÊÍÏíË ÇáŞÇÆãÉ
}

// ÚÑÖ ÚäÇÕÑ ÇáÚÑÈÉ ãÚ ÒÑ ÇáÍĞİ æÍÓÇÈ ÇáÅÌãÇáí
function displayCartItems() {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    CartItems.innerHTML = ""; // ÊäÙíİ ÇáãÍÊæì ÇáÓÇÈŞ

    // ÇáÊÍŞŞ ãä æÌæÏ ÚäÇÕÑ İí ÇáÚÑÈÉ
    if (items.length === 0) {
        CartItems.innerHTML = `<p class="cart_empty">Your cart is empty</p>`;
        return;
    }

    let cartTotal = 0; // ãÊÛíÑ áÍÓÇÈ ÇáÅÌãÇáí

    items.forEach((item, index) => {
        cartTotal += parseFloat(item.price); // ÍÓÇÈ ÇáÅÌãÇáí

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

        // ÅÖÇİÉ æÙíİÉ ÒÑ ÇáÍĞİ
        cartItem.querySelector(".cart_delete").addEventListener("click", () => {
            deleteCartItem(index);
        });
    });

    // ÚÑÖ ÇáÓÚÑ ÇáÅÌãÇáí
    const totalElement = document.createElement("div");
    totalElement.className = "cart_total";
    totalElement.innerHTML = `<p>Total Price: $${cartTotal.toFixed(2)}</p>`;
    CartItems.appendChild(totalElement);
}

// ÇÓÊÏÚÇÁ æÙíİÉ ÇáÚÑÖ ÚäÏ ÊÍãíá ÇáÕİÍÉ
displayCartItems();
