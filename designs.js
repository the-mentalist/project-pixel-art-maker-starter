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
