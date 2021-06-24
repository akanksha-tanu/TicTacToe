let cells=document.querySelectorAll(".cell")
let status=document.querySelector(".game-status")
let restart=document.querySelector('.game-restart')

let gameActive=true;
let currentPlayer="X";
let state=["","","","","","","","",""];
// "" indicates that the cell has not been selected
// "X" or "0" will indicates ,cell selected
const winning=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const winningMessage=()=>{return("Player "+currentPlayer +" won")};
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
// winningMessage()
status.innerHTML=currentPlayerTurn()


// Handling events
function handleCellPlayed(cell,cellId) {

    state[cellId]=currentPlayer;
    // cell.innerHTML=`<h1>${currentPlayer}</h1>`;
    if(currentPlayer=="X")
        cell.innerHTML="<img src='../css/x.png'>";
    else
        cell.innerHTML="<img src='../css/o.png'>";

}

function handlePlayerChange() {

    currentPlayer= currentPlayer==="X"?"O":"X";
    status.innerHTML=currentPlayerTurn();

}

function handleResultValidation() {

    let won=false;
    for(let i=0;i<8;i++){
        const win=winning[i];
        // console.log(win)
        let first=state[win[0]];
        let second=state[win[1]];
        let third=state[win[2]];
        if(first==="" || second==="" || third==="")
        {  continue;}
        if(first===second && second===third){
            won=true;
            break;
        }
    }
    if(won){
        status.innerHTML=winningMessage();
        gameActive=false;
        return;
    }
    else{
        let draw=!state.includes("");
        if(draw){
            status.innerHTML=drawMessage();
            gameActive=false;
            return;
        }
    }

    handlePlayerChange();

}



function handleCellClick(event) {
    // console.log(event)
    const clickedCell=event.target;
    // console.log(typeof(clickedCell.getAttribute("id")));
    // const clickedCellId=parseInt(clickedCell.getAttribute("id"))
    const clickedCellId=clickedCell.getAttribute("id");
    // console.log(clickedCellId)
    if(state[clickedCellId]!=="" || !gameActive){
        return;
    }
    handleCellPlayed(clickedCell,clickedCellId);
    handleResultValidation();
}



function handleRestartGame() {
    gameActive=true;
    currentPlayer="X";
    state=["","","","","","","","",""];
    status.innerHTML=currentPlayerTurn();
    cells.forEach(cell=>cell.innerHTML="");
}


cells.forEach(cell=>cell.addEventListener('click',handleCellClick));
restart.addEventListener('click',handleRestartGame);
