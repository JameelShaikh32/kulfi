// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//service section owl carousel
$(".product_owl-carousel").owlCarousel({
    autoplay: true,
    nav: true,
    loop: true,
    margin: 0,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        },
        991: {
            items: 4,
        },
    },
});