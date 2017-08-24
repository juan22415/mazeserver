var maze = require('nylira-maze');
var moment= require('moment');
var fechadehoy =  moment().format("YYYY-MM-DD");
const http = require('http');
const url = require('url');
const fs = require('fs');
//const router = require('./router');
//const requests = require('./requests');
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {

  var query = url.parse(request.url).query;
  var width = query.width;
  var height = query.height;

fs.readFile(fechadehoy+'.txt',function(err, content)
  {
    if(err || !content)
    {
      content = DoMaze(width,height);
      var Mazefile = fs.createWriteStream(fechadehoy+'.txt',{'flags':'a'});
      Mazefile.write(content);
      content=content.toString();
    }
  
    response.write(content);
    response.end(); 
  });

})

server.listen(port, (err) => {  
  if (err) {
    return console.log('Error:', err)
  }

  console.log(`Servidor escuchando en ${port}`)
})

function DoMaze (height , width)
{
  var CurrentMaze = maze(height, width, 'growingtree:newest', 0.47, undefined, false);
  var MazeString = renderMaze(CurrentMaze);
  return MazeString;
}

function renderMaze(grid) {
  var width = grid[0].length
  var height = grid.length
  
  // draw top border
  var response = '_'.repeat(width * 2 + 1) + '\n';

  // draw each line
  for(var y=0; y < height; y++) {
    response += '|';

    for(var x=0; x < width; x++) {
      switch(grid[y][x]) {
        /*se 1: slot  = '   N'; break
        case 2: slot  = '   S'; break
        case 3: slot  = '  NS'; break
        case 4: slot  = '   E'; break
        case 5: slot  = '  NE'; break
        case 6: slot  = '  SE'; break
        case 7: slot  = ' NSE'; break
        case 8: slot  = '   W'; break
        case 9: slot  = '  NW'; break
        case 10: slot = '  SW'; break
        case 11: slot = ' NSW'; break
        case 12: slot = '  EW'; break
        case 13: slot = ' NEW'; break
        case 14: slot = ' SEW'; break
        case 15: slot = 'NSEW'; break*/
        case 0:  response +=  '¦|'; break
        case 1:  response += '_|'; break
        case 2:  response += ' |'; break
        case 3:  response += ' |'; break
        case 4:  response += '__'; break
        case 5:  response += '__'; break
        case 6:  response += '  '; break
        case 7:  response += '  '; break
        case 8:  response += '_|'; break
        case 9:  response += '_|'; break
        case 10: response += ' |'; break
        case 11: response += ' |'; break
        case 12: response += '__'; break
        case 13: response += '__'; break
        case 14: response += '  '; break
        case 15: response += '  '; break
      }
    }
    response += '\n';
  }

  return response;
}
