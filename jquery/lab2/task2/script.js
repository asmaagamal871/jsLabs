$("#draggable").draggable();
$("#droppable").droppable({
    drop: function (event, ui) {
      $(".rabbit").hide( "clip");
    }
});

$(".rabbit").click(function () {
$(this).effect("shake");
});