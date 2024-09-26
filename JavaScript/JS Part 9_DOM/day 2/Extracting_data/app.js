let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let password = document.querySelector("#pass");
//     console.dir(user.value);
//     console.dir(password.value);
//     alert(`Hi ${user.value}, your password is set to ${password.value}`);
// });

///or

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.dir(form);
    let user = this.elements[0]; // form.elements
    let password = this.elements[1]; //by elements we didn,t need give extra id to html

    console.dir(user.value);
    console.dir(password.value);
    alert(`Hi ${user.value}, your password is set to ${password.value}`);
});