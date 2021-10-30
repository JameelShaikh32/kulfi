let menu = document.querySelector('.menu-section');
let menubtn = document.getElementById('menubtn');
let closebtn = document.getElementById('close');

menubtn.addEventListener('click', function() {
    menu.classList.toggle('activemenu');
});

closebtn.addEventListener('click', function() {
    if (menu.classList == 'menu-section activemenu') {
        menu.classList = 'menu-section';
    } else {
        menu.classList = 'menu-section activemenu';
    }
});