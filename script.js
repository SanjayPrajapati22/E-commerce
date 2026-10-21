// ---- Hero carousel ----
const dots = document.querySelectorAll('.hero-dots span');
const leftArrow = document.querySelector('.hero-arrow.left');
const rightArrow = document.querySelector('.hero-arrow.right');
let activeIndex = 0;

function setActiveDot(index) {
  dots[activeIndex].classList.remove('active');
  activeIndex = (index + dots.length) % dots.length;
  dots[activeIndex].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => setActiveDot(i));
});

leftArrow.addEventListener('click', () => setActiveDot(activeIndex - 1));
rightArrow.addEventListener('click', () => setActiveDot(activeIndex + 1));

// auto-advance every 4s
setInterval(() => setActiveDot(activeIndex + 1), 4000);

// ---- Cart badge demo interaction ----
const cartAction = document.querySelector('.action:nth-child(2)');
const cartBadge = document.querySelector('.cart-badge');
let cartCount = 3;

if (cartAction) {
  cartAction.addEventListener('click', () => {
    cartCount++;
    cartBadge.textContent = cartCount;
  });
}

// ---- Wishlist toggle demo ----
const wishlistAction = document.querySelector('.action:nth-child(1)');
if (wishlistAction) {
  wishlistAction.addEventListener('click', () => {
    const icon = wishlistAction.querySelector('.ico');
    icon.textContent = icon.textContent === '♡' ? '♥' : '♡';
  });
}

// ---- Category nav active state ----
const navLinks = document.querySelectorAll('.catnav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ---- Toast helper ----
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ---- Add to cart (product grid) ----
const addCartButtons = document.querySelectorAll('.add-cart-btn');
addCartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const name = card.querySelector('.p-name').textContent;

    cartCount++;
    cartBadge.textContent = cartCount;

    btn.textContent = 'Added ✓';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.classList.remove('added');
    }, 1400);

    showToast(`${name} added to cart`);
  });
});

// ---- Wishlist toggle (product cards) ----
const wishButtons = document.querySelectorAll('.wish-btn');
wishButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
  });
});

// ---- Category card click feedback ----
const catCards = document.querySelectorAll('.cat-card');
catCards.forEach(card => {
  card.addEventListener('click', () => {
    const label = card.querySelector('span').textContent;
    showToast(`Browsing ${label}`);
  });
});
