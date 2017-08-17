var maze = require('nylira-maze');
var laberinto = maze(20, 20, 'growingtree:newest', 0.47, undefined, false);
var labString = renderMaze(laberinto)
console.log(labString);
exports.labString = labString

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