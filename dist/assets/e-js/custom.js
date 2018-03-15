
$(document).ready(function() {
$('.sidebar .nav-dropdown  .nav-dropdown-items li a').click(function(){
    $(this).parent().addClass('active');
    $(this).parent().removeClass('active');
  });

});

/*
    $('.nav .nav-item a').click(function(){
         $(this).parent().toggleClass('open');
    });
*/
