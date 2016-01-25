$(function() {
  $lightbox = $('.lightbox');
  $lightbox.hide();
  //create an overlay background
  $('.quizbutton').click(function() {
    $lightbox.addClass('animated bounceIn');
    $lightbox.show();
  });
  $('.close').click(function() {
      $lightbox.hide();
  });
});
