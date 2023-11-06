import movePacman, { pacmanCurrentIndex } from "./Pacman.js"
import createBoard from "./TileMap.js"
export  const squares = []




document.addEventListener('DOMContentLoaded',()=>{

    const grid = document.querySelector('.grid')
    const width = 28

  

    createBoard(squares,grid)

//starting position for pac-man


squares[pacmanCurrentIndex].classList.add('pac-man')



document.addEventListener('keyup', (e) => movePacman(e, squares,width));




})