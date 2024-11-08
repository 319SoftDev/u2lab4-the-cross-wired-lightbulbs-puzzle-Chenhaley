// YOUR CODE HERE
console.log("Script Running.");

// YOUR CODE HERE
console.log("Script Running.");

const switch1 = document.querySelector("#switch1");
const switch2 = document.querySelector("#switch2");
const switch3 = document.querySelector("#switch3");
const switch4 = document.querySelector("#switch4");
const switch5 = document.querySelector("#switch5");
const switch6 = document.querySelector("#switch6");
const switch7 = document.querySelector("#switch7");
const switch8 = document.querySelector("#switch8");
const switch9 = document.querySelector("#switch9");

let godSwitch = [switch1, switch2, switch3, switch4, switch5, switch6, switch8, switch9]
//1
const change38 = () => {
    const light3 = document.querySelector("#lightbulb3");
    const light8 = document.querySelector("#lightbulb8");

    light3.classList.toggle("active");
    light8.classList.toggle("active");
}
//2
const change39 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light7 = document.querySelector("#lightbulb7");

    light1.classList.toggle("active");
    light7.classList.toggle("active");
}
//3
const change40 = () => {
    const light4 = document.querySelector("#lightbulb4");
    const light6 = document.querySelector("#lightbulb6");
    const light8 = document.querySelector("#lightbulb8");

    light4.classList.toggle("active");
    light6.classList.toggle("active");
    light8.classList.toggle("active");
}
//4
const change41 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light9 = document.querySelector("#lightbulb9");
    

    light2.classList.toggle("active");
    light9.classList.toggle("active");
    
}
//5
const change42 = () => {
    const light5 = document.querySelector("#lightbulb5");
    

    light5.classList.toggle("active");
    
}
//6
const change43 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light4 = document.querySelector("#lightbulb4");
    

    light1.classList.toggle("active");
    light4.classList.toggle("active");
    
}
//7
const change44 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light3 = document.querySelector("#lightbulb3");
    

    light2.classList.toggle("active");
    light3.classList.toggle("active");
    
}
//8
const change45 = () => {
    const light5 = document.querySelector("#lightbulb5");
    const light9 = document.querySelector("#lightbulb9");
    

    light5.classList.toggle("active");
    light9.classList.toggle("active");
    
}
//9
const change46 = () => {
    const light6 = document.querySelector("#lightbulb6");
    const light7 = document.querySelector("#lightbulb7");
    

    light6.classList.toggle("active");
    light7.classList.toggle("active");
    
}

const change0 = () => {
    let godSwitch = [switch1, switch2, switch3, switch4, switch5, switch6, switch8, switch9]
    
    godSwitch.classList.toggle("active");
}

switch1.addEventListener('change', change38);
switch2.addEventListener('change', change39);
switch3.addEventListener('change', change40);
switch4.addEventListener('change', change41);
switch5.addEventListener('change', change42);
switch6.addEventListener('change', change43);
switch7.addEventListener('change', change44);
switch8.addEventListener('change', change45);
switch9.addEventListener('change', change46);
godSwitch.addeventListenr('change', change0);
