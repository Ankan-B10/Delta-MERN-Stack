let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("div was clicked");
});

ul.addEventListener("click", function(){
    console.log("ul was clicked");
});

for(li of list){ // for loop because we want to acess everyone
    li.addEventListener("click", function(event){
        // to stop event_bubling we use stopPropagation
        event.stopPropagation();
        console.log("li was clicked");
    });
}
