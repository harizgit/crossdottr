$(document).ready(function () {

    var x = null;

    //Make element draggable
    $(".drag").draggable({
        helper: 'clone',
        cursor: 'move',
        tolerance: 'fit'
    });

    $("#droppable").droppable({
        drop: function (e, ui) {
            if ($(ui.draggable)[0].id != ""){
                x = ui.helper.clone();
                ui.helper.remove();
                x.draggable({
                    helper: 'original',
                    containment: '#droppable',
                    tolerance: 'fit'
                });
                x.resizable({
                    // maxHeight: 40,
                    minHeight: 40,
                    minWidth: 50
                });
                x.appendTo('#droppable');
            }
        }
    });

});


