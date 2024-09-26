// Takes multiple
function multiGreet(fnc,n){
    for(let i=1; i<=n; i++){
        fnc();
    }
}
let greet = function(){
    console.log("hello");
}
multiGreet(greet,5);


// Returns func
function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else{
        console.log("Wrong Request");
    }
}

oddEvenTest(request);