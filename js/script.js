$(document).ready( function(){
    // Activacion slick-slider

    $(".slick-slider").slick({
       autoplay:true,
       slidestoshow: 1,
       slidestoscroll: 1,
       autoplayspeed: 2000,
       speed: 250,
       infinite: true,
       fade: true,
       arrows: true,
       dots: true,


    });
// Activación de transición del menú principal

  
$('nav#menu-principal a, nav#menu-responsive a').bind('click',function(event){
  var $anchor = $(this);  
  $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
  }, 1000,'easeOutExpo');
  event.preventDefault();
});



    
    // abrir y cerrar menú responsive

    $("#abrir").click(function(){
      $("#menu-responsive").animate({
        right: 0
      });

      $("#abrir").hide();
      $("#cerrar").show();

    });
     
    $("#cerrar").click(function( ){
      $("#menu-responsive").animate({
        right: -290
      });

      $("#cerrar").hide();
      $("#abrir").show();

    });
    


});