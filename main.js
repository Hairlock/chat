var http = require('http'),
	fs = require('fs'),
	express = require('express'),
	app = express();


var server = http.createServer(app);

server.listen(1337, function(){
	console.log('Server listening at port 1337');
});

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
	socket.on('send_to_server', function(data) {
		console.log('message received');
		io.sockets.emit("send_to_client",{ message: data["message"] });
	});
});