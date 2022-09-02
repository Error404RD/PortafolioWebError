function rotate() {
  var lastChild = $('.slider div:last-child').clone();
  /*$('#test').html(lastChild)*/
  $('.slider div').removeClass('firstSlide')
  $('.slider div:last-child').remove();
  $('.slider').prepend(lastChild)
  $(lastChild).addClass('firstSlide')
}

window.setInterval(function(){
  rotate()
}, 4000);
const string = "";
var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});