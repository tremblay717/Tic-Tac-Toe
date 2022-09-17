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
    } else if (playerOneO.style.color == 'blue') {
        return;
    } else if (playerOneX.style.color == 'black') {
        playerOneX.style.color = "blue";
        playerTwoO.style.color = "green";
    } else {
        playerOneX.style.color = "black";
        playerTwoO.style.color = "black";
    }
}

playerOneO.onclick = function () {
    if (playerTurn.length > 0) {
        return;
    } else if (playerOneX.style.color == 'blue') {
        return;
    } else if (playerOneO.style.color == 'black') {
        playerOneO.style.color = "blue";
        playerTwoX.style.color = "green";
    } else {
        playerOneO.style.color = "black";
        playerTwoX.style.color = "black";
    }
}


let lastSection = document.querySelector('.lastSection');

const endMessage = document.createElement('span');


let playerTurn = []

function Game(id) {

    const tile = document.getElementById(id);

    if (tile.textContent != "") {
        return;
    } else if (playerTurn[playerTurn.length - 1] == "end") {

        return;

    } else {

        if (playerTurn.length == 0 || playerTurn[playerTurn.length - 1] == "p2") {

            if (playerOneX.style.color == "blue") {
                tile.textContent = "X"

            } else if (playerOneO.style.color == "blue") {
                tile.textContent = "O"
            }
            tile.style.color = "blue"
            playerTurn.push('p1');

        } else if (playerTurn[playerTurn.length - 1] == "p1") {

            if (playerTwoX.style.color == "green") {
                tile.textContent = "X"

            } else if (playerTwoO.style.color == "green") {
                tile.textContent = "O"
            }
            tile.style.color = "green";
            playerTurn.push('p2');
        }

    }

    if (
        //1st row
        (gameArray[0].textContent == "X" && gameArray[1].textContent == "X" && gameArray[2].textContent == "X") ||
        (gameArray[0].textContent == "O" && gameArray[1].textContent == "O" && gameArray[2].textContent == "O") ||

        //2nd row
        (gameArray[3].textContent == "X" && gameArray[4].textContent == "X" && gameArray[5].textContent == "X") ||
        (gameArray[3].textContent == "O" && gameArray[4].textContent == "O" && gameArray[5].textContent == "O") ||

        //3rd row
        (gameArray[6].textContent == "X" && gameArray[7].textContent == "X" && gameArray[8].textContent == "X") ||
        (gameArray[6].textContent == "O" && gameArray[7].textContent == "O" && gameArray[8].textContent == "O") ||

        //1st column
        (gameArray[0].textContent == "X" && gameArray[3].textContent == "X" && gameArray[6].textContent == "X") ||
        (gameArray[0].textContent == "O" && gameArray[3].textContent == "O" && gameArray[6].textContent == "O") ||

        //2nd column
        (gameArray[1].textContent == "X" && gameArray[4].textContent == "X" && gameArray[7].textContent == "X") ||
        (gameArray[1].textContent == "O" && gameArray[4].textContent == "O" && gameArray[7].textContent == "O") ||

        //3rd column
        (gameArray[2].textContent == "X" && gameArray[5].textContent == "X" && gameArray[8].textContent == "X") ||
        (gameArray[2].textContent == "O" && gameArray[5].textContent == "O" && gameArray[8].textContent == "O") ||

        //diagonal left-right
        (gameArray[0].textContent == "X" && gameArray[4].textContent == "X" && gameArray[8].textContent == "X") ||
        (gameArray[0].textContent == "O" && gameArray[4].textContent == "O" && gameArray[8].textContent == "O") ||

        //diagonal right-left
        (gameArray[2].textContent == "X" && gameArray[4].textContent == "X" && gameArray[6].textContent == "X") ||
        (gameArray[2].textContent == "O" && gameArray[4].textContent == "O" && gameArray[6].textContent == "O")) {

        // lastSection.removeChild(resetButton);

        if (playerTurn[playerTurn.length - 1] == "p1") {

            endMessage.textContent = "Game Over, " + playerOne.name + " won!"
        }
        else if (playerTurn[playerTurn.length -1] == "p2"){
            endMessage.textContent = "Game Over, " + playerTwo.name + " won!"
        }

        lastSection.prepend(endMessage);
        playerTurn.push('end');

    }

}

const resetButton = document.querySelector('button');

resetButton.onclick = function () {
    const boxes = document.querySelectorAll('box');

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
    }

    const playerTilesArray = [playerOneX, playerOneO, playerTwoX, playerTwoO];

    for (let i = 0; i < playerTilesArray.length; i++) {
        playerTilesArray[i].style.color = 'black';
    }

    endMessage.remove();
    playerTurn = [];
}