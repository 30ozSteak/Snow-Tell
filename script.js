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


// add to cart / remove from cart animations on click 
$('.add-to-cart').click(function(){
    $(this).closest('.product-card').find('.cart-overlay').animate({bottom: '0'})
  })

$('.undo-add').click(function(){
  $(this).closest('.product-card').find('.cart-overlay').animate({bottom: 480})
});
