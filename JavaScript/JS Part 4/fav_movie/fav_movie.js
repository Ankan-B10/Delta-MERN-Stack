const favMovie = "3 idiots";
let guess = prompt("Guess my favorite Movie - ");
while((guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong guess, Please try again");
}
if(guess == favMovie){
    console.log("Congrates !");
}
else{
    console.log("You quit");
}
