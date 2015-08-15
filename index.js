var homeduino = require('homeduino');
var board = new homeduino.Board('/dev/ttyUSB0', 115200);

board.connect(function () {
	console.log('connected');
	board.rfControlStartReceiving(0).then(function () {
		console.log('receiving....');
	})
});
board.on('rf',function (event) {
	console.log('RF received');
	console.log(event.protocol + ' : ' + event.values);
});