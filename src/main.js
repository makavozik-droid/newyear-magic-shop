alert("Магазин чудес завантажено ✨");

// 📦 Список чудес (поки що з картинками з інтернету для тесту)
const products = [
  {
    id: 1,
    name: "МАГІЧНИЙ ЧАС",
    price: 50,
    img: "https://i.pinimg.com/736x/81/85/3e/81853e85a88afed921dbb26d882bbca5.jpg",
    desc: "Флакон з магією, що «заморожує» одну хвилину і дозволяє насолодитися ідеальним моментом без поспіху."
  },
  {
    id: 2,
    name: "ЗІРКА БАЖАНЬ",
    price: 25,
    img: "https://i.pinimg.com/736x/28/d1/4e/28d14e8ffb9b10433f195a31a77c9766.jpg",
    desc: "Право обрати найяскравішу зірку на небі, якій можна прошептати найпотаємніше бажання."
  },
  {
    id: 3,
    name: "ЕЛІКСИР СМІЛИВОСТІ",
    price: 45,
    img: "https://i.pinimg.com/736x/17/d9/d4/17d9d44adc83df71aa7d85400bc8f4ea.jpg",
    desc: "Пляшечка, наповнена магічним зіллям, що усуває сумніви та страхи, даруючи впевненість у новому році."
  },
  {
    id: 4,
    name: "КЛЮЧ СПОГАДІВ",
    price: 30,
    img: "https://i.pinimg.com/736x/ef/bb/18/efbb18ef67e37b627a32b15b46d5582d.jpg",
    desc: "Чарівний ключ, який відчиняє двері до найтепліших і найяскравіших спогадів минулого року."
  },
  {
    id: 5,
    name: "МАНТІЯ ДОБРОТИ",
    price: 60,
    img: "https://i.pinimg.com/736x/fd/de/df/fddedf03cfd72a7fef256d79f6bb3585.jpg",
    desc: "Мантія, що дозволяє анонімно здійснювати добрі справи для близьких і незнайомців."
  },
  {
    id: 6,
    name: "КРИШТАЛЕВА КУЛЯ ЩАСЛИВИХ СНІВ",
    price: 20,
    img: "https://i.pinimg.com/736x/97/46/8b/97468b78d6b1d97669516b023d5bcf6b.jpg",
    desc: "Кришталева куля, що гарантує світлі, спокійні та надихаючі сни під час свят."
  },
  {
    id: 7,
    name: "АБОНЕМЕНТ НА «РІЗДВЯНИЙ ПОЛІТ»",
    price: 35,
    img: "https://i.pinimg.com/736x/64/ef/7a/64ef7a12030e20978f8d6fb94e2db476.jpg",
    desc: "Сертифікат на уявну подорож у будь-яку країну світу за одну ніч, щоб побачити святкування Різдва та Нового року."
  },
  {
    id: 8,
    name: "ВІТЕР ПЕРЕМІН",
    price: 40,
    img: "https://i.pinimg.com/736x/7c/bb/ae/7cbbaec21d99e8c3f68bacbf00d89a9e.jpg",
    desc: "Магічний вітер, який здуває смуток та розчарування, очищаючи шлях для радості в новому році."
  },
  {
    id: 9,
    name: "РІЗДВЯНА ІСКРА",
    price: 55,
    img: "https://i.pinimg.com/1200x/64/33/3d/64333dbb76d05536550f4929ce1eea03.jpg",
    desc: "Подарунок, що зберігає святковий настрій і відчуття дива аж до наступного Різдва."
  }
];

// 🔁 Генеруємо картки товарів
const track = document.getElementById("carousel-track");

products.forEach((p, index) => {
  const el = document.createElement("div");
  el.className = "carousel-item";

  // затримка для анімації появи
  el.style.setProperty("--delay", `${index * 0.12}s`);

  el.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3 class="product-name">${p.name}</h3>
    <p class="product-desc">${p.desc}</p>
    <p class="product-price">${p.price} ІС</p>
    <button class="add-btn" data-id="${p.id}">Додати до кошика</button>
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
document.body.addEventListener("click", (e) => {
  const btn = e.target;

  // реагуємо лише на кнопки "Додати до кошика" в картках
  if (
    btn.classList.contains("add-btn") &&
    btn.dataset.id &&                         // є data-id
    btn.closest(".carousel-item")             // всередині товару
  ) {
    const id = Number(btn.dataset.id);
    selectedProduct = products.find(p => p.id === id);
    quantityInput.value = 1;
    quantityPopup.style.display = "flex";
  }
});

// ✅ Підтвердження кількості
quantityConfirm.addEventListener("click", () => {
  const qty = Number(quantityInput.value) || 1;

  cartCount += qty;
  cartCountSpan.textContent = cartCount;

  if (!cartData[selectedProduct.id]) {
    cartData[selectedProduct.id] = 0;
  }
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
  setTimeout(() => {
    cartIconWrapper.classList.remove("cart-bounce");
  }, 600);
}

// Конфеті
function launchConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti-container";

  for (let i = 0; i < 30; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.animationDelay = Math.random() * 0.4 + "s";
    confetti.appendChild(piece);
  }

  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 1200);
}

// ❌ Скасувати
quantityCancel.addEventListener("click", () => {
  quantityPopup.style.display = "none";
});

// 🪄 Попап "товар додано"
function showAddedPopup(product, qty) {
  const deliveryDays = Math.floor(Math.random() * 5) + 1;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);

  addedContent.innerHTML = `
    <h2>🎁 Товар додано до кошика!</h2>
    <img src="${product.img}" alt="${product.name}" style="width:150px;border-radius:10px;margin-bottom:10px;">
    <p><strong>${product.name}</strong></p>
    <p>Кількість: ${qty}</p>
    <p>Сума: ${product.price * qty} ІС</p>
    <p>Орієнтовна дата доставки: <br>
      <strong>${deliveryDate.toLocaleDateString()}</strong>
      <br><small>(поточна дата + випадкові ${deliveryDays} дн.)</small>
    </p>
    <button id="added-close">Закрити</button>
  `;

  addedPopup.style.display = "flex";

  document.getElementById("added-close").addEventListener("click", () => {
    addedPopup.style.display = "none";
  });
}

// 🧺 Відкрити кошик
cartOpen.addEventListener("click", () => {
  renderCart();
  cartPopup.style.display = "flex";
});

// Закрити кошик
cartCloseBtn.addEventListener("click", () => {
  cartPopup.style.display = "none";
});

// Рендер вмісту кошика
function renderCart() {
  cartItemsDiv.innerHTML = "";

  if (Object.keys(cartData).length === 0) {
    cartItemsDiv.innerHTML = "<p>Ваш кошик поки що порожній ✨</p>";
    cartTotalP.textContent = "";
    return;
  }

  let total = 0;

  for (const id in cartData) {
    const qty = cartData[id];
    const product = products.find(p => p.id === Number(id));
    const sum = product.price * qty;
    total += sum;

    const row = document.createElement("div");
    row.className = "cart-item-row";
    row.innerHTML = `
      <span>${product.name} × ${qty}</span>
      <span>
        ${sum} ІС
        <button class="cart-remove" data-id="${id}">✖</button>
      </span>
    `;
    cartItemsDiv.appendChild(row);
  }

  cartTotalP.textContent = `Загалом: ${total} ІС`;
}
// 🧹 Видалення товару з кошика
cartItemsDiv.addEventListener("click", (e) => {
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
[quantityPopup, addedPopup, cartPopup].forEach(popup => {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});

// 🎠 Карусель (прокрутка)
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const carouselWindow = document.querySelector(".carousel-window");

// прокручуємо на ширину "вікна каруселі"
btnLeft.addEventListener("click", () => {
  const amount = carouselWindow.clientWidth - 40;
  carouselWindow.scrollBy({ left: -amount, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  const amount = carouselWindow.clientWidth - 40;
  carouselWindow.scrollBy({ left: amount, behavior: "smooth" });
});
// === ОФОРМЛЕННЯ ЗАМОВЛЕННЯ ===
document.addEventListener('DOMContentLoaded', () => {
  const magicBell = document.getElementById('magic-bell');
  const checkoutBtn   = document.getElementById('cart-checkout'); // кнопка в кошику
  const orderPopup    = document.getElementById('order-popup');
  const orderMessage  = document.getElementById('order-message');
  const orderConfirm  = document.getElementById('order-confirm');
  const orderCancel   = document.getElementById('order-cancel');
  const cartPopup     = document.getElementById('cart-popup');
  const cartItemsBox  = document.getElementById('cart-items');
  const cartTotalEl   = document.getElementById('cart-total');
  const cartCountEl   = document.getElementById('cart-count');

  if (!checkoutBtn) return;

  // Натискання "Оформити замовлення" у кошику
  checkoutBtn.addEventListener('click', () => {
    const itemRows = Array.from(
      document.querySelectorAll('#cart-items .cart-item-row')
    );

    if (!itemRows.length) {
      alert('Ваш кошик порожній 🧺');
      return;
    }

    // Беремо текст по кожному рядку (товару)
    const lines = itemRows.map(row =>
      row.textContent.replace(/\s+/g, ' ').trim()
    );

    const totalText = cartTotalEl ? cartTotalEl.textContent.trim() : '';

    // Формуємо магічний текст замовлення
    const itemsBlock = lines
      .map(line => '• ' + line.replace('✖', '').trim())
      .join('\n');

    const finalText =
      'Ваше Серце зробило вибір.\n\n' +
      'Артефакти:\n' +
      itemsBlock +
      (totalText ? '\n\nВартість: ' + totalText.replace('Загалом:', '').trim() : '');

    if (orderMessage && orderPopup) {
      orderMessage.textContent = finalText;
      orderPopup.style.display = 'flex';
    }

    // Ховаємо попап кошика, щоб не заважав
    if (cartPopup) {
      cartPopup.style.display = 'none';
    }
  });

  // "Скасувати" у попапі оформлення
  if (orderCancel && orderPopup && cartPopup) {
    orderCancel.addEventListener('click', () => {
      orderPopup.style.display = 'none';
      cartPopup.style.display = 'flex'; // повертаємо кошик
    });
  }

    // "Замовити"
  if (orderConfirm) {
    orderConfirm.addEventListener('click', () => {
      // 🔁 Очищаємо дані кошика
      // 1) обнуляємо лічильник
      cartCount = 0;
      if (cartCountEl) cartCountEl.textContent = '0';

      // 2) очищаємо об’єкт cartData
      for (const id in cartData) {
        if (Object.hasOwn(cartData, id)) {
          delete cartData[id];
        }
      }

      // 3) чистимо інтерфейс
      if (cartItemsBox) cartItemsBox.innerHTML = '<p>Ваш кошик поки що порожній ✨</p>';
      if (cartTotalEl)  cartTotalEl.textContent = '';

      // Ховаємо попап оформлення
      if (orderPopup) {
        orderPopup.style.display = 'none';
      }

 // 🎵 Тихий короткий дзвіночок
    if (magicBell) {
      magicBell.volume = 0.2;       // гучність
      magicBell.currentTime = 0;
      magicBell.play().catch(() => {});

      // зупиняємо через 1 секунду
      setTimeout(() => {
        magicBell.pause();
        magicBell.currentTime = 0;
      }, 2000);
    }

      // Дякуємо
      alert('Дякуємо, що підтримуєте Віру в Диво! 💫');

      // Конфеті на честь покупки (можна закоментувати, якщо забагато 😄)
      launchConfetti();
    });
  }
});
// === ОФОРМЛЕННЯ ЗАМОВЛЕННЯ ===
