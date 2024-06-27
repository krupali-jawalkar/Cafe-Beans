document.addEventListener('DOMContentLoaded', (event) => {
    let decafbased = document.getElementById('decaf-coffee');

    let coffeeDecafItemsData = [{
        id: "decafdripjs",
        name: "Decaf Drip Coffee",
        price: 200,
        img: "images/drip.jpg"
    }, 

    {
        id: "jhgf",
        name: "Iced Mocha",
        price: 200,
        img: "images/FrenchPress.jpeg"
    }, 

    {
        id: "kjhg",
        name: "Frappuccino",
        price: 200,
        img: "images/Turkish.jpg"
    }, 

    {
        id: "sdfg",
        name: "Nitro Coffee",
        price: 200,
        img: "images/japanese.jpg"
    }];

    let basket = [];

    let generateDecaf = () => {
        return (decafbased.innerHTML = `
            <h2 class="category-head">Decaffeinated Coffees</h2>
            <div class="scroll-buttons">
                <button class="scroll-left">&larr;</button>
                <button class="scroll-right">&rarr;</button>
            </div>
            <div class="coffees">
                ${coffeeDecafItemsData.map((x) => {
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

    generateDecaf();

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

