document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the stored coffee details from localStorage
    const selectedCoffeeImg = localStorage.getItem('selectedCoffeeImg');
    const selectedCoffeeName = localStorage.getItem('selectedCoffeeName');
    const selectedCoffeePrice = localStorage.getItem('selectedCoffeePrice');

    // Get the elements where the details need to be displayed
    const imgElement = document.getElementById('selected-coffee-img');
    const nameElement = document.getElementById('coffee-name');
    const priceElement = document.getElementById('coffee-price');

    // Set the retrieved details in the respective elements
    imgElement.src = selectedCoffeeImg;
    nameElement.textContent = selectedCoffeeName;
    priceElement.textContent = selectedCoffeePrice;
});
