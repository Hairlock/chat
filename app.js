var socketio = io.connect("http://www.shorelandsrealestate.com:1337");

socketio.on("send_to_client", function(data) {
    console.log('message received');
    document.getElementById("chattext").innerHTML = ("<hr/>" + data['message'] + document.getElementById("chattext").innerHTML);
});

function send() {
    var msg = document.getElementById("chat_input").value;
    socketio.emit("send_to_server", { message : msg});
    console.log('sending message', msg);
}