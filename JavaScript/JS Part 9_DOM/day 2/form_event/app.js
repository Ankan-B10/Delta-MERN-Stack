let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("loading...");
    console.log("form submitted");
});