const gameDiv = document.querySelector('.gameDiv');

const grid = document.createElement('div');
grid.className = 'divGrid';
grid.id = 'divGrid';

function Game() {
    this.name = "Tic Tac Toe"
}

Game.prototype.GameBoard = function () {

    for (let i = 0; i < 9; i++) {
        const box = document.createElement('box');
        box.className = 'gridBox';
        box.id = i + "box";
        grid.appendChild(box);
    }
    gameDiv.appendChild(grid)
}

let playerArray = [];
let playerObjArray = [];

Game.prototype.Players = function () {

    const divPlayer = document.createElement('div');
    divPlayer.className = 'divPlayer';
    for (let i = 0; i < playerObjArray.length; i++) {

        const playerDiv = document.createElement('div');
        playerDiv.className ='playerDiv';
        divPlayer.appendChild(playerDiv);

        const player = document.createElement('span');
        player.className = 'player'
        player.id = playerObjArray[i].idNumber;
        const playerID = player.id;
        player.textContent = playerObjArray[i].name;
        playerDiv.appendChild(player);

        const tileDiv = document.createElement('div');
        tileDiv.className = 'tileDiv';
        playerDiv.appendChild(tileDiv);

        const x = document.createElement('span');
        x.id = playerArray[i] + 'id';
        x.className = 'tile';
        x.style.backgroundColor = 'white';
        x.style.color = 'black';
        x.textContent = "X";
        tileDiv.appendChild(x);

        const O = document.createElement('span');
        O.className = 'tile';
        O.id = playerArray[i] + 'id';
        O.style.backgroundColor = 'white';
        O.style.color = 'black';
        O.textContent = 'O';
        tileDiv.appendChild(O);

        const playerChangeName = document.createElement('span');
        playerChangeName.id = playerID;
        playerChangeName.textContent = "Change Name";
        playerDiv.appendChild(playerChangeName);
        playerChangeName.setAttribute('onclick', 'changeName(this.id);')
    }
    gameDiv.appendChild(divPlayer);
}


function Player(playerName) {
    this.name = playerName;
    this.idNumber = playerArray.length+1;
    playerArray.push(this.name);
}

Player.prototype = Object.create(Game.prototype);

const TicTacToe = new Game();

const player1 = new Player('Player1');
playerObjArray.push(player1);

const player2 = new Player('Player2');
playerObjArray.push(player2);

function changeName(id) {
    const result = playerObjArray.find(({idNumber}) => idNumber == id);
    const player = document.getElementById(result.idNumber);
    result.name = prompt("What is your Name?");
    player.textContent = result.name;   
}

TicTacToe.GameBoard();
TicTacToe.Players();