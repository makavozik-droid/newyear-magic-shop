alert("\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0447\u0443\u0434\u0435\u0441 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E \u2728");
// 📦 Список чудес (поки що з картинками з інтернету для тесту)
const products = [
    {
        id: 1,
        name: "\u041C\u0410\u0413\u0406\u0427\u041D\u0418\u0419 \u0427\u0410\u0421",
        price: 50,
        img: "https://i.pinimg.com/736x/81/85/3e/81853e85a88afed921dbb26d882bbca5.jpg",
        desc: "\u0424\u043B\u0430\u043A\u043E\u043D \u0437 \u043C\u0430\u0433\u0456\u0454\u044E, \u0449\u043E \xab\u0437\u0430\u043C\u043E\u0440\u043E\u0436\u0443\u0454\xbb \u043E\u0434\u043D\u0443 \u0445\u0432\u0438\u043B\u0438\u043D\u0443 \u0456 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u043D\u0430\u0441\u043E\u043B\u043E\u0434\u0438\u0442\u0438\u0441\u044F \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0438\u043C \u043C\u043E\u043C\u0435\u043D\u0442\u043E\u043C \u0431\u0435\u0437 \u043F\u043E\u0441\u043F\u0456\u0445\u0443."
    },
    {
        id: 2,
        name: "\u0417\u0406\u0420\u041A\u0410 \u0411\u0410\u0416\u0410\u041D\u042C",
        price: 25,
        img: "https://i.pinimg.com/736x/28/d1/4e/28d14e8ffb9b10433f195a31a77c9766.jpg",
        desc: "\u041F\u0440\u0430\u0432\u043E \u043E\u0431\u0440\u0430\u0442\u0438 \u043D\u0430\u0439\u044F\u0441\u043A\u0440\u0430\u0432\u0456\u0448\u0443 \u0437\u0456\u0440\u043A\u0443 \u043D\u0430 \u043D\u0435\u0431\u0456, \u044F\u043A\u0456\u0439 \u043C\u043E\u0436\u043D\u0430 \u043F\u0440\u043E\u0448\u0435\u043F\u0442\u0430\u0442\u0438 \u043D\u0430\u0439\u043F\u043E\u0442\u0430\u0454\u043C\u043D\u0456\u0448\u0435 \u0431\u0430\u0436\u0430\u043D\u043D\u044F."
    },
    {
        id: 3,
        name: "\u0415\u041B\u0406\u041A\u0421\u0418\u0420 \u0421\u041C\u0406\u041B\u0418\u0412\u041E\u0421\u0422\u0406",
        price: 45,
        img: "https://i.pinimg.com/736x/17/d9/d4/17d9d44adc83df71aa7d85400bc8f4ea.jpg",
        desc: "\u041F\u043B\u044F\u0448\u0435\u0447\u043A\u0430, \u043D\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u0430 \u043C\u0430\u0433\u0456\u0447\u043D\u0438\u043C \u0437\u0456\u043B\u043B\u044F\u043C, \u0449\u043E \u0443\u0441\u0443\u0432\u0430\u0454 \u0441\u0443\u043C\u043D\u0456\u0432\u0438 \u0442\u0430 \u0441\u0442\u0440\u0430\u0445\u0438, \u0434\u0430\u0440\u0443\u044E\u0447\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456\u0441\u0442\u044C \u0443 \u043D\u043E\u0432\u043E\u043C\u0443 \u0440\u043E\u0446\u0456."
    },
    {
        id: 4,
        name: "\u041A\u041B\u042E\u0427 \u0421\u041F\u041E\u0413\u0410\u0414\u0406\u0412",
        price: 30,
        img: "https://i.pinimg.com/736x/ef/bb/18/efbb18ef67e37b627a32b15b46d5582d.jpg",
        desc: "\u0427\u0430\u0440\u0456\u0432\u043D\u0438\u0439 \u043A\u043B\u044E\u0447, \u044F\u043A\u0438\u0439 \u0432\u0456\u0434\u0447\u0438\u043D\u044F\u0454 \u0434\u0432\u0435\u0440\u0456 \u0434\u043E \u043D\u0430\u0439\u0442\u0435\u043F\u043B\u0456\u0448\u0438\u0445 \u0456 \u043D\u0430\u0439\u044F\u0441\u043A\u0440\u0430\u0432\u0456\u0448\u0438\u0445 \u0441\u043F\u043E\u0433\u0430\u0434\u0456\u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0440\u043E\u043A\u0443."
    },
    {
        id: 5,
        name: "\u041C\u0410\u041D\u0422\u0406\u042F \u0414\u041E\u0411\u0420\u041E\u0422\u0418",
        price: 60,
        img: "https://i.pinimg.com/736x/fd/de/df/fddedf03cfd72a7fef256d79f6bb3585.jpg",
        desc: "\u041C\u0430\u043D\u0442\u0456\u044F, \u0449\u043E \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0430\u043D\u043E\u043D\u0456\u043C\u043D\u043E \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0432\u0430\u0442\u0438 \u0434\u043E\u0431\u0440\u0456 \u0441\u043F\u0440\u0430\u0432\u0438 \u0434\u043B\u044F \u0431\u043B\u0438\u0437\u044C\u043A\u0438\u0445 \u0456 \u043D\u0435\u0437\u043D\u0430\u0439\u043E\u043C\u0446\u0456\u0432."
    },
    {
        id: 6,
        name: "\u041A\u0420\u0418\u0428\u0422\u0410\u041B\u0415\u0412\u0410 \u041A\u0423\u041B\u042F \u0429\u0410\u0421\u041B\u0418\u0412\u0418\u0425 \u0421\u041D\u0406\u0412",
        price: 20,
        img: "https://i.pinimg.com/736x/97/46/8b/97468b78d6b1d97669516b023d5bcf6b.jpg",
        desc: "\u041A\u0440\u0438\u0448\u0442\u0430\u043B\u0435\u0432\u0430 \u043A\u0443\u043B\u044F, \u0449\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0454 \u0441\u0432\u0456\u0442\u043B\u0456, \u0441\u043F\u043E\u043A\u0456\u0439\u043D\u0456 \u0442\u0430 \u043D\u0430\u0434\u0438\u0445\u0430\u044E\u0447\u0456 \u0441\u043D\u0438 \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u0432\u044F\u0442."
    },
    {
        id: 7,
        name: "\u0410\u0411\u041E\u041D\u0415\u041C\u0415\u041D\u0422 \u041D\u0410 \xab\u0420\u0406\u0417\u0414\u0412\u042F\u041D\u0418\u0419 \u041F\u041E\u041B\u0406\u0422\xbb",
        price: 35,
        img: "https://i.pinimg.com/736x/64/ef/7a/64ef7a12030e20978f8d6fb94e2db476.jpg",
        desc: "\u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u0430\u0442 \u043D\u0430 \u0443\u044F\u0432\u043D\u0443 \u043F\u043E\u0434\u043E\u0440\u043E\u0436 \u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u043A\u0440\u0430\u0457\u043D\u0443 \u0441\u0432\u0456\u0442\u0443 \u0437\u0430 \u043E\u0434\u043D\u0443 \u043D\u0456\u0447, \u0449\u043E\u0431 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u0441\u0432\u044F\u0442\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0420\u0456\u0437\u0434\u0432\u0430 \u0442\u0430 \u041D\u043E\u0432\u043E\u0433\u043E \u0440\u043E\u043A\u0443."
    },
    {
        id: 8,
        name: "\u0412\u0406\u0422\u0415\u0420 \u041F\u0415\u0420\u0415\u041C\u0406\u041D",
        price: 40,
        img: "https://i.pinimg.com/736x/7c/bb/ae/7cbbaec21d99e8c3f68bacbf00d89a9e.jpg",
        desc: "\u041C\u0430\u0433\u0456\u0447\u043D\u0438\u0439 \u0432\u0456\u0442\u0435\u0440, \u044F\u043A\u0438\u0439 \u0437\u0434\u0443\u0432\u0430\u0454 \u0441\u043C\u0443\u0442\u043E\u043A \u0442\u0430 \u0440\u043E\u0437\u0447\u0430\u0440\u0443\u0432\u0430\u043D\u043D\u044F, \u043E\u0447\u0438\u0449\u0430\u044E\u0447\u0438 \u0448\u043B\u044F\u0445 \u0434\u043B\u044F \u0440\u0430\u0434\u043E\u0441\u0442\u0456 \u0432 \u043D\u043E\u0432\u043E\u043C\u0443 \u0440\u043E\u0446\u0456."
    },
    {
        id: 9,
        name: "\u0420\u0406\u0417\u0414\u0412\u042F\u041D\u0410 \u0406\u0421\u041A\u0420\u0410",
        price: 55,
        img: "https://i.pinimg.com/1200x/64/33/3d/64333dbb76d05536550f4929ce1eea03.jpg",
        desc: "\u041F\u043E\u0434\u0430\u0440\u0443\u043D\u043E\u043A, \u0449\u043E \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0441\u0432\u044F\u0442\u043A\u043E\u0432\u0438\u0439 \u043D\u0430\u0441\u0442\u0440\u0456\u0439 \u0456 \u0432\u0456\u0434\u0447\u0443\u0442\u0442\u044F \u0434\u0438\u0432\u0430 \u0430\u0436 \u0434\u043E \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0420\u0456\u0437\u0434\u0432\u0430."
    }
];
// 🔁 Генеруємо картки товарів
const track = document.getElementById("carousel-track");
products.forEach((p, index)=>{
    const el = document.createElement("div");
    el.className = "carousel-item";
    // затримка для анімації появи
    el.style.setProperty("--delay", `${index * 0.12}s`);
    el.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3 class="product-name">${p.name}</h3>
    <p class="product-desc">${p.desc}</p>
    <p class="product-price">${p.price} \u{406}\u{421}</p>
    <button class="add-btn" data-id="${p.id}">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{434}\u{43E} \u{43A}\u{43E}\u{448}\u{438}\u{43A}\u{430}</button>
  `;
    track.appendChild(el);
});
// 🛒 Лічильник та стан кошика
let cartCount = 0;
const cartData = {}; // { productId: qty }
const cartCountSpan = document.getElementById("cart-count");
cartCountSpan.textContent = cartCount;
// Попапи
const quantityPopup = document.getElementById("quantity-popup");
const quantityInput = document.getElementById("quantity-input");
const quantityConfirm = document.getElementById("quantity-confirm");
const quantityCancel = document.getElementById("quantity-cancel");
const addedPopup = document.getElementById("added-popup");
const addedContent = document.getElementById("added-content");
const cartPopup = document.getElementById("cart-popup");
const cartItemsDiv = document.getElementById("cart-items");
const cartTotalP = document.getElementById("cart-total");
const cartCloseBtn = document.getElementById("cart-close");
const cartOpen = document.getElementById("cart-open");
let selectedProduct = null;
// 📌 Відкрити попап введення кількості ТІЛЬКИ для товарів
document.body.addEventListener("click", (e)=>{
    const btn = e.target;
    // реагуємо лише на кнопки "Додати до кошика" в картках
    if (btn.classList.contains("add-btn") && btn.dataset.id && // є data-id
    btn.closest(".carousel-item") // всередині товару
    ) {
        const id = Number(btn.dataset.id);
        selectedProduct = products.find((p)=>p.id === id);
        quantityInput.value = 1;
        quantityPopup.style.display = "flex";
    }
});
// ✅ Підтвердження кількості
quantityConfirm.addEventListener("click", ()=>{
    const qty = Number(quantityInput.value) || 1;
    cartCount += qty;
    cartCountSpan.textContent = cartCount;
    if (!cartData[selectedProduct.id]) cartData[selectedProduct.id] = 0;
    cartData[selectedProduct.id] += qty;
    quantityPopup.style.display = "none";
    // 🔥 ефекти при додаванні
    triggerCartAnimation();
    launchConfetti();
    showAddedPopup(selectedProduct, qty);
});
const cartIconWrapper = document.getElementById("cart-open");
// Підстрибуючий кошик
function triggerCartAnimation() {
    cartIconWrapper.classList.add("cart-bounce");
    setTimeout(()=>{
        cartIconWrapper.classList.remove("cart-bounce");
    }, 600);
}
// Конфеті
function launchConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti-container";
    for(let i = 0; i < 30; i++){
        const piece = document.createElement("span");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.animationDelay = Math.random() * 0.4 + "s";
        confetti.appendChild(piece);
    }
    document.body.appendChild(confetti);
    setTimeout(()=>{
        confetti.remove();
    }, 1200);
}
// ❌ Скасувати
quantityCancel.addEventListener("click", ()=>{
    quantityPopup.style.display = "none";
});
// 🪄 Попап "товар додано"
function showAddedPopup(product, qty) {
    const deliveryDays = Math.floor(Math.random() * 5) + 1;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);
    addedContent.innerHTML = `
    <h2>\u{1F381} \u{422}\u{43E}\u{432}\u{430}\u{440} \u{434}\u{43E}\u{434}\u{430}\u{43D}\u{43E} \u{434}\u{43E} \u{43A}\u{43E}\u{448}\u{438}\u{43A}\u{430}!</h2>
    <img src="${product.img}" alt="${product.name}" style="width:150px;border-radius:10px;margin-bottom:10px;">
    <p><strong>${product.name}</strong></p>
    <p>\u{41A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C}: ${qty}</p>
    <p>\u{421}\u{443}\u{43C}\u{430}: ${product.price * qty} \u{406}\u{421}</p>
    <p>\u{41E}\u{440}\u{456}\u{454}\u{43D}\u{442}\u{43E}\u{432}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430} \u{434}\u{43E}\u{441}\u{442}\u{430}\u{432}\u{43A}\u{438}: <br>
      <strong>${deliveryDate.toLocaleDateString()}</strong>
      <br><small>(\u{43F}\u{43E}\u{442}\u{43E}\u{447}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430} + \u{432}\u{438}\u{43F}\u{430}\u{434}\u{43A}\u{43E}\u{432}\u{456} ${deliveryDays} \u{434}\u{43D}.)</small>
    </p>
    <button id="added-close">\u{417}\u{430}\u{43A}\u{440}\u{438}\u{442}\u{438}</button>
  `;
    addedPopup.style.display = "flex";
    document.getElementById("added-close").addEventListener("click", ()=>{
        addedPopup.style.display = "none";
    });
}
// 🧺 Відкрити кошик
cartOpen.addEventListener("click", ()=>{
    renderCart();
    cartPopup.style.display = "flex";
});
// Закрити кошик
cartCloseBtn.addEventListener("click", ()=>{
    cartPopup.style.display = "none";
});
// Рендер вмісту кошика
function renderCart() {
    cartItemsDiv.innerHTML = "";
    if (Object.keys(cartData).length === 0) {
        cartItemsDiv.innerHTML = "<p>\u0412\u0430\u0448 \u043A\u043E\u0448\u0438\u043A \u043F\u043E\u043A\u0438 \u0449\u043E \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439 \u2728</p>";
        cartTotalP.textContent = "";
        return;
    }
    let total = 0;
    for(const id in cartData){
        const qty = cartData[id];
        const product = products.find((p)=>p.id === Number(id));
        const sum = product.price * qty;
        total += sum;
        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
  <div class="cart-item-left">
    ${product.name} \xd7 ${qty}
  </div>
  <div class="cart-item-right">
    <span class="cart-item-sum">${sum} \u{406}\u{421}</span>
    <button class="cart-remove" data-id="${id}">\u{2716}</button>
  </div>
`;
        cartItemsDiv.appendChild(row);
    }
    cartTotalP.textContent = `\u{417}\u{430}\u{433}\u{430}\u{43B}\u{43E}\u{43C}: ${total} \u{406}\u{421}`;
}
// 🧹 Видалення товару з кошика
cartItemsDiv.addEventListener("click", (e)=>{
    if (!e.target.classList.contains("cart-remove")) return;
    const id = Number(e.target.dataset.id);
    const qty = cartData[id] || 0;
    if (!qty) return;
    // оновити загальний лічильник у хедері
    cartCount -= qty;
    if (cartCount < 0) cartCount = 0;
    cartCountSpan.textContent = cartCount;
    // видалити позицію з кошика
    delete cartData[id];
    // перемалювати кошик
    renderCart();
});
// Закриття попапів по кліку на фон
[
    quantityPopup,
    addedPopup,
    cartPopup
].forEach((popup)=>{
    popup.addEventListener("click", (e)=>{
        if (e.target === popup) popup.style.display = "none";
    });
});
// 🎠 Карусель (прокрутка)
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const carouselWindow = document.querySelector(".carousel-window");
// прокручуємо майже на ширину вікна
function getScrollAmount() {
    return Math.round(carouselWindow.clientWidth * 0.9);
}
btnLeft.addEventListener("click", ()=>{
    const amount = getScrollAmount();
    carouselWindow.scrollBy({
        left: -amount,
        behavior: "smooth"
    });
});
btnRight.addEventListener("click", ()=>{
    const amount = getScrollAmount();
    carouselWindow.scrollBy({
        left: amount,
        behavior: "smooth"
    });
});
// === ОФОРМЛЕННЯ ЗАМОВЛЕННЯ ===
document.addEventListener('DOMContentLoaded', ()=>{
    const magicBell = document.getElementById('magic-bell');
    const checkoutBtn = document.getElementById('cart-checkout'); // кнопка в кошику
    const orderPopup = document.getElementById('order-popup');
    const orderMessage = document.getElementById('order-message');
    const orderConfirm = document.getElementById('order-confirm');
    const orderCancel = document.getElementById('order-cancel');
    const cartPopup = document.getElementById('cart-popup');
    const cartItemsBox = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartCountEl = document.getElementById('cart-count');
    if (!checkoutBtn) return;
    // Натискання "Оформити замовлення" у кошику
    checkoutBtn.addEventListener('click', ()=>{
        const itemRows = Array.from(document.querySelectorAll('#cart-items .cart-item-row'));
        if (!itemRows.length) {
            alert("\u0412\u0430\u0448 \u043A\u043E\u0448\u0438\u043A \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439 \uD83E\uDDFA");
            return;
        }
        // Беремо текст по кожному рядку (товару)
        const lines = itemRows.map((row)=>row.textContent.replace(/\s+/g, ' ').trim());
        const totalText = cartTotalEl ? cartTotalEl.textContent.trim() : '';
        // Формуємо магічний текст замовлення
        const itemsBlock = lines.map((line)=>"\u2022 " + line.replace("\u2716", '').trim()).join('\n');
        const finalText = "\u0412\u0430\u0448\u0435 \u0421\u0435\u0440\u0446\u0435 \u0437\u0440\u043E\u0431\u0438\u043B\u043E \u0432\u0438\u0431\u0456\u0440.\n\n\u0410\u0440\u0442\u0435\u0444\u0430\u043A\u0442\u0438:\n" + itemsBlock + (totalText ? "\n\n\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C: " + totalText.replace("\u0417\u0430\u0433\u0430\u043B\u043E\u043C:", '').trim() : '');
        if (orderMessage && orderPopup) {
            orderMessage.textContent = finalText;
            orderPopup.style.display = 'flex';
        }
        // Ховаємо попап кошика, щоб не заважав
        if (cartPopup) cartPopup.style.display = 'none';
    });
    // "Скасувати" у попапі оформлення
    if (orderCancel && orderPopup && cartPopup) orderCancel.addEventListener('click', ()=>{
        orderPopup.style.display = 'none';
        cartPopup.style.display = 'flex'; // повертаємо кошик
    });
    // "Замовити"
    if (orderConfirm) orderConfirm.addEventListener('click', ()=>{
        // 🔁 Очищаємо дані кошика
        // 1) обнуляємо лічильник
        cartCount = 0;
        if (cartCountEl) cartCountEl.textContent = '0';
        // 2) очищаємо об’єкт cartData
        for(const id in cartData)if (Object.hasOwn(cartData, id)) delete cartData[id];
        // 3) чистимо інтерфейс
        if (cartItemsBox) cartItemsBox.innerHTML = "<p>\u0412\u0430\u0448 \u043A\u043E\u0448\u0438\u043A \u043F\u043E\u043A\u0438 \u0449\u043E \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439 \u2728</p>";
        if (cartTotalEl) cartTotalEl.textContent = '';
        // Ховаємо попап оформлення
        if (orderPopup) orderPopup.style.display = 'none';
        // 🎵 Тихий короткий дзвіночок
        if (magicBell) {
            magicBell.volume = 0.2; // гучність
            magicBell.currentTime = 0;
            magicBell.play().catch(()=>{});
            // зупиняємо через 1 секунду
            setTimeout(()=>{
                magicBell.pause();
                magicBell.currentTime = 0;
            }, 2000);
        }
        // Дякуємо
        alert("\u0414\u044F\u043A\u0443\u0454\u043C\u043E, \u0449\u043E \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 \u0412\u0456\u0440\u0443 \u0432 \u0414\u0438\u0432\u043E! \uD83D\uDCAB");
        // Конфеті на честь покупки (можна закоментувати, якщо забагато 😄)
        launchConfetti();
    });
}); // === ОФОРМЛЕННЯ ЗАМОВЛЕННЯ ===

//# sourceMappingURL=newyear-magic-shop.de158e3a.js.map
