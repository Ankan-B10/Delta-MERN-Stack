const favMovie = "3 idiots";

let guess = prompt("Guess my favorite Movie - ");

while(guess != favMovie){
    if(guess == "quit"){
        console.log("You quit");
        break;
    }
    guess = prompt("Wrong guess, Please try again");
}
if(guess == favMovie){
    console.log("Congrates !");
}
