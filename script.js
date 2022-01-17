/*=========BurgerMenu============*/
let burgerButton = document.querySelector(".header__menu-icon");
let burgerMenu = document.querySelector(".header___menu-container");

burgerButton.addEventListener("click", handlerBurgerMenu)

function handlerBurgerMenu() {
    burgerButton.classList.toggle("activate");
    burgerMenu.classList.toggle("activate");
    document.body.classList.toggle("lock")
}

burgerMenu.addEventListener("click", hideBurgerMenu)

function hideBurgerMenu(e) {
    if (e.target.classList.contains("menu-item")) {
        handlerBurgerMenu();
    }
}

/*=========DishMenu==========*/
const menu = {
    starters: {
        0: {
            name: " SMOKED RICOTTA TERRINE",
            price: 12,
            ingredients: "ricotta, shallots, cheddar, capers",
        },
        1: {
            name: "SAMPHIRE FRITTERS WITH FENNEL CEVICHE",
            price: 19,
            ingredients: "fresh samphire, plain flour, cornflower, eggs, fennel",
        },
        2: {
            name: "PAN FRIED COURGETTE FLOWERS",
            price: 13,
            ingredients: "courgette flowers, goats cheese, red onion, pine nuts",
        },
        3: {
            name: " SMOKED RICOTTA TERRINE",
            price: 12,
            ingredients: "ricotta, shallots, cheddar, capers",
        },
        4: {
            name: "SAMPHIRE FRITTERS WITH FENNEL CEVICHE",
            price: 19,
            ingredients: "fresh samphire, plain flour, cornflower, eggs, fennel",
        },
        5: {
            name: "PAN FRIED COURGETTE FLOWERS",
            price: 13,
            ingredients: "courgette flowers, goats cheese, red onion, pine nuts",
        },
        6: {
            name: " SMOKED RICOTTA TERRINE",
            price: 12,
            ingredients: "ricotta, shallots, cheddar, capers",
        },
        7: {
            name: " SMOKED RICOTTA TERRINE",
            price: 12,
            ingredients: "ricotta, shallots, cheddar, capers",
        },
        8: {
            name: "SAMPHIRE FRITTERS WITH FENNEL CEVICHE",
            price: 19,
            ingredients: "fresh samphire, plain flour, cornflower, eggs, fennel",
        },
        9: {
            name: "PAN FRIED COURGETTE FLOWERS",
            price: 13,
            ingredients: "courgette flowers, goats cheese, red onion, pine nuts",
        },
        10: {
            name: " SMOKED RICOTTA TERRINE",
            price: 12,
            ingredients: "ricotta, shallots, cheddar, capers",
        },
        11: {
            name: "SAMPHIRE FRITTERS WITH FENNEL CEVICHE",
            price: 19,
            ingredients: "fresh samphire, plain flour, cornflower, eggs, fennel",
        },
        12: {
            name: "PAN FRIED COURGETTE FLOWERS",
            price: 13,
            ingredients: "courgette flowers, goats cheese, red onion, pine nuts",
        },
        13: {
            name: " SMOKED RICOTTA TERRINE",
            price: 12,
            ingredients: "ricotta, shallots, cheddar, capers",
        },
    },
    mainDish: {
        0: {
            name: "MUSTARD-stuffed chicken",
            price: 22,
            ingredients: "mozzarella, cheddar, wholegrain, chicken, bacon",
        },
        1: {
            name: "One-pot chicken chasseur",
            price: 35,
            ingredients: "chicken, olive oil, tomato, onion, garlic cloves, sprigs",
        },
        2: {
            name: "Crispy chilli turkey noodles",
            price: 20,
            ingredients: "turkey, piece ginger, spring onions, limes, carrots",
        },
        3: {
            name: "MUSTARD-stuffed chicken",
            price: 22,
            ingredients: "mozzarella, cheddar, wholegrain, chicken, bacon",
        },
        4: {
            name: "One-pot chicken chasseur",
            price: 35,
            ingredients: "chicken, olive oil, tomato, onion, garlic cloves, sprigs",
        },
        5: {
            name: "Crispy chilli turkey noodles",
            price: 20,
            ingredients: "turkey, piece ginger, spring onions, limes, carrots",
        },
        7: {
            name: "MUSTARD-stuffed chicken",
            price: 22,
            ingredients: "mozzarella, cheddar, wholegrain, chicken, bacon",
        },
    },
    desserts: {
        0: {
            name: "Tiramisu",
            price: 17,
            ingredients: "Cocoa powder, mascarpone, sugar, marsala, coffee",
        },
        1: {
            name: "Angel food cake",
            price: 15,
            ingredients: "Cocoa powder, mascarpone, sugar, marsala, coffee",
        },
        2: {
            name: "Apple and butterscotch pie",
            price: 20,
            ingredients: "Cocoa powder, nutmeg, sugar, syrup, apples,",
        },
        3: {
            name: "Mangomisu",
            price: 22,
            ingredients: "vanilla , mascarpone, sugar, juice,  mangoes",
        },
        4: {
            name: "Tiramisu",
            price: 17,
            ingredients: "Cocoa powder, mascarpone, sugar, marsala, coffee",
        },
        5: {
            name: "Angel food cake",
            price: 15,
            ingredients: "Cocoa powder, mascarpone, sugar, marsala, coffee",
        },
        6: {
            name: "Apple and butterscotch pie",
            price: 20,
            ingredients: "Cocoa powder, nutmeg, sugar, syrup, apples,",
        },
        7: {
            name: "Mangomisu",
            price: 22,
            ingredients: "vanilla , mascarpone, sugar, juice,  mangoes",
        },
    },
    drinks: {
        0: {
            name: "Old Fashioned",
            price: 17,
            ingredients: "whiskey, sugar cube, orange twist garnish",
        },
        1: {
            name: "Margarita",
            price: 15,
            ingredients: "tequila, cointreau, lime juice, salt",
        },
        2: {
            name: "Cosmopolitan",
            price: 20,
            ingredients: "vodka, Cointreau, lime juice, cranberry juice",
        },
        3: {
            name: "Negroni",
            price: 22,
            ingredients: "gin , Campari, sweet vermouth",
        },
        4: {
            name: "Moscow Mule",
            price: 22,
            ingredients: "vodka , ginger beer, lime juice",
        },
        5: {
            name: "Old Fashioned",
            price: 17,
            ingredients: "whiskey, sugar cube, orange twist garnish",
        },
        6: {
            name: "Margarita",
            price: 15,
            ingredients: "tequila, cointreau, lime juice, salt",
        },
        7: {
            name: "Cosmopolitan",
            price: 20,
            ingredients: "vodka, Cointreau, lime juice, cranberry juice",
        },
        8: {
            name: "Negroni",
            price: 22,
            ingredients: "gin , Campari, sweet vermouth",
        },
    }
}
const dishMenuNavigation = document.querySelector(".menu__menu-container");

renderMenu();

function renderMenu() {
    let selectedMenu = dishMenuNavigation.querySelector(".activate").id;
    let menuItemsObj = menu[selectedMenu];
    let menuLength = Object.keys(menuItemsObj).length;

    let menuColumns = document.querySelectorAll(".menu-content-column");
    menuColumns.forEach(e => e.innerHTML = "");

    let counter = 0;
    Object.values(menuItemsObj).forEach(e => {
        if (counter < menuLength / 2) {
            menuColumns[0].appendChild(crateMenuItems(e))
        } else {
            menuColumns[1].appendChild(crateMenuItems(e))
        }
        counter++;
    });
}

function crateMenuItems({name, price, ingredients}) {
    let div = document.createElement("div");
    div.classList.add("content-item");
    div.innerHTML = `<span class="content-item-name">
                            ${name}
                      </span>
                      <span class="content-item-price">
                            ${price}$
                      </span>
                      <span class="content-item-ingredients">
                            ${ingredients}
                      </span>
    `
    return div;
}

dishMenuNavigation.addEventListener("click", MenuHandler);

function MenuHandler(e) {
    if (e.target.classList.contains("menu-item")) {
        e.preventDefault();
        changeActivateMenu(e);
    }
}

function changeActivateMenu(e) {
    if (e.target.classList.contains("activate")) return;
    dishMenuNavigation.querySelector(".activate").classList.remove("activate");
    e.target.classList.add("activate");
    renderMenu();
}

/*========ContactForm=================*/
const contactForm = document.forms['contact-form']
contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    contactForm.reset();
    createPopupWindow();
})

function createPopupWindow() {
    let popupWindow = document.createElement("div");
    popupWindow.classList.add("pop-window");
    popupWindow.innerHTML = `
      <span class="tittle">Message sent</span>`

    document.body.insertAdjacentElement("afterbegin", popupWindow);
    setTimeout(() => {
        popupWindow.remove()
    }, 4000);
}

