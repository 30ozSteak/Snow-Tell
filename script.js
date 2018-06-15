//needs improving
$(window).on('scroll', function(){
  $('.sticky-nav').addClass('sticky');
  $('.non-sticky-nav').hide();
});

$('.fa-times-circle').on('click', function(){
  $('.non-sticky-nav').hide();
})

// Countdown Timer to time sale ends
var saleEndsDate = new Date("July 20, 2018 12:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = saleEndsDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

  document.querySelector('.sale-timer').innerHTML = "Sale ends: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// jQuery(document).ready(function($) {
// 	$('.buy').on('click', function(e) {
// 		e.preventDefault();
// 		$('.product-card').toggleClass('.cart-expanded');
// 	})
// });

$('add-to-cart').on('click', function(e){
  e.preventDefault();
  console.log('test');
  $('.added-to-cart').toggleClass('test-class');
})