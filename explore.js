const explore = document.getElementById("recipe");

explore.onclick = () => {
  window.location.href = "menu.html";
};

const orderButtons = document.querySelectorAll(".coffee-order");
orderButtons.forEach((button) => {
  button.onclick = () => {
    window.location.href = "order.html";
  };
});
