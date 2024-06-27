document.addEventListener('DOMContentLoaded', (event) => {
    let coldbased = document.getElementById('cold-coffee');

    let coffeeColdItemsData = [{
        id: "icedlattejs",
        name: "Iced Latte",
        price: 200,
        img: "images/iced-latte.jpg"
    }, 

    {
        id: "icedmochajs",
        name: "Iced Mocha",
        price: 200,
        img: "images/iced-mocha.jpg"
    }, 

    {
        id: "frappjs",
        name: "Frappuccino",
        price: 200,
        img: "images/Frappuccino.jpeg"
    }, 

    {
        id: "nitrojs",
        name: "Nitro Coffee",
        price: 200,
        img: "images/nitro.jpeg"
    }];

    let basket = [];

    let generateCold = () => {
        return (coldbased.innerHTML = `
            <h2 class="category-head">Cold-Based Drinks</h2>
            <div class="scroll-buttons">
                <button class="scroll-left">&larr;</button>
                <button class="scroll-right">&rarr;</button>
            </div>
            <div class="coffees">
                ${coffeeColdItemsData.map((x) => {
                    let { id, name, price, img } = x;
                    return `
                    <div class="coffee cold" id="${id}">
                        <img src="${img}" alt="${name}" class="dom-img">
                        <p class="coffee-title">${name}</p>
                        <p class="coffee-price">₹ ${price}</p>
                        <div class="order-quantity">
                            <button class="coffee-order" onclick="orderCoffee('${img}','${name}', '₹${price}')">Order</button>
                            <div class="quantbtns">
                                <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                                <div id="quant-${id}" class="quant">0</div>
                                <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                            </div>
                        </div>
                    </div>`;
                }).join("")}
            </div>
        `);
    };

    generateCold();

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
        update(id);
    };

    window.decrement = (id) => {
        let search = basket.find((x) => x.id === id);

        if (search && search.item > 0) {
            search.item -= 1;
        }
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
});
