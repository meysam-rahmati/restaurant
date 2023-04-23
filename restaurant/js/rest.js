let openMenu = document.querySelector('.fa-bars');
let closeMenu = document.querySelector('.fa-xmark');
let menu = document.querySelector('.menu');

openMenu.addEventListener('click' , function(){
    menu.style.right = '0'
    this.style.display = 'none'
})
closeMenu.addEventListener('click' , function(){
    menu.style.right = '-250px'
    openMenu.style.display = "inline"
}
)