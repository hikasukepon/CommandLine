$(function () {
  $('#InputText').focus();
  $('#InputText').keypress(function (e) {
    if (e.which == 13) {
      setTimeout(function () {
        window.scroll(0, $(document).height());
      }, 0);
      var value = $(this).val();
      $(this).val('');
      $("#result").append("<span class='f'>$</span> " + value + "\n");
      $("#result").append("<span class='f'>&gt; </span>posted param\n");
      setTimeout(function () {
        $("#result").append("<span class='f'>&gt; </span>loading...\n");
      }, 500);
      $.post("api.php", {
          "postMessage": value
        },
        function (data) {
          setTimeout(function () {
            if (data.output) {
              $("#result").append(data.output + "\n");
            } else {
              $("#result").append("<span style='color: red;'>" + data.error + "</span>\n");
            }
          }, 700);
        },
        "json"
      );
      return false;
    }
  });
});