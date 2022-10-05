window.onload = () => {
  const board = document.getElementById("board");
  const squares = board.querySelectorAll("div");
  const state = ["", "", "", "", "", "", "", "", ""];

  //Check for a winner
  const checkWinner = (state) => {
    //checking diagonal from top left
    if (state[0] == state[4] && state[4] == state[8] && state[0] != "") {
      return state[0];
    }

    //checking straight across the top row
    else if (state[0] == state[1] && state[1] == state[2] && state[0] != "") {
      return state[0];
    }

    //checking straight across the middle row
    else if (state[3] == state[4] && state[4] == state[5] && state[3] != "") {
      return state[3];
    }

    //checking straight across the bottom row
    else if (state[6] == state[7] && state[7] == state[8] && state[6] != "") {
      return state[6];
    }
    //checking diagonal from top right
    else if (state[2] == state[4] && state[4] == state[6] && state[2] != "") {
      return state[2];
    }

    //checking straight down the first column
    else if (state[0] == state[3] && state[3] == state[6] && state[0] != "") {
      return state[0];
    }

    //checking straight down the second column
    else if (state[1] == state[4] && state[4] == state[7] && state[1] != "") {
      return state[1];
    }
    //checking straight down the third column
    else if (state[2] == state[5] && state[5] == state[8] && state[2] != "") {
      return state[2];
    }
    return false;
  };

  //varibale of the next symbol to display
  let next = "X";

  //variable to control the flow of the game
  let play = true;

  //set class as square for each div in the game board
  for (const square of squares) {
    square.setAttribute("class", "square");

    //set X and O
    square.addEventListener("click", () => {
      if (play) {
        let result;
        //update the state of the game
        if (
          !square.classList.contains("X") &&
          !square.classList.contains("O")
        ) {
          state[Array.from(squares).indexOf(square)] = next;
          square.innerHTML = next;
          square.classList.add(next);
          if (next == "O") {
            next = "X";
          } else {
            next = "O";
          }

          //check for winner

          result = checkWinner(state);
         
          if (result != false) {
            play = false
            let status = document.getElementById("status");
            status.innerHTML = "Congratulations! " + result + " is the Winner!";
            status.classList.add("you-won");
          }
        }
      }
    });

    //Change look of the square on hover
    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    });

    //Restore the look of boths
    square.addEventListener("mouseout", () => {
      square.classList.remove("hover");
    });
  }

  let newGame = document.querySelector("button.btn");

  //reset game
  newGame.addEventListener("click", () => {
    play=true
    
    next = 'X'

    //reset state of the game
    for (let i = 0; i < 9; i++) {
      state[i] = "";
    }
 

    for (const square of squares) {
      //Remove X and O
      square.innerHTML = "";
      square.classList.remove("X");
      square.classList.remove("O");

      //Reset status message
      let status = document.getElementById("status");
      status.innerHTML =
        "Move your mouse over a square and click to play an X or an O.";
      status.classList.remove("you-won");
    }
  });
};
