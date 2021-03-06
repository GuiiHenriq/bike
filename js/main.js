// Slide
$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4300,          // Integer: Time between slide transitions, in milliseconds
  });

  $(".rslides_portfolio").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
  });



// Animacoes
Visibility.onVisible(function(){
  setTimeout(function () {
    $(".introducao h1").addClass("animated fadeInDown");
  }, 400);
  setTimeout(function() {
    $(".introducao blockquote").addClass("animated fadeInDown");
  }, 800);
  setTimeout(function() {
    $(".introducao .btn").addClass("animated fadeInDown");
  }, 1200);

  setTimeout(function () {
    $(".animar").addClass("animated fadeInDown");
  }, 1400);

  setTimeout(function () {
    $(".introducao_interna h1").addClass("animated fadeInDown");
  }, 400);
  setTimeout(function () {
    $(".introducao_interna p").addClass("animated fadeInDown");
  }, 800);
  setTimeout(function () {
    $(".animar-interno").addClass("animated fadeInDown");
  }, 1200);
})