$(document).ready(function() {
    
    var menuButton = $(".menu-btn");

    menuButton.on("click", function(e) {

        // Отменяется переход по ссылке
        e.preventDefault(); 

        menuButton.toggleClass("click");

        $(".menu-nav").toggleClass("active");
    });

});