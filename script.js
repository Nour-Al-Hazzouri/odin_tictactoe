// Gameboard object for gameboard-related functionality
const Gameboard = (function () {
    // Board variables
    const gameBoard = [];
    const boardLength = 9;
    let markersPlaced = 0;
    // Markers
    const markerX = 'X';
    const markerO = 'O';
    // Players (hard-coded for now)
    const player1 = Player("Nour", markerX);
    const player2 = Player("Abdullah", markerO);
    return {
        // Reset all values in array
        resetBoard: () => {
            for (let i = 0; i < boardLength; i++) {
                if (!(gameBoard[i] === undefined)) {
                    gameBoard[i] = undefined;
                }
            }
        },
        logBoard: () => {
            let outputValue = '';
            for (let i = 0; i < boardLength; i++) {
                outputValue += ` ${gameBoard[i]} `
                if (i === 2 || i === 5 || i === 8) {
                    outputValue += '\n';
                }
            }
            console.log(outputValue);
        },
        // Log board index to prevent empty values
        logBoardIndex: (i) => {
            const boardValue = gameBoard[i];
            return boardValue;
        },
        logBoardLength: () => {
            const length = gameBoard.length;
            return length;
        },
        // Logic to insert marker in array, array termination, and array iteration with edge cases
        insertMarker: (index) => {
            if ((gameBoard[index] === undefined) && (index < boardLength && index >= 0)) {
                if (markersPlaced % 2 == 0) {
                    gameBoard[index] = player1.getMarker();
                    markersPlaced += 1
                } else {
                    gameBoard[index] = player2.getMarker();
                    markersPlaced += 1;
                }
            } else if ((gameBoard[index] !== undefined) && (index < boardLength && index >= 0)) {
                console.log("Spot Already Marked");
            } else if (index < boardLength && index >= 0) {
                console.log("Exceeded Board Limits");
            }
        }
    }
})();

// Player object for player-related functionality
function Player(playerName, playerMarker) {
    const getName = () => {
        return playerName;
    }
    const getMarker = () => {
        return playerMarker;
    }
    return { getName, getMarker };
}

const Game = (function () {
    return {
        start: () => {
            let boardTracker = 0;
            while ((boardTracker < 9)) {
                Gameboard.insertMarker(Game.randomValue());
                if (Gameboard.logBoardIndex(boardTracker) !== undefined) {
                    boardTracker += 1;
                }
            }

            Gameboard.logBoard();
        },
        restart: () => {
            Gameboard.resetBoard();
            Game.start();
        },
        randomValue: () => {
            const randomValue = Math.floor(Math.random() * (8 - 0 + 1)) + 0; // AI-Generated to test functionality
            return randomValue;
        },
        end: () => {
            // TODO
        }
    }
})();

Game.start();