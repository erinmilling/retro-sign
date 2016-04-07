var $btn = $('.btn');
var $lines = $('.lines-path')

$btn.on('click', function () {
  $lines.toggleClass('appear');
});
