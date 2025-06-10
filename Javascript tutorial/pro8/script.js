let input=document.getElementById("input")
let btn=document.getElementById("btn")
let wrng=document.querySelector(".wrng")
let guesses=document.getElementById("guesses")

let answer=Math.floor(Math.random()*100)+1;
let numguesses=0;

btn.addEventListener("click",()=>{
    guessesNumber();
})
function guessesNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML="Enter between 1 to 100";
    }
    else{
        numguesses++;
        guesses.innerHTML="No. of guess:"+ numguesses;
        if(input.value>answer){
            wrng.innerHTML="You guessed high";
            input.value="";
        }
        else if(input.value<answer){
            wrng.innerHTML="You guessed low";
            input.value="";
        }
        else{
            wrng.innerHTML="Congrats you guessed correct";

            setTimeout(()=>{
                resetGame();
            },5000)
        }
    }
}
function resetGame(){
    numguesses=0;
    answer=Math.floor(Math.random()*100)+1;
    input.value="";
    guesses.innerHTML="No. of guess:0";
}