var express = require("express");
var bodyParser = require("body-parser");

var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));

server.get("/", function(req, res){
	res.sendFile("/main.html", {root: "./public/home"})
});


var port = 80;
server.listen(port, function(){
  console.log('Server running on port ' + port);
})	