console.log("Checking")

let password1 = document.getElementById("password");
let password2 = document.getElementById("password2");

console.log(password1)
console.log(password2) 

let button = document.querySelector(".account");

let error = document.getElementById("error");


button.addEventListener("click",(e)=>{
    console.log("event")
    if(password1.value == "" && password2.value == ""){
        error.textContent = ""
    } 
    
    if(password1.value === password2.value){
        error.style.color = "green";
        error.textContent = "*Passwords match";
    }else {
        error.style.color = "red";
        error.textContent = "*Passwords do not match";}
})

