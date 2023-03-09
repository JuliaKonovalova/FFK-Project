import "./styles/main.scss"



$(document).ready(function() {
    $('#eu-lang').click(function() {
        $('.main-ru').css('display', 'none');
        $('.main-eu').css('display', 'flex');
    });
    $('#ru-lang').click(function() {
        $('.main-ru').css('display', 'flex');
        $('.main-eu').css('display', 'none');
    });
});