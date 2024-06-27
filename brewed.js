document.addEventListener('DOMContentLoaded', (event) => {
    let brewedbased = document.getElementById('brewed-coffee');

    let coffeeBrewItemsData = [{
        id: "dripjs",
        name: "Drip Coffee",
        price: 200,
        img: "images/drip.jpg"
    }, 

    {
        id: "frenchjs",
        name: "French Coffee",
        price: 200,
        img: "images/FrenchPress.jpeg"
    }, 

    {
        id: "turkishjs",
        name: "Turkish",
        price: 200,
        img: "images/Turkish.jpg"
    }, 

    {
        id: "japensejs",
        name: "Japenese Iced Coffee",
        price: 200,
        img: "images/japanese.jpg"
    }];

    let basket = JSON.parse(localStorage.getItem("data")) || [];

    let generateBrewed = () => {
        return (brewedbased.innerHTML = `
            <h2 class="category-head">Brewed Coffee</h2>
            <div class="scroll-buttons">
                <button class="scroll-left">&larr;</button>
                <button class="scroll-right">&rarr;</button>
            </div>
            <div class="coffees">
                ${coffeeBrewItemsData.map((x) => {
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
        `);
    };

    generateBrewed();

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
        localStorage.setItem("data", JSON.stringify(basket));
        update(id);
    };

    window.decrement = (id) => {
        let search = basket.find((x) => x.id === id);

        if (search && search.item > 0) {
            search.item -= 1;
        }
        localStorage.setItem("data", JSON.stringify(basket));
        update(id);
    };

    let update = (id) => {
        let search = basket.find((x) => x.id === id);
        if (search) {
            document.getElementById(`quant-${id}`).innerHTML = search.item;
        }
        calculation();
    };

    window.calculation = () => {
        
        let cartIcon = document.getElementById("cartAmt");
        
        cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
            
    };

    calculation();
});
