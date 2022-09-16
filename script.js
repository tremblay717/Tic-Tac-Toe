const gameDiv = document.querySelector('.gameDiv');

// const box = document.createElement('box')
// box.className= 'gridBox';
let gameArray = [];

const Gameboard = {
    title: 'Tic Tac Toe',
    gameArray: gameArray,
    gameBoard: function () {

        const grid = document.createElement('div');
        grid.className = 'divGrid';
        grid.id = 'divGrid';

        const box = document.createElement('box');
        box.className = 'gridBox';

        for (let i = 0; i < 9; i++) {
            const box = document.createElement('box');
            box.className = 'gridBox';
            box.id = i + "box";
            grid.appendChild(document.createElement('box'));
            gameArray.push(box);
        }
        return gameDiv.appendChild(grid);
    }
}


const tile = {
    x: 'X',
    o: 'O'
}


const playerOne = {
    name: 'player One',
    playerOneText: function () {
        const playerOneText = document.createElement('p');
        playerOneText.className = 'player';
        playerOneText.textContent = playerOne.name;

        return gameDiv.appendChild(playerOneText);
    }
}

const playerTwo = {
    name: 'player Two',
    playerTwoText: function () {
        const playerTwoText = document.createElement('p');
        playerTwoText.className = 'player';
        playerTwoText.textContent = playerTwo.name;

        return gameDiv.appendChild(playerTwoText);
    }
}

playerOne.playerOneText();
Gameboard.gameBoard();
playerTwo.playerTwoText();