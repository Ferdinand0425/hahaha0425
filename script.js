let total = 0;
let cartItems = [];

function addToCart(name, price) {
  cartItems.push({ name, price });
  total += price;
  updateCart();
}

function removeFromCart(index) {
  total -= cartItems[index].price;
  cartItems.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cart = document.getElementById("cart");
  cart.innerHTML = "";

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `${item.name} - $${item.price} 
      <button onclick="removeFromCart(${index})">刪除</button>`;
    cart.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  const checkoutDiv = document.getElementById("checkoutResult");
  if (cartItems.length === 0) {
    checkoutDiv.textContent = "購物車是空的，請先加入品項！";
  } else {
    let summary = "您已送出菜單：\n";
    cartItems.forEach((item) => {
      summary += `${item.name} - $${item.price}\n`;
    });
    summary += `總價: $${total}`;
    checkoutDiv.textContent = summary;
  }
});

let i = 0,
  imgArr = new Array();
imgArr[0] =
  "https://i.pinimg.com/736x/a9/29/cc/a929ccb22429283b4bca53da80cbab14.jpg";
imgArr[1] =
  "https://i.pinimg.com/736x/db/5c/e4/db5ce4d659ec44791f829765341b501a.jpg";
imgArr[2] =
  "https://i.pinimg.com/1200x/73/2f/30/732f30a75ce15a6a0b3773bd244f8655.jpg";

function showIng() {
  document.getElementById("ico").src = imgArr[i];
  i = (i + 1) % 3;
}
function show() {
  setInterval(showIng, 2000);
}