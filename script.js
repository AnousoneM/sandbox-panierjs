// je créé une const qui va regrouper tous les boutons add-basket-btn
const basketBtnArray = document.querySelectorAll('.add-basket-btn');

basketBtnArray.forEach(function(button){
    button.addEventListener('click', addToBasket);
});

function addToBasket(){
    console.log(this)
    console.log(this.id)
}