let rand, canvasPosition, canvasTop, canvasLeft;


let arr = ['png/bluebig.svg', 'png/sinbig.svg', 'png/greenbig.svg', 'png/pinkbig.svg'];

let arr_small = ['png/bluesmall.svg', 'png/sinsmall.svg', 'png/greensmall.svg', 'png/pinksmall.svg'];


$(document).ready(function(){

  $('.meduza2').mousemove(function(e) {
    console.log($(window).width(), $(window).width() <= 767);
    if ($(window).width() <= 767) {
      rand = Math.floor(Math.random() * arr_small.length);
      element = arr_small[rand]
      console.log('arr1');
    } else {
      rand = Math.floor(Math.random() * arr.length);
      element = arr[rand]
      console.log('arr2');
    }

    canvasPosition = this.getBoundingClientRect()
    canvasTop = canvasPosition.top
    canvasLeft = canvasPosition.left

    console.log(e.clientX - canvasLeft, e.clientY - canvasTop);

   let img = $("<img>").attr("src", element).css({
    "left": e.clientX - canvasLeft + "px",
    "top": e.clientY - canvasTop + "px",
    "position": "absolute"
  }).appendTo(".meduza2").fadeOut(10000);
  });

});




