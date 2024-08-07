let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('menu-active')
    searchForm.remove('active')
    cartItem.classList.remove('active')
};

document.querySelector('#search-btn').onclick = () => {
    // console.log(2)
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
};



document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.remove('active')
    
};
window.onscroll = ()=>{
    navbar.classList.remove('active')
    searchForm.remove('active')
    cartItem.classList.remove('active')
}