$(function(){
    var scroll = $(document).scrollTop();
    var navHeight = $('.navBar').outerHeight();

    $(window).scroll(function(){
    var scrolled = $(document).scrollTop();
    if(scrolled > navHeight){
    $('.navBar').addClass('animate');
    }
    else{
    $('.navBar').removeClass('animate');
    }
    if(scrolled > scroll){
        $('.navBar').removeClass('sticky');
    }
    else{
        $('.navBar').addClass('sticky');
    }
    scroll = $(document).scrollTop();
    })
})
    