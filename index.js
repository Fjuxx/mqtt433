var homeduinoBoard= require('homeduino').Board;
var board = new homeduinoBoard("serialport",{
	serialDevice :"/dev/ttyUSB1",
	baudrate: 115200 }
	);

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
