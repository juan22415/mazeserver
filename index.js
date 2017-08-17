const http = require('http');
const url = require('url');
const fs = require('fs');
const router = require('./router');
const requests = require('./requests');
const port = 8888;

var routes = {};
routes['/'] = requests.index;
routes['/manuela'] = requests.manuela;
routes['/camilo'] = requests.camilo;
routes['/maze'] = requests.maze;
routes['/html'] = requests.html;

const server = http.createServer((request, response) => {
  //Obtener ruta
  var pathname = url.parse(request.url).pathname;

  //Guardar registro
  var registry = fs.createWriteStream('registry.txt',{'flags':'a'});
  registry.write(pathname + '\n');

  //Ejecutar el enrutador para obtener la respuesta del servidor
  router.route(routes, pathname, request, response);
});

server.listen(port, (err) => {  
  if (err) {
    return console.log('Error:', err)
  }

  console.log(`Servidor escuchando en ${port}`)
})