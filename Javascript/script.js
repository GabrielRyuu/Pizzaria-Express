function applyCoupon() {
  const input = document.getElementById("coupon-code");
  const code = input.value.toUpperCase(); 

  if (code === "PIZZA2") {
    const popup = document.getElementById("promo-popup");
    popup.style.display = "block";
    input.value = ""; // Limpa o campo de entrada após aplicar o cupom
    // Você pode adicionar aqui qualquer outra ação que desejar ao aplicar o cupom com sucesso
  } else {
    const message = document.getElementById("message");
    message.innerHTML = "<p class='error'>Cupom inválido ou expirado.</p>";
    // Se preferir, pode adicionar uma lógica para remover a mensagem de erro após alguns segundos
  }
}

function closePopup() {
  const popup = document.getElementById("promo-popup");
  popup.style.display = "none";
}


$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$(window).scroll(function() {
  $('section').each(function(){
    var position = $(this).offset().top;
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();

    if (position < scrollPosition + windowHeight - 100) {
      $(this).addClass('active');
    }
  });
});


$(document).ready(function(){
  $('.carousel').carousel();
});


$(window).scroll(function() {
  var scroll = $(this).scrollTop();
  $('.parallax-bg').css({
      'background-position-y': -(scroll / 2) + 'px'
  });
});

 
$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
  }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});



$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  $('section').each(function(i) {
    if ($(this).position().top <= scrollDistance) {
      $('.navbar-nav a.active').removeClass('active');
      $('.navbar-nav a').eq(i).addClass('active');
    }
  });
}).scroll();
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const cardapioGallery = document.querySelector(".cardapio-gallery");
  let currentTranslate = 0;
  const step = 300; //

  prevButton.addEventListener("click", function () {
    if (currentTranslate < 0) {
      currentTranslate += step;
      cardapioGallery.style.transform = `translateX(${currentTranslate}px)`;
    }
  });

  nextButton.addEventListener("click", function () {
    const maxTranslate = -(cardapioGallery.children.length - 1) * step;
    if (currentTranslate > maxTranslate) {
      currentTranslate -= step;
      cardapioGallery.style.transform = `translateX(${currentTranslate}px)`; 
    }
  });
});



