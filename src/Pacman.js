import {  squares } from "./Game.js";

export let pacmanCurrentIndex = 486;
export let score = 0
const scoreDisplay = document.querySelector('.score')

//move pac-man
export default function movePacman(e, squares, width) {
    const currentIndex = pacmanCurrentIndex; // Create a local variable for current index
    squares[currentIndex].classList.remove('pac-man');

    switch (e.keyCode) {
        //left
        case 37:
        case 65:
            if (currentIndex % width !== 0 && !squares[currentIndex - 1].classList.contains('wall') && !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')) {
                pacmanCurrentIndex = currentIndex - 1;
            }
            break;
        //right
        case 39:
        case 68:
            if (currentIndex % width < width - 1 && !squares[currentIndex + 1].classList.contains('wall')  && !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')) {
                pacmanCurrentIndex = currentIndex + 1;
            }
            break;
        //Up
        case 38:
        case 87:
            if (currentIndex - width >= 0 && !squares[currentIndex - width].classList.contains('wall') && !squares[currentIndex - width].classList.contains('ghost-lair')) {
                pacmanCurrentIndex = currentIndex - width;
            }
            break;
        //Down
        case 40:
        case 83:
            if (currentIndex + width < width * width && !squares[currentIndex + width].classList.contains('wall') && !squares[currentIndex + width].classList.contains('ghost-lair')) {
                pacmanCurrentIndex = currentIndex + width;
            }
            break;
    }
    squares[pacmanCurrentIndex].classList.add('pac-man');


    pacDotEaten()
    // powerPelletEaten()
    // checkForGameOver()
    // checkForWin()
}


//when pacman eats dot
function pacDotEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        score++
       scoreDisplay.innerHTML = score
       squares[pacmanCurrentIndex].classList.remove('pac-dot')
       squares[pacmanCurrentIndex].classList.add('empty')
    }
}