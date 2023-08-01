console.log("welcome to Tic Tac Toe");

let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let isGameOver = false;
let turn = 'X';

//funtion to the turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}
//funtion to check the win
const checkWin = () => {
    let boxTxt = document.getElementsByClassName('boxtxt');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    win.forEach(e =>{
        if ((boxTxt[e[0]].innerText === boxTxt[e[1]].innerText) && (boxTxt[e[2]].innerText === boxTxt[e[1]].innerText) && (boxTxt[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = "Player " +boxTxt[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = '150px';
            return;
        }
    })
}

// Game Decision
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxTxt = element.querySelector('.boxtxt');
    element.addEventListener('click', () => {
        if (boxTxt.innerText === '') {
            boxTxt.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }
        }
    })
})

// reset btn
let reset = document.getElementById('btn');
reset.addEventListener('click',()=>{
    let boxTxt = document.querySelectorAll('.boxtxt');
    Array.from(boxTxt).forEach(element=>{
        element.innerText = '';
    })
    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width = '0px';
})