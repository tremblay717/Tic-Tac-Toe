const gameDiv = document.querySelector('.gameDiv');

// const box = document.createElement('box')
// box.className= 'gridBox';
let gameArray = [];

const grid = document.createElement('div');
grid.className = 'divGrid';
grid.id = 'divGrid';

const box = document.createElement('box');
box.className = 'gridBox';


for (let i = 0; i < 9; i++) {
    const box = document.createElement('box');
    box.className = 'gridBox';
    box.id = i + "box";
    box.setAttribute('onclick', 'Game(this.id)');
    grid.appendChild(box);
    gameArray.push(box);
}

const Gameboard = {
    title: 'Tic Tac Toe',
    gameArray: gameArray
}

const tile = {
    x: 'X',
    o: 'O'
}


const playerOne = {
    name: 'Player One',
    playerOneText: function () {

        const playerOneText = document.createElement('p');
        playerOneText.className = 'player';
        playerOneText.textContent = playerOne.name;

        const tileDiv = document.createElement('div');
        tileDiv.className = 'tileDiv';
        playerOneText.appendChild(tileDiv);

        const x = document.createElement('span');
        x.id = 'playerOneX';
        x.className = 'tile';
        x.style.backgroundColor = 'white';
        x.style.color = 'black';
        x.textContent = tile.x;
        tileDiv.appendChild(x);

        const O = document.createElement('span');
        O.className = 'tile';
        O.id = 'playerOneO';
        O.style.backgroundColor = 'white';
        O.style.color = 'black';
        O.textContent = tile.o;
        tileDiv.appendChild(O);

        return gameDiv.appendChild(playerOneText);
    }
}

const playerTwo = {
    name: 'Player Two',
    playerTwoText: function () {

        const playerTwoText = document.createElement('p');
        playerTwoText.className = 'player';
        playerTwoText.textContent = playerTwo.name;

        const tileDiv = document.createElement('div')
        tileDiv.className = 'tileDiv';
        playerTwoText.appendChild(tileDiv)

        const x = document.createElement('span');
        x.id = 'playerTwoX';
        x.className = 'tile';
        x.style.backgroundColor = 'white';
        x.style.color = 'black';
        x.textContent = tile.x;
        tileDiv.appendChild(x);

        const O = document.createElement('span');
        O.className = 'tile';
        O.id = 'playerTwoO';
        O.style.backgroundColor = 'white';
        O.style.color = 'black';
        O.textContent = tile.o;
        tileDiv.appendChild(O);

        return gameDiv.appendChild(playerTwoText);
    }
}

playerOne.playerOneText();
gameDiv.appendChild(grid)
// Gameboard.gameBoard();
playerTwo.playerTwoText();

const playerOneX = document.getElementById('playerOneX');
const playerOneO = document.getElementById('playerOneO');

const playerTwoX = document.getElementById('playerTwoX');
const playerTwoO = document.getElementById('playerTwoO');

// Only player One can decide its symbol (X or O);
playerOneX.onclick = function () {

    if (playerTurn.length > 0) {
        return;
    } else if (playerOneO.style.color == 'red') {
        return;
    } else if (playerOneX.style.color == 'black') {
        playerOneX.style.color = "red";
        playerTwoO.style.color = "red";
    } else {
        playerOneX.style.color = "black";
        playerTwoO.style.color = "black";
    }
}

playerOneO.onclick = function () {
    if (playerTurn.length > 0) {
        return;
    } else if (playerOneX.style.color == 'red') {
        return;
    } else if (playerOneO.style.color == 'black') {
        playerOneO.style.color = "red";
        playerTwoX.style.color = "red";
    } else {
        playerOneO.style.color = "black";
        playerTwoX.style.color = "black";
    }
}

let playerTurn = []

function Game(id) {


    const tile = document.getElementById(id);

    if (tile.textContent != "") {
        return;
    } else {

        if (playerTurn.length == 0 || playerTurn[playerTurn.length - 1] == "p2") {

            if (playerOneX.style.color == "red") {
                tile.textContent = "X"

            } else if (playerOneO.style.color == "red") {
                tile.textContent = "O"
            }
            playerTurn.push('p1');

        } else if (playerTurn[playerTurn.length - 1] == "p1") {

            if (playerTwoX.style.color == "red") {
                tile.textContent = "X"

            } else if (playerTwoO.style.color == "red") {
                tile.textContent = "O"
            }
            playerTurn.push('p2');
        }
    }
}