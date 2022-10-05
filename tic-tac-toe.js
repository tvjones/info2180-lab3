window.onload = () =>{
    const board = document.getElementById('board')
    const squares = board.querySelectorAll('div')
    const state = ["","","","","","","","",""]
    
    
    //varibale of the next symbol to display
    let next = 'X'

    //set class as square for each div in the game board
    for(const square of squares){
        square.setAttribute('class', 'square')
        
        
        //set X and O
        square.addEventListener('click',()=>{
            square.innerHTML = next
            square.classList.add(next)
            console.log(squares)
            state[(Array.from(squares)).indexOf(square)] = next
            if (next == 'X'){
                next = 'O'
            }
            else{
                next = 'X'
            }
        })

        //Change look of the square on hover
        square.addEventListener("mouseover",()=>{
            square.classList.add('hover')
        })

        //Restore the look of boths
        square.addEventListener("mouseout",()=>{
            square.classList.remove('hover')
        })
    }

    
    
}


