
/* Mama Deals Kids Wear
   Beginner JavaScript practice
*/

// 1. Welcome message
console.log("Welcome to Mama Deals Kids Wear!");

// 2. Find the main elements on the page
const searchInput = document.getElementById("product-search");
const products = document.querySelectorAll(".product-card");
const cartCount = document.getElementById("cart-count");

// 3. Search for products
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    products.forEach(function (product) {
      const productName = product
        .querySelector("h3")
        .textContent.toLowerCase();

      product.style.display = productName.includes(searchTerm)
        ? "block"
        : "none";
    });
  });
}

// 4. Shopping cart
let cartItems = 0;

document.querySelectorAll(".add-to-cart").forEach(function (button) {
  button.addEventListener("click", function () {
    cartItems++;

    if (cartCount) {
      cartCount.textContent = cartItems;
    }

    button.textContent = "Added!";
  });
});