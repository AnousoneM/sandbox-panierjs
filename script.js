// Je créé un tableau d'objets dans catalog
const catalog = [
    {
        "name": "Tournevis Turquoise",
        "ref": "0001",
        "description": "Tournevis ergonomique et très joli.",
        "img": "tournevis_001.jpg",
        "price": 5.5
    },
    {
        "name": "Tournevis Rouge",
        "ref": "0002",
        "description": "Tournevis rouge transportable.",
        "img": "tournevis_002.jpg",
        "price": 50
    }
];

// Je parcours mon array catalog, et à chaque passage de ligne du tableau, je stock la valeur dans product
catalog.forEach(function(product) {
    createProducts(product);
});

function createProducts(product) {
    // on créé notre const pour manipuler notre div products
    const products = document.getElementById('products');
    let div = document.createElement('div');
    // Je suis en mode faineant : j'utilise les magic quote pour écrire mon code html
    div.innerHTML =
        `<div class="card col" style="width: 18rem;">
            <img src="assets/img/${product.img}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <p class="card-title h5">${product.name}</p>
                <p class="card-text">Ref: ${product.ref}</p>
                <p class="card-text">${product.description}</p>
                <p class="card-text">${product.price}€</p>
                <a id="alexis" data-name="${product.name}" data-ref="${product.ref}" data-price="${product.price}"
                    data-img="${product.img}" data-description="${product.description}" href="#"
                    class="btn btn-primary add-basket-btn" data-toggle="modal" data-target="#myModal">Détails</a>
            </div>
        </div>`
        products.appendChild(div);
}


// je créé une const qui va regrouper tous les boutons add-basket-btn
const basketBtnArray = document.querySelectorAll('.add-basket-btn');

basketBtnArray.forEach(function (button) {
    button.addEventListener('click', function () {
        // on recupère tous les éléments du button à l'aide du this
        // et nous l'utilisons en paramètre de fonction
        writeInModal(this);
    });
});

// la fonction permet d'écrire une ligne dans le panier
// !!!!! attention !!!!! nous ne pouvons utiliser pas la variable "this "en paramètre de fonction
function addToBasket(button) {
    console.log(button.dataset.ref);
}


// La fonction nous permet d'écrire le contenu de la modal en fonction de l'élement : ici il s'agit du bouton
// le paramètre button de la fonction contient tous les attributs de this (Nous avons changé le nom pour plus de praticité)
function writeInModal(button) {
    // Je définis mes constantes pour pouvoir écrire dans ma modale
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    // J'écris dans mon html à l'aide de innerText
    modalTitle.innerText = button.dataset.name;
    modalDescription.innerText = button.dataset.description;
}