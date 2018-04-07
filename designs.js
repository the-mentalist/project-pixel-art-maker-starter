var color = '#000';
var paint = false;
// when size is submitted grid is formed
$('#sizePicker').submit(function(event){
	event.preventDefault();
	let rows=$('#inputHeight').val();
	let cols=$('#inputWeight').val();
	let canvas = $('#pixelCanvas');
	canvas.empty();
	for(let i=0; i<rows; i++){
		canvas.append('<tr></tr>');
		let lastRow = $('#pixelCanvas tr:last-child');
		for(let j=0; j<cols; j++){
			lastRow.append('<td></td>');
		}
	}
});

// change head color based on picker
$('#colorPicker').change(function(){
	color = $(this).val();
	$('.headText').css('color', color);
});

// event delegation on table and its elements
$('#pixelCanvas').on('click','td', function(){
	if(paint){
		paint = false;
	} else {
		paint = true;
	}
	$(this).css('background', color);
	}).on('mouseover', 'td', function(){
		if(paint){
			$(this).css('background', color);
		}
	});