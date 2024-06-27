document.addEventListener('DOMContentLoaded', (event) => {
    let espressobased = document.getElementById('espresso-based');

    let coffeeItemsData = [{
        id: "espjs",
        name: "Espresso",
        price: 200,
        img: "images/espresso.jpg"
    }, 

    {
        id: "amerjs",
        name: "Americano",
        price: 200,
        img: "images/americano.jpg"
    }, 

    {
        id: "cappjs",
        name: "Cappuccino",
        price: 200,
        img: "images/cappuccino.jpeg"
    }, 

    {
        id: "lattejs",
        name: "Latte",
        price: 200,
        img: "images/latte.jpg"
    }, 

    {
        id: "maccjs",
        name: "Macchiato",
        price: 200,
        img: "images/macchiato.jpg"
    }];

    let basket = JSON.parse(localStorage.getItem("data") || "[]");
    
    let generateEspresso = () => {
        espressobased.innerHTML = `
            <h2 class="category-head">Espresso-Based Drinks</h2>
            <div class="scroll-buttons">
                <button class="scroll-left">&larr;</button>
                <button class="scroll-right">&rarr;</button>
            </div>
            <div class="coffees">
                ${coffeeItemsData.map((x) => {
                    let { id, name, price, img } = x;
                    let search = basket.find((x)=> x.id === id) || {item: 0};

                    return `
                    <div class="coffee esp" id="${id}">
                        <img src="${img}" alt="${name}" class="dom-img">
                        <p class="coffee-title">${name}</p>
                        <p class="coffee-price">₹ ${price}</p>
                        <div class="order-quantity">
                            <button class="coffee-order" onclick="orderCoffee('${img}','${name}', '₹${price}')">Order</button>
                            <div class="quantbtns">
                                <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                                <div id="quant-${id}" class="quant">
                                ${search.item === undefined? 0 : search.item}
                                </div>
                                <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                            </div>
                        </div>
                    </div>`;
                }).join("")}
            </div>
        `;
    };

    generateEspresso();

    window.increment = (id) => {
        let search = basket.find((x) => x.id === id);

        if (search === undefined) {
            basket.push({
                id: id,
                item: 1,
            });
        } else {
            search.item += 1;
        }

        // console.log("Basket after increment:", basket);
        localStorage.setItem("data", JSON.stringify(basket));

        update(id);
    };

    window.decrement = (id) => {
        let search = basket.find((x) => x.id === id);

        if (search && search.item > 0) {
            search.item -= 1;
        }
        // console.log("Basket after decrement:", basket);
        localStorage.setItem("data", JSON.stringify(basket));

        update(id);
    };

    window.update = (id) => {
        let search = basket.find((x) => x.id === id);
        if (search) {
            document.getElementById(`quant-${id}`).innerHTML = search.item;
            calculation();
        }
    };
    
    window.calculation = () => {
        let cartIcon = document.getElementById("cartAmt");
        cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    };

    // Initial calculation to update the cart amount from local storage on page load
    calculation();
});
