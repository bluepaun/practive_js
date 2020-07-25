const form = document.querySelector(".js-form"),
input = document.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
    greeting.classList.add(SHOWING_CN)
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();