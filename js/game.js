let cells=document.querySelectorAll(".cell")
let status=document.querySelector(".game-status")
let restart=document.querySelector('h2')

let gameActive=true;
let currentPlayer="X";
let state=[0,0,0,0,0,0,0,0,0];
// 0 indicates that the cell has not been selected
// 1 will indicates ,cell selected

const winningMessage=()=>{return("Player "+currentPlayer +" won")};
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
// winningMessage()
status.innerHTML=currentPlayerTurn()


// Handling events
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick() {

}
function handleRestartGame() {
    gameActive=true;
    currentPlayer="X";
    state=[0,0,0,0,0,0,0,0,0];
    status.innerHTML=currentPlayerTurn();
    cells.forEach(cell=>cell.innerHTML="");
}

cells.forEach(cell=>cell.addEventListener('click',handleCellClick));
restart.addEventListener('click',handleRestartGame);