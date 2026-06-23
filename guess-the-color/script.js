const colorCodeContainer = document.getElementById('color-code');
const optionContainer = document.getElementById('options-container');
const scoreContainer = document.getElementById('score');
let randomColor = null;
let score = 0;

function generateRandomNumberBetween(min,max){
    return min + Math.floor(Math.random() * (max - min + 1));
}


function generateRandomColorRGB() {
    const red = generateRandomNumberBetween(0,255);
    const green = generateRandomNumberBetween(0,255);
    const blue = generateRandomNumberBetween(0,255);

    // Add spaces after commas to match the browser's style formatting
    return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore() {
    score += 1;
    scoreContainer.innerText = score;
}

const ansIndex = generateRandomNumberBetween(0,5);

function validateResult(ele) {
    const selectedColor = ele.target.style.backgroundColor;
    // Now we can use a direct comparison!
    if(selectedColor === randomColor) {
        incrementScore();
    }
    else{
        score = 0;
    }
    window.localStorage.setItem("score" , score);
    startGame();
}

function startGame() {
    score = Number(window.localStorage.getItem('score')) ?? 0;
    scoreContainer.innerText = score;
    optionContainer.innerHTML = null;
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;

    for(let i = 0;i < 6; i++){
        const div = document.createElement("div");
        div.addEventListener("click",validateResult);
        div.style.backgroundColor = 
        i === ansIndex ? randomColor : generateRandomColorRGB();
        optionContainer.append(div);
    }
}

window.addEventListener("load" , () => startGame());
