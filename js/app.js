$(function() {
  $lightbox = $('.lightbox');
  $lightbox.hide();
  //create an overlay background
  $('.quizbutton').click(function() {

    $lightbox.show();
  });
  $('.close').click(function() {
      $lightbox.hide();
  });
});
