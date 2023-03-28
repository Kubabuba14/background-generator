//VARIABLES FOR DOCUMENT SELECTORS

let css = document.getElementById("gradientTxt");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomise = document.getElementById("randomise");
let copyGrad = document.getElementById("copyBtn");

//FUNTION TO RANDOMISE COLOURS ON BACKGROUND AND BUTTONS
const setGradient = () => {
    let xyGradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    body.style.background = xyGradient;
    randomise.style.background = xyGradient;
    css.style.background = xyGradient;
    copyGrad.style.background = xyGradient;
    
    css.textContent = `(${color1.value}, ${color2.value})`.toUpperCase();
}

//FUNCTION FOR RANDOM VALUES
// (1<<24) === 16777216   Math random gives a number between 0-1 
// 1<<24 gives 16777216 which gives all the posibilities of 24-bit colour.
// math.floor brings it to a integer number.
// toString converts the number to a 16 hex 0-9 a-f string. 
const randomGradient = () => {
    let randomColor1 = '#' + Math.floor((Math.random()*(1<<24)|0)).toString(16);
    let randomColor2 = '#' + Math.floor((Math.random()*(1<<24)|0)).toString(16);

    color1.value = randomColor1;
    color2.value = randomColor2;

    setGradient();
    css.textContent = xyGradient.toLocaleUpperCase();
}

//  COPY FUNCTION ON BUTTON

const copyText = () => {
    let copyText = css;
    copyText.select();
    navigator.clipboard("copy")
}

// Execution

document.querySelector("#copyBtn").addEventListener("click", copyText);
window.onload = setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomise.addEventListener("click", randomGradient);



