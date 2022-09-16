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
            box.style.backgroundColor = "yellow"
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
    name: 'Player One',
    playerOneText: function () {

        const playerOneText = document.createElement('p');
        playerOneText.className = 'player';
        playerOneText.textContent = playerOne.name;

        const tileDiv = document.createElement('div')
        tileDiv.className = 'tileDiv';
        playerOneText.appendChild(tileDiv)

        const x = document.createElement('span');
        x.id = 'playerOneX'
        x.className = 'tile';
        x.style.backgroundColor= 'white';
        x.style.color='black';
        x.textContent = tile.x;
        tileDiv.appendChild(x);

        const O = document.createElement('span');
        O.className = 'tile';
        O.style.backgroundColor='white';
        O.style.color='black';
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
        x.className = 'tile';
        x.style.backgroundColor= 'white';
        x.style.color='black';
        x.textContent = tile.x;
        tileDiv.appendChild(x);

        const O = document.createElement('span');
        O.className = 'tile';
        O.style.backgroundColor='white';
        O.style.color='black';
        O.textContent = tile.o;
        tileDiv.appendChild(O);

        return gameDiv.appendChild(playerTwoText);
    }
}

playerOne.playerOneText();
Gameboard.gameBoard();
playerTwo.playerTwoText();

const playerOneX = document.getElementById('playerOneX')
