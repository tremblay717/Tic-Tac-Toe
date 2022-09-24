const gameDiv = document.querySelector('.gameDiv');

const grid = document.createElement('div');
grid.className = 'divGrid';
grid.id = 'divGrid';

function Game() {
    this.name = "Tic Tac Toe"
}

Game.prototype.GameBoard = function() {

    for (let i = 0; i < 9; i++) {
        const box = document.createElement('box');
        box.className = 'gridBox';
        box.id = i + "box";
        grid.appendChild(box);
    }
    gameDiv.appendChild(grid)
}

let playerArray = [];

Game.prototype.Players = function() {

    const divPlayer = document.createElement('div');
    divPlayer.className = 'divPlayer';
    for (let i = 0; i < playerArray.length; i++) {
        const player = document.createElement('span');
        player.id = playerArray[i]
        player.textContent = playerArray[i];
        
        const tileDiv = document.createElement('div');
        tileDiv.className = 'tileDiv';
        player.appendChild(tileDiv);

        const x = document.createElement('span');
        x.id = playerArray[i]+'id';
        x.className = 'tile';
        x.style.backgroundColor = 'white';
        x.style.color = 'black';
        x.textContent = "X";
        tileDiv.appendChild(x);

        const O = document.createElement('span');
        O.className = 'tile';
        O.id = playerArray[i]+'id';
        O.style.backgroundColor = 'white';
        O.style.color = 'black';
        O.textContent = 'O';
        tileDiv.appendChild(O);

        divPlayer.appendChild(player);

        const playerChangeName = document.createElement('span');
        playerChangeName.id = 'ChangeName_' + i;
        playerChangeName.textContent = "Change Name";
        player.appendChild(playerChangeName);
        playerChangeName.setAttribute('onclick', 'changeNameTwo(this.playerText);')

    }
    gameDiv.appendChild(divPlayer);
}

function Player(playerName) {
    this.name = playerName;
    playerArray.push(this.name);
}

Player.prototype = Object.create(Game.prototype);

const TicTacToe = new Game();  
const player1 = new Player('Player1');
const player2 = new Player('Player2');

TicTacToe.GameBoard();
TicTacToe.Players();
