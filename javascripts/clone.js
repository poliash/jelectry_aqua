
$(window).load(function(){

    $('.meduzy').droppable({
    greedy: true,
    drop:function(event, ui) {
        ui.draggable.clone().appendTo($(this));
        ui.helper.data('dropped', true);
    }
});
});