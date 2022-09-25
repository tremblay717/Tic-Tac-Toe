const gameDiv = document.querySelector('.gameDiv');
const grid = document.createElement('div');
grid.className = 'divGrid';
grid.id = 'divGrid';

let gameArray = [];

function Game(name) {
    this.name = name;
}

Game.prototype.GameBoard = function () {

    for (let i = 0; i < 9; i++) {
        const box = document.createElement('box');
        box.className = 'gridBox';
        box.id = i + "box";
        box.setAttribute('onclick', 'TicTacToe_Game(this.id)');
        grid.appendChild(box);
        gameArray.push(box);
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
        playerDiv.className = 'playerDiv';
        divPlayer.appendChild(playerDiv);

        const player = document.createElement('span');
        player.className = 'player';
        player.id = playerObjArray[i].idNumber;
        const playerID = player.id;
        player.textContent = playerObjArray[i].name;
        playerDiv.appendChild(player);

        const tileDiv = document.createElement('div');
        tileDiv.className = 'tileDiv';
        playerDiv.appendChild(tileDiv);

        const x = document.createElement('span');
        x.id = playerArray[i] + '_X_Id';
        x.className = 'tile';
        x.style.backgroundColor = 'white';
        x.style.color = 'black';
        x.textContent = "X";
        x.setAttribute('onclick', 'choicefunc(this.id)')
        tileDiv.appendChild(x);

        const O = document.createElement('span');
        O.className = 'tile';
        O.id = playerArray[i] + '_O_Id';;
        O.style.backgroundColor = 'white';
        O.style.color = 'black';
        O.textContent = 'O';
        O.setAttribute('onclick', 'choicefunc(this.id)')
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
    this.idNumber = playerArray.length + 1;
    playerArray.push(this.name);
}

Player.prototype = Object.create(Game.prototype);

let playerTurn = [];// We store in an array every time a player plays so we know who was the last one to play or that we cannot change our symbol while playing a gam

function choicefunc(id) {// Only player One can decide its symbol (X or O);

    const playerOneChoice = document.getElementById(id);
    const playerOneX = document.getElementById(playerArray[0] + '_X_Id');
    const playerOneO = document.getElementById(playerArray[0] + '_O_Id');
    const playerTwoX = document.getElementById(playerArray[1] + '_X_Id');
    const playerTwoO = document.getElementById(playerArray[1] + '_O_Id');

    if (id == (playerArray[0] + "_X_Id") || (id == playerArray[0] + "_O_Id")) {
        if (playerTurn.length > 0) {
            return;
        } else {
            if (playerOneChoice.style.color == 'blue') {
                return;
            } else if (playerOneChoice.style.color == 'black') {
                if (playerOneChoice == playerOneX) {
                    playerOneX.style.color = 'blue';
                    playerOneO.style.color = 'black';
                    playerTwoX.style.color = 'black';
                    playerTwoO.style.color = 'green';
                } else {
                    playerOneX.style.color = 'black';
                    playerOneO.style.color = 'blue';
                    playerTwoX.style.color = 'green';
                    playerTwoO.style.color = 'black';
                }
            }
        }
    }
}

function changeName(id) {//Function that allows player to change its name
    const result = playerObjArray.find(({
        idNumber
    }) => idNumber == id);
    const player = document.getElementById(result.idNumber);
    result.name = prompt("What is your Name?");
    player.textContent = result.name;
}

const lastSection = document.querySelector('.lastSection');
const endMessage = document.createElement('span');
const boxes = document.querySelectorAll('.gridBox');

function TicTacToe_Game(id) { // We call our Game Function when player One clicks on a tile

    const tile = document.getElementById(id);
    const playerOneX = document.getElementById(playerArray[0] + '_X_Id');
    const playerOneO = document.getElementById(playerArray[0] + '_O_Id');
    const playerTwoX = document.getElementById(playerArray[1] + '_X_Id');
    const playerTwoO = document.getElementById(playerArray[1] + '_O_Id');

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

        if (playerTurn[playerTurn.length - 1] == "p1") {
            endMessage.textContent = "Game over, " + playerObjArray[0].name + " won!"
        } else if (playerTurn[playerTurn.length - 1] == "p2") {
            endMessage.textContent = "Game over, " + playerObjArray[1].name + " won!"
        }
        lastSection.prepend(endMessage);
        playerTurn.push('end');
    } else if (playerTurn.length == 9) {
        endMessage.textContent = "Game over, it's a tie!";
        lastSection.prepend(endMessage);
        playerTurn.push('end');
    }
}

const resetButton = document.querySelector('button'); // Reset function - Allows players to start a new game

resetButton.onclick = function () {
    const boxes = document.querySelectorAll('box');

    const playerOneX = document.getElementById(playerArray[0] + '_X_Id');
    const playerOneO = document.getElementById(playerArray[0] + '_O_Id');
    const playerTwoX = document.getElementById(playerArray[1] + '_X_Id');
    const playerTwoO = document.getElementById(playerArray[1] + '_O_Id');
    const playerTilesArray = [playerOneX, playerOneO, playerTwoX, playerTwoO];

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
    }
    for (let i = 0; i < playerTilesArray.length; i++) {
        playerTilesArray[i].style.color = 'black';
    }
    endMessage.remove();
    playerTurn = [];
}

const TicTacToe = new Game('Tic Tac Toe'); //Creating our Tic Tac Toe Game

const player1 = new Player('Player1');//Creating Player1 and 2
playerObjArray.push(player1);

const player2 = new Player('Player2');
playerObjArray.push(player2);

TicTacToe.GameBoard(); // Calling our functions
TicTacToe.Players();