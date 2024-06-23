let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let showuserScore = document.querySelector("#user-score");
let showcompScore = document.querySelector("#comp-score");
let newBtn = document.querySelector(".new-btn");


let userScore = 0;
let compScore = 0;


let playGame = (userChoice,compChoice) =>{

        

    if(userChoice == compChoice){
       drawMatch();
        }else{
            let userWin = true;
            if(userChoice == "stone"){
                //comp - paper,scissor
                userWin = compChoice == "paper" ? false : true;
            }else if(userChoice == "paper"){
                //comp- stone,scissor
                userWin = compChoice == "stone" ? true : false;
            }else{
                //user - scissor
                //comp - stone,paper
                userWin = compChoice == "stone" ? false : true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
       
    
}

let drawMatch = () =>{
    msg.innerText = "match draw , try again";
    msg.style.backgroundColor = "rgb(24, 23, 46)";
}

let showWinner = (userWin,userChoice,compChoice) =>{
    
    if(userWin){
        msg.innerText = `you win! , ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
        userScore += 1 ;
        showuserScore.innerText = userScore ;

    }else {
        msg.innerText = `you lost! , ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor = "red";
        compScore += 1 ;
        showcompScore.innerText = compScore ;

    }
}

choices.forEach((choice)=>{
    let userChoice = choice.getAttribute("id")
    choice.addEventListener("click",() =>{
        playGame(userChoice,compChoice());
    })
})


let compChoice = () =>{
    let option = ["stone","paper","scissors"];
    let randomidx = Math.floor(Math.random() * 3); //to print value from 0 to 2
    return option[randomidx];
}

let resetGame = () =>{
    showuserScore.innerText = 0;
    showcompScore.innerText = 0;
    userScore = 0 ;
    compScore = 0 ;
    msg.innerText = "play your game"
    msg.style.backgroundColor = "rgb(24, 23, 46)"
}

newBtn.addEventListener("click",resetGame);
