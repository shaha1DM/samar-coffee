
let cart = [];

function toggleCart() {
    const drawer = document.getElementById("cartDrawer");
    const backdrop = document.getElementById("cartBackdrop");
    if (!drawer || !backdrop) return;
    drawer.classList.toggle("open");
    backdrop.classList.toggle("open");
}


function renderCart() {
    const countEl = document.getElementById("cartCount");
    const itemsEl = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");
    if (!countEl || !itemsEl || !totalEl) return;

    countEl.textContent = cart.length;

    if (cart.length === 0) {
        itemsEl.innerHTML = '<p class="empty-cart">السلة فارغة حالياً.</p>';
        totalEl.textContent = "0 ر.س";
        return;
    }

    let total = 0;
    itemsEl.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;
        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">${item.price} ر.س</span>
            </div>
            <button type="button" class="remove-btn" onclick="removeFromCart(${index})">حذف</button>
        `;
        itemsEl.appendChild(row);
    });

    totalEl.textContent = total + " ر.س";
}


function orderCoffee(coffeeName, price = 65) {
    cart.push({ name: coffeeName, price: Number(price) });
    renderCart();
    const drawer = document.getElementById("cartDrawer");
    const backdrop = document.getElementById("cartBackdrop");
    if (drawer && backdrop) {
        drawer.classList.add("open");
        backdrop.classList.add("open");
    }
}


function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}


function checkoutCart() {
    if (cart.length === 0) {
        alert("السلة فارغة، أضف محصولاً أولاً.");
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert("تم تأكيد طلبك (" + cart.length + " منتجات) بإجمالي " + total + " ر.س. شكراً لاختيارك محمصة سَمر ☕");
    cart = [];
    renderCart();
    toggleCart();
}


function showTip() {
    const tipElement = document.getElementById("barista-tip");
    tipElement.textContent = "💡 نصيحة اليوم: استخدم ماء بدرجة حرارة 92 مئوية لاستخلاص مثالي يبرز حلاوة القهوة.";
}


const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const feedback = document.getElementById("formFeedback");
        feedback.textContent = "شكراً لك يا " + name + "، تم استلام رسالتك وسنتواصل معك قريباً!";
        contactForm.reset();
    });
}