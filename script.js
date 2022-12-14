AOS.init();
var rellax = new Rellax('.rellax');
const scrollingElement = (document.scrollingElement || document.body);
document.getElementById('btn-scroll').addEventListener('click', function () {
    $(scrollingElement).animate({
        scrollTop: document.body.scrollHeight,
     }, 1200);
})