// Função para navegação suave ao clicar nos links da barra de navegação
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

// Função para animar as seções ao rolar a página
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

// Função para inicializar o carrossel de imagens
$(document).ready(function(){
  $('.carousel').carousel();
});

// Efeito Parallax
$(window).scroll(function() {
  var scroll = $(this).scrollTop();
  $('.parallax-bg').css({
      'background-position-y': -(scroll / 2) + 'px'
  });
});

// Contador de Animação
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


// Animações ao Scroll
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  $('section').each(function(i) {
    if ($(this).position().top <= scrollDistance) {
      $('.navbar-nav a.active').removeClass('active');
      $('.navbar-nav a').eq(i).addClass('active');
    }
  });
}).scroll();
