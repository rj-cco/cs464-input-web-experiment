$(document).keypress(
  function(event){
    if (event.which == 13) {
      event.preventDefault();
    }
});
$(document).on('keydown', function (e) {
    if (e.keyCode == 8  || e.keyCode == 46) {
        e.preventDefault();
    }
});
$(document).on('keyup', function (e) {
    if (e.keyCode == 8  || e.keyCode == 46) {
        e.preventDefault();
    }
});
