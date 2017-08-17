
function route(handle, pathname, request, response){
  if(typeof handle[pathname] === 'function'){
    handle[pathname](request, response);
  }
  else{
    response.writeHead(404,{"Content-Type":"text/html"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;