$("#btn").on("click", function (e) {
    if ($("#txt").val()) {
      e.preventDefault();
      $("#task").append(`<div class="todo">
                                  ${$("#txt").val()}
                                  <button class="done">Done</button>
                                  <button class="del">Delete</button>
                              <div>`);
    }
  });
  
  $("#task").on("click", ".del", {}, function () {
    $(this).parent().remove();
  });
  $("#task").on("click", ".done", {}, function () {
    $(this).parent().addClass("don");
  });