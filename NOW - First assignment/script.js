const menuIcon = document.getElementById('mobile_menu');
let navBar = document.querySelector('.navbar_menu')

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('clicked');
    navBar.classList.toggle('active')
})