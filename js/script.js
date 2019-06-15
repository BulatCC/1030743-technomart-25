//всплывающее окно "обратная связь"    

var button = document.querySelector(".contacts-button");
var modal = document.querySelector(".modal-write-us");
var modalClose = document.querySelector(".modal-close");
var focus = modal.querySelector("[name=your-name]");
button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
    focus.focus();
});
modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal.classList.contains("modal-show")) {
            modal.classList.remove("modal-show");
        }
    }
});

//карта

var map = document.querySelector(".map");
var mapModal = document.querySelector(".modal-map");
var mapClose = mapModal.querySelector(".modal-close");
map.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.add("modal-show");
});
mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.remove("modal-show");
});

//всплывающее окно "товар добавлен в корзину"

var buy = document.querySelectorAll(".buy");
var buyModal = document.querySelector(".add-to-cart");
var buyClose = buyModal.querySelector(".modal-close");
buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyModal.classList.add("modal-show");
});
buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyModal.classList.remove("modal-show");
});
