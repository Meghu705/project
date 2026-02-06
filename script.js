let quantity = 1;
let pricePerItem = 2999;
let cartCount = 0;

function increaseQty() {
  quantity++;
  document.getElementById("quantity").innerText = quantity;
  updatePrice();
}

function decreaseQty() {
  if (quantity > 1) {
    quantity--;
    document.getElementById("quantity").innerText = quantity;
    updatePrice();
  }
}

function updatePrice() {
  document.getElementById("price").innerText = pricePerItem * quantity;
}

function addToCart() {
  cartCount += quantity;
  document.getElementById("cartCount").innerText = cartCount;
  alert("Added " + quantity + " item(s) to cart!");
}

function buyNow() {
  let total = pricePerItem * quantity;
  alert("Thank you for your purchase!\nTotal Amount: ₹" + total);
}

function changeImage() {
  let img = document.getElementById("productImg");
  if (img.src.includes("Product.jpeg")) {
    img.src = "Product1.jpeg";
  } else {
    img.src = "Product.jpeg";
  }
}