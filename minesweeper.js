document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {cells:[]};
/*var board = {
   cells: [ {row: 0, col: 0, isMine: false, isMarked: false, hidden:true},
            {row: 0, col: 1, isMine: false, isMarked: false, hidden:true,  surroundingMines: 1}, 
            {row: 0, col: 2, isMine: true, isMarked: false, hidden:true},
            {row: 1, col: 0, isMine: false, isMarked: false, hidden:true,  surroundingMines: 1},
            {row: 1, col: 1, isMine: false, isMarked: false, hidden:true,  surroundingMines: 2}, 
            {row: 1, col: 2, isMine: false, isMarked: false, hidden:true,  surroundingMines: 2}, 
            {row: 2, col: 0, isMine: false, isMarked: false, hidden:true,  surroundingMines: 1},
            {row: 2, col: 1, isMine: true, isMarked: false, hidden:true}, 
            {row: 2, col: 2, isMine: false, isMarked: false, hidden:true,  surroundingMines: 1}
          ]
 
 }*/
var size = 3; 
 for(var i = 0; i < size; i++ ){
  for(var  j = 0; j < size; j ++ ){
    board.cells.push({
      row: i, 
      col: j, 
      isMine : Math.random() < 0.22, 
      isMarked: false, 
      hidden:true,
      surroundingMines : 0
    })
 }
}
 
 
function startGame () {
  // Don't remove this function call: it makes the game work!

  for (i = 0; i++; i<4) {
    board.cells[i]
  }

  for(var i = 0; i < board.cells.length; i ++) {
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  document.addEventListener("click", checkForWin);
  document.addEventListener("contexmenu", checkForWin);
  lib.initBoard()
}
 


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  //alert ("Hello World!");
  for(var i = 0; i < board.cells.length; i ++) {
    if (board.cells[i].isMine && board.cells[i].isMarked) {
      return;
      }
    else if (!board.cells[i].isMine  && board.cells[i].hidden) {
      return;
    }
  }
 
  //winningSound();
  lib.displayMessage('You win!')

}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);

  var count = 0;
  for(var i = 0; i < surroundingCells.length; i++)
    if(surroundingCells[i].isMine)
      count++;

  return count;
}


