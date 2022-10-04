window.onload = () =>{
    const board = document.getElementById('board')
    const squares = board.querySelectorAll('div')
    
    //set class as square for each div in the game board
    for(const square of squares){
        square.setAttribute('class', 'square')
    }
}


