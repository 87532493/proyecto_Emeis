$(document).ready (function(){

    $(window).scroll(function(){
        if ($(this).scrollTop()> 0) {
            $('header').addClass('transicion');
            
        } else {
            $('header').removeClass('transicion');  
        }

    })

})