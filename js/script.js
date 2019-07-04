$(function () {
    "use strict";
    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });
});

$(function () {
    "use strict";
    $("#schedule").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });
});


$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
});