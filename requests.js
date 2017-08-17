var mazestring = require('./maze.js');
var index = function(request, response){
  response.end("hola servidor js")
};

var maze = function(request, response){
  response.statusCode  = 200;
  response.end(mazestring.labString);
};

var manuela = function(request, response){
  var message = "Hola Manuela";
  response.statusCode  = 200;
  response.end(message);
};

var camilo = function(request, response){
  var message = "Hola Camilo";
  response.statusCode  = 500;
  response.end(message);
};

var html = function(request, response){
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write("<h1>El servidor funciona correctamente</h1>");
  response.end();
};

exports.index = index;
exports.manuela = manuela;
exports.camilo = camilo;
exports.maze = maze;
exports.html = html;