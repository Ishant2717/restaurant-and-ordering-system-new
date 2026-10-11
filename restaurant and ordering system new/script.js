/* Urban Bite — vanilla JavaScript only. All demo data stays in this browser. */
"use strict";

const MENU_ITEMS = [
  {
    id: "pizza-margherita",
    name: "Garden Margherita",
    category: "Pizza",
    price: 249,
    tag: "Bestseller",
    description: "Tomato, mozzarella, basil and a golden crust.",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "pizza-paneer",
    name: "Paneer Tikka Pizza",
    category: "Pizza",
    price: 329,
    tag: "Popular",
    description: "Tandoori paneer, peppers and a smoky sauce.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "pizza-pepperoni",
    name: "Classic Loaded Pizza",
    category: "Pizza",
    price: 349,
    tag: "Chef's pick",
    description: "A generous layer of cheese and savoury toppings.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "burger-classic",
    name: "Classic Smash Burger",
    category: "Burgers",
    price: 199,
    tag: "Bestseller",
    description: "Juicy patty, crisp lettuce and house burger sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "burger-veggie",
    name: "Green Garden Burger",
    category: "Burgers",
    price: 179,
    tag: "Veg favourite",
    description: "A flavour-packed veggie patty with fresh greens.",
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "burger-crispy",
    name: "Crispy Crunch Burger",
    category: "Burgers",
    price: 219,
    tag: "Crunchy",
    description: "Crispy golden filling, pickles and creamy sauce.",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "fries",
    name: "Seasoned French Fries",
    category: "Sides",
    price: 99,
    tag: "Snack time",
    description: "Crispy golden fries with our signature seasoning.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "garlic-bread",
    name: "Cheesy Garlic Bread",
    category: "Sides",
    price: 129,
    tag: "Shareable",
    description: "Toasted bread, garlic butter and melted cheese.",
    image:
      "data:image/webp;base64,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",
  },
  {
    id: "salad",
    name: "Rainbow Crunch Bowl",
    category: "Sides",
    price: 169,
    tag: "Fresh pick",
    description: "Colourful vegetables with a bright, zesty dressing.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "lemonade",
    name: "Mint Lemon Cooler",
    category: "Drinks",
    price: 79,
    tag: "Refreshing",
    description: "Fresh lemon, mint and a little sparkle.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cేయ9a7a?auto=format&fit=crop&w=700&q=80".replace(
        "cేయ9a7a",
        "c9a7a",
      ),
  },
  {
    id: "berry",
    name: "Berry Bliss Smoothie",
    category: "Drinks",
    price: 149,
    tag: "Fruit blend",
    description: "A chilled berry blend for a bright little boost.",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "iced-coffee",
    name: "Creamy Iced Coffee",
    category: "Drinks",
    price: 139,
    tag: "Coffee break",
    description: "Chilled coffee with a smooth, creamy finish.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "brownie",
    name: "Warm Choco Brownie",
    category: "Desserts",
    price: 119,
    tag: "Sweet treat",
    description: "Rich chocolate brownie, soft in the middle.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "cheesecake",
    name: "Strawberry Cheesecake",
    category: "Desserts",
    price: 169,
    tag: "Guest favourite",
    description: "Creamy cheesecake with a strawberry finish.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "pancakes",
    name: "Choco Pancake Stack",
    category: "Desserts",
    price: 189,
    tag: "Treat yourself",
    description: "Fluffy pancakes finished with chocolate drizzle.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
  },
];

const STORAGE = {
  cart: "urbanBiteCart",
  favorites: "urbanBiteFavorites",
  reviews: "urbanBiteReviews",
  orders: "urbanBiteOrders",
  messages: "urbanBiteMessages",
  newsletter: "urbanBiteNewsletter",
};
const readStore = (key, fallback) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
};
const writeStore = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    showToast("Browser storage is unavailable. Try another browser.");
    return false;
  }
};
const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
let toastTimer;
function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function getCart() {
  const cart = readStore(STORAGE.cart, []);
  return Array.isArray(cart)
    ? cart.filter(
        (item) =>
          MENU_ITEMS.some((p) => p.id === item.id) &&
          Number.isInteger(item.qty) &&
          item.qty > 0,
      )
    : [];
}
function saveCart(cart) {
  writeStore(STORAGE.cart, cart);
  updateCartCount();
}
function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  document
    .querySelectorAll(".cart-count")
    .forEach((el) => (el.textContent = count));
}
function addToCart(id) {
  const product = MENU_ITEMS.find((item) => item.id === id);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty = Math.min(99, existing.qty + 1);
  else cart.push({ id, qty: 1 });
  saveCart(cart);
  showToast(`${product.name} added to your cart.`);
}
function toggleFavorite(id, button) {
  let favs = readStore(STORAGE.favorites, []);
  if (!Array.isArray(favs)) favs = [];
  const index = favs.indexOf(id);
  if (index >= 0) {
    favs.splice(index, 1);
    button?.classList.remove("active");
    button?.setAttribute("aria-pressed", "false");
    showToast("Removed from favourites.");
  } else {
    favs.push(id);
    button?.classList.add("active");
    button?.setAttribute("aria-pressed", "true");
    showToast("Saved to favourites.");
  }
  writeStore(STORAGE.favorites, favs);
}
function renderMenu() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const search = document.getElementById("menu-search-input");
  const count = document.getElementById("results-count");
  const empty = document.getElementById("menu-empty");
  const params = new URLSearchParams(location.search);
  let active = params.get("category") || "All";
  if (
    !["All", "Pizza", "Burgers", "Sides", "Drinks", "Desserts"].includes(active)
  )
    active = "All";
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  function paint() {
    const term = (search?.value || "").trim().toLowerCase();
    const products = MENU_ITEMS.filter(
      (p) =>
        (active === "All" || p.category === active) &&
        `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(term),
    );
    filterButtons.forEach((btn) => {
      const on = btn.dataset.filter === active;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", String(on));
    });
    const favs = readStore(STORAGE.favorites, []);
    grid.innerHTML = products
      .map(
        (p) =>
          `<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='assets/food-placeholder.svg'"><span class="product-tag">${escapeHTML(p.tag)}</span><button class="favorite-btn ${favs.includes(p.id) ? "active" : ""}" data-favorite="${p.id}" aria-label="Toggle ${escapeHTML(p.name)} favourite" aria-pressed="${favs.includes(p.id)}">♥</button></div><div class="product-info"><span class="product-category">${escapeHTML(p.category)}</span><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.description)}</p><div class="product-bottom"><span class="product-price">${money(p.price)}</span><button class="add-cart" data-add="${p.id}">+ Add to cart</button></div></div></article>`,
      )
      .join("");
    if (count)
      count.textContent = `Showing ${products.length} ${products.length === 1 ? "dish" : "dishes"}`;
    if (empty) empty.hidden = products.length > 0;
    grid.hidden = products.length === 0;
  }
  filterButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      active = btn.dataset.filter;
      paint();
    }),
  );
  search?.addEventListener("input", paint);
  document.getElementById("reset-menu")?.addEventListener("click", () => {
    active = "All";
    if (search) search.value = "";
    paint();
  });
  grid.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    const fav = event.target.closest("[data-favorite]");
    if (add) addToCart(add.dataset.add);
    if (fav) toggleFavorite(fav.dataset.favorite, fav);
  });
  paint();
}
function renderCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;
  const cart = getCart();
  const empty = document.getElementById("empty-cart");
  container.innerHTML = cart
    .map((item) => {
      const p = MENU_ITEMS.find((product) => product.id === item.id);
      return `<article class="cart-item"><img src="${p.image}" alt="${escapeHTML(p.name)}" onerror="this.onerror=null;this.src='assets/food-placeholder.svg'"><div><h3>${escapeHTML(p.name)}</h3><small>${escapeHTML(p.category)}</small><div class="quantity-control"><button data-qty="-1" data-id="${p.id}" aria-label="Decrease ${escapeHTML(p.name)} quantity">−</button><span>${item.qty}</span><button data-qty="1" data-id="${p.id}" aria-label="Increase ${escapeHTML(p.name)} quantity">+</button><button class="remove-item" data-remove="${p.id}">Remove</button></div></div><div class="cart-item-price">${money(p.price * item.qty)}</div></article>`;
    })
    .join("");
  if (empty) empty.hidden = cart.length > 0;
  container.hidden = cart.length === 0;
  const subtotal = cart.reduce(
    (sum, item) =>
      sum + MENU_ITEMS.find((p) => p.id === item.id).price * item.qty,
    0,
  );
  const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 39;
  const set = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = money(value);
  };
  set("cart-subtotal", subtotal);
  set("cart-delivery", delivery);
  set("cart-total", subtotal + delivery);
  const note = document.getElementById("delivery-note");
  if (note)
    note.textContent =
      subtotal >= 499
        ? "Nice! Your delivery is on us."
        : subtotal === 0
          ? "Add an item to calculate delivery."
          : `Add ${money(499 - subtotal)} more for free delivery.`;
  const checkout = document.getElementById("checkout-button");
  if (checkout) checkout.disabled = cart.length === 0;
}
function initCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;
  renderCart();
  container.addEventListener("click", (event) => {
    const qty = event.target.closest("[data-qty]");
    const remove = event.target.closest("[data-remove]");
    let cart = getCart();
    if (qty) {
      cart = cart
        .map((item) =>
          item.id === qty.dataset.id
            ? { ...item, qty: item.qty + Number(qty.dataset.qty) }
            : item,
        )
        .filter((item) => item.qty > 0);
      saveCart(cart);
      renderCart();
    }
    if (remove) {
      saveCart(cart.filter((item) => item.id !== remove.dataset.remove));
      renderCart();
      showToast("Item removed from cart.");
    }
  });
  const checkoutBtn = document.getElementById("checkout-button");
  checkoutBtn?.addEventListener("click", () => {
    const section = document.getElementById("checkout-section");
    if (!getCart().length) return;
    if (section) {
      section.hidden = false;
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  document
    .getElementById("checkout-form")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const cart = getCart();
      if (!cart.length) {
        showToast("Your cart is empty.");
        return;
      }
      const data = Object.fromEntries(new FormData(form).entries());
      const subtotal = cart.reduce(
        (sum, item) =>
          sum + MENU_ITEMS.find((p) => p.id === item.id).price * item.qty,
        0,
      );
      const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 39;
      const order = {
        orderId: "UB" + Date.now().toString().slice(-7),
        ...data,
        items: cart.map((item) => ({
          ...MENU_ITEMS.find((p) => p.id === item.id),
          qty: item.qty,
        })),
        total: subtotal + delivery,
        placedAt: new Date().toISOString(),
        status: "Demo order",
      };
      const orders = readStore(STORAGE.orders, []);
      orders.unshift(order);
      writeStore(STORAGE.orders, orders);
      saveCart([]);
      renderCart();
      form.hidden = true;
      const confirmation = document.getElementById("order-confirmation");
      confirmation.hidden = false;
      confirmation.innerHTML = `<h3>You're all set, ${escapeHTML(data.name)}! ✨</h3><p>Your demo order <strong>${escapeHTML(order.orderId)}</strong> has been recorded in this browser.</p><p>Total: <strong>${money(order.total)}</strong></p><p class="demo-note">This is a portfolio simulation. No restaurant received the order and no payment was taken.</p><a class="btn btn-dark" href="menu.html">Back to the menu ↗</a>`;
      confirmation.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}
function initReviews() {
  const form = document.getElementById("review-form");
  if (!form) return;
  const list = document.getElementById("review-list");
  const saved = readStore(STORAGE.reviews, []);
  function appendReview(review) {
    const article = document.createElement("article");
    article.className = "review-card";
    const initials = review.name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
    article.innerHTML = `<div class="review-card-top"><span class="person-avatar">${escapeHTML(initials)}</span><div><strong>${escapeHTML(review.name)}</strong><small>Browser-saved demo review</small></div><span class="stars" aria-label="${review.rating} out of 5 stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span></div><p>“${escapeHTML(review.text)}”</p>`;
    list.prepend(article);
  }
  saved.slice().reverse().forEach(appendReview);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const review = {
      name: String(data.get("name")).trim(),
      rating: Number(data.get("rating")),
      text: String(data.get("review")).trim(),
      createdAt: new Date().toISOString(),
    };
    if (review.name.length < 1 || review.text.length < 8) return;
    const reviews = readStore(STORAGE.reviews, []);
    reviews.push(review);
    if (writeStore(STORAGE.reviews, reviews)) {
      appendReview(review);
      form.reset();
      const msg = form.querySelector(".form-message");
      msg.textContent = "Thanks! Your review is now visible on this browser.";
      showToast("Review added.");
    }
  });
}
function initContact() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    data.createdAt = new Date().toISOString();
    const messages = readStore(STORAGE.messages, []);
    messages.push(data);
    if (writeStore(STORAGE.messages, messages)) {
      form.reset();
      form.querySelector(".form-message").textContent =
        "Thanks for your message! It has been saved in this browser demo.";
      showToast("Message saved locally.");
    }
  });
}
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const email = form.querySelector("input").value.trim().toLowerCase();
    const list = readStore(STORAGE.newsletter, []);
    if (!list.includes(email)) list.push(email);
    if (writeStore(STORAGE.newsletter, list)) {
      form.reset();
      form.querySelector(".form-message").textContent =
        "You're on the demo list — thanks!";
      showToast("Subscribed in this browser demo.");
    }
  });
}
function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
    toggle.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }),
  );
}
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("[data-year]")
    .forEach((el) => (el.textContent = new Date().getFullYear()));
  initNavigation();
  updateCartCount();
  renderMenu();
  initCart();
  initReviews();
  initContact();
  initNewsletter();
});
