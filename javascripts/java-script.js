var clicked = false, move_started = false;

$(document).ready(function(){
    $(".meduza1").click(function(){
        if (clicked) {
            $(".flash").hide();
            clicked = false;
        } else {
            $(".flash").show();
            $(".flash").addClass("animated");
            clicked = true;            
       }
    });

    $('.flash').on(("animationend"), function(){
         $(this).removeClass("animated").addClass("none");
    });

    let rot3 = 0;
	$(".meduza1").click(function() {
			rot3 += 270;
			$(".flash").css("transform", `rotate(${rot3}deg)`)
	});
    
    $("body").mousemove(function(event) {
		let flash = $(".flash");
		let x = (flash.offset().left) + (flash.width() / 2);
		let y = (flash.offset().top) + (flash.height() / 2);
		let rad = Math.atan2(event.pageX - x, event.pageY - y);
		let rot = (rad * (180 / Math.PI) * -1) + 180;
		flash.css({
			'-webkit-transform': 'rotate(' + rot + 'deg)',
			'-moz-transform': 'rotate(' + rot + 'deg)',
			'-ms-transform': 'rotate(' + rot + 'deg)',
			'transform': 'rotate(' + rot + 'deg)'
		});

        if (!move_started) {
            move_started=true;

            $(function() {
                $( ".jelly3" ).draggable({
                    helper:"clone",
                    containment:"document"
                });
                
              } );
              $(function() {
                $( ".jelly3_1" ).draggable({
                    helper:"clone",
                    containment:"document"
                });
                
              } );
              $(function() {
                $( ".jelly3_2" ).draggable();
              } );
            $(function() {
                $( ".krug1" ).draggable();
              } );
            $(function() {
                $( ".krug2" ).draggable();
              } );
            $(function() {
                $( ".krug3" ).draggable();
              } );
            $(function() {
                $( ".krug4" ).draggable();
              } );
            $(function() {
                $( ".krug5" ).draggable();
              } );
              $(function() {
                $( ".krug6" ).draggable();
              } );
              $(function() {
                $( ".krug7" ).draggable();
              } );
              $(function() {
                $( ".krug8" ).draggable();
              } );
        }
 	});

    $( ".meduza4" ).droppable({
    drop: function( event, ui ) {
        $( "#new" ).removeClass("none").addClass( "mood" )
        $( "#new2" ).removeClass("none").addClass( "mood2" )          
        // $(ui.draggable).hide();
        $(".jelly4, .jelly4_1" ).removeClass("proba, proba2").addClass("nyam")
        $(ui.draggable).fadeOut(1000);

        $('.jelly4, .jelly4_1').on("animationend", function(){
        $(this).removeClass("nyam").addClass("proba, proba2")
        $( "#new" ).removeClass("mood").addClass( "none" )
        $( "#new2" ).removeClass("mood2").addClass( "none" )     
        });
    }
    
    });


    $(".meduza2").on("mousemove", function(e){
        $('.may').css({'top': e.clientY - 20, 'left': e.clientX - 20});
  });
   

      
});


