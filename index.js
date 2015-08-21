var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.1.100');

var homeduinoBoard= require('homeduino').Board;
var board = new homeduinoBoard("serialport",{
	serialDevice :"/dev/ttyUSB1",
	baudrate: 115200 }
	);

board.connect(60000).then(function () {
	console.log('connected');
	board.rfControlStartReceiving(0).then(function () {
		console.log('receiving....');
	})
});
board.on('rf',function (event) {
	console.log('RF received');
	console.log(event.protocol + ' : ' + JSON.stringify(event.values));
	//client.publish('home/nas/443/'+ event.protocol,event.values);
});
