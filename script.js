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
            if(i==3){
                const test = document.createElement('p');
                test.textContent = 'test'
                box.appendChild(test)
            }
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

        return gameDiv.appendChild(playerOneText);
    }
}

const playerTwo = {
    name: 'Player Two',
    playerTwoText: function () {
        const playerTwoDiv = document.createElement('div');
        const playerTwoText = document.createElement('p');
        playerTwoDiv.className = 'player';
        playerTwoText.textContent = playerTwo.name;
        playerTwoDiv.appendChild(playerTwoText)
        return gameDiv.appendChild(playerTwoDiv);
    }
}

playerOne.playerOneText();
Gameboard.gameBoard();
playerTwo.playerTwoText();
