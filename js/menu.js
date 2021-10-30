let menubtn = document.getElementById('menubtn');

menubtn.addEventListener('click', function() {
    let menu = document.querySelector('.menu-section');
    menu.classList.toggle('activemenu');
});