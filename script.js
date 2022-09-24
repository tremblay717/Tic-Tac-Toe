const gameDiv = document.querySelector('.gameDiv');

const grid = document.createElement('div');
grid.className = 'divGrid';
grid.id = 'divGrid';

function Game() {
    this.name = "Tic Tac Toe"
}

function gameBoard() {

    for (let i = 0; i < 9; i++) {
        const box = document.createElement('box');
        box.className = 'gridBox';
        box.id = i + "box";
        grid.appendChild(box);
    }
    gameDiv.appendChild(grid)
}

let playerArray = ['player1','player2'];

function players(){
 return;   
}


function player (playerName){
    this.name = playerName;
}

Game.prototype = new gameBoard();

const TicTacToe = new Game();
