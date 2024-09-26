function outer(){
    let x = 5;
    let y = 10;
    function inner(){
        console.log(x);
    }
    inner();
}
outer();