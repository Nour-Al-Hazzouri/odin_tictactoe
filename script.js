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
        // Log board index to prevent empty values
        logBoard: (i) => {
            const boardValue = gameBoard[i];
            return boardValue;
        },
        // Logic to insert marker in array, array termination, and array iteration with edge cases
        insertMarker: (index) => {
            if (gameBoard[index] === undefined) {
                if (markersPlaced % 2 == 0) {
                    gameBoard[index] = player2.getMarker();
                    console.log(gameBoard[index]);
                    markersPlaced += 1
                    if (markersPlaced <= 3) {
                        Gameboard.checkResults();
                    }
                } else {
                    gameBoard[index] = player1.getMarker();
                    console.log(gameBoard[index]);
                    markersPlaced += 1;
                    if (markersPlaced <= 3) {
                        Gameboard.checkResults();
                    }
                }
            } else if ((gameBoard[index] === 'X') || (gameBoard[index] === 'O')){
                console.log("Spot Already Marked");
            } else {
                return
            }
        },
        checkResults: () => {
            if (
                (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) ||
                (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) ||
                (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) ||
                (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) ||
                (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) ||
                (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) ||
                (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ||
                (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])
            ) {
                console.log("Game ends!");
                Game.end();
            }
        }
    }
})();

// Player object for player-related functionality
function Player(playerName, playerMarker) {
    const name = playerName;
    const marker = playerMarker;
    const getName = () => {
        return name;
    }
    const getMarker = () => {
        return marker;
    }
    return { getName, getMarker };
}

const Game = (function () {
    return {
        start: () => {
            for (let i = 0; i < 9; i++) {
                Gameboard.insertMarker(i);
                if (Gameboard.logBoard(i) === undefined) {
                    i -= 1
                }
            }
        },
        restart: () => {
            Gameboard.resetBoard();
            Game.start();
        },
        end: () => {
            Gameboard.insertMarker(null);
            Gameboard.resetBoard();
        }
    }
})();

Game.start();
