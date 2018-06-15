function makeGrid() {

    console.log("make gird function is running")
    // dom variable selection

    var gridHeight = $('#inputHeight').val();
    var gridWidth = $('#inputWidth').val();
    var pixelCanvas = $('#pixelCanvas');

    // Remove any existing grid elements
    pixelCanvas.children().remove();

    // create rows loop

    for (var x = 0; x < gridHeight; x++) {
        pixelCanvas.append("<tr></tr>");
    }

    // define rows to add columsn to rows

    var rows;
    rows = $('tr');

    // add columns for each row 

    var y = 0;
    while (y < gridWidth) {
        rows.append("<td></td>");
        y++;
    }

    // select single pixel from pixel canvas for color change

    pixelCanvas.find('td').click(function() {
        var color = $("#colorPicker").val();
        $(this).attr('bgcolor', color);
    });

}


// Hitting submit clears settings and input user defined height and width 

$('input[type="submit"]').click(function(event) {

    event.preventDefault();
    makeGrid();
});