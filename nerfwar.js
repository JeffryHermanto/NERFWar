var p1yang1000Button = document.querySelector("#p1yang1000");
var p2yang1000Button = document.querySelector("#p2yang1000");
var p1yang500Button = document.querySelector("#p1yang500");
var p2yang500Button = document.querySelector("#p2yang500");
var p1yang400Button = document.querySelector("#p1yang400");
var p2yang400Button = document.querySelector("#p2yang400");
var p1yang300Button = document.querySelector("#p1yang300");
var p2yang300Button = document.querySelector("#p2yang300");
var p1yang200Button = document.querySelector("#p1yang200");
var p2yang200Button = document.querySelector("#p2yang200");
var p1yang100Button = document.querySelector("#p1yang100");
var p2yang100Button = document.querySelector("#p2yang100");
var resetButton = document.querySelector("#reset");
var inputAngka = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span")
var gameOver = false;
var winningScore;

p1yang1000Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score+=1000;
        if(p1Score >= winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.innerHTML = '<h1>'+p1Score+'</h1>';
    }
});

p2yang1000Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score+=1000;
        if(p2Score >= winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.innerHTML = '<h1>'+p2Score+'</h1>';
    }
});

p1yang500Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score+=500;
        if(p1Score >= winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.innerHTML = '<h1>'+p1Score+'</h1>';
    }
});

p2yang500Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score+=500;
        if(p2Score >= winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.innerHTML = '<h1>'+p2Score+'</h1>';
    }
});

p1yang400Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score+=400;
        if(p1Score >= winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.innerHTML = '<h1>'+p1Score+'</h1>';
    }
});

p2yang400Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score+=400;
        if(p2Score >= winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.innerHTML = '<h1>'+p2Score+'</h1>';
    }
});

p1yang300Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score+=300;
        if(p1Score >= winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.innerHTML = '<h1>'+p1Score+'</h1>';
    }
});

p2yang300Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score+=300;
        if(p2Score >= winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.innerHTML = '<h1>'+p2Score+'</h1>';
    }
});

p1yang200Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score+=200;
        if(p1Score >= winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.innerHTML = '<h1>'+p1Score+'</h1>';
    }
});

p2yang200Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score+=200;
        if(p2Score >= winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.innerHTML = '<h1>'+p2Score+'</h1>';
    }
});

p1yang100Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score+=100;
        if(p1Score >= winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.innerHTML = '<h1>'+p1Score+'</h1>';
    }
});

p2yang100Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score+=100;
        if(p2Score >= winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.innerHTML = '<h1>'+p2Score+'</h1>';
    }
});

resetButton.addEventListener("click", function() {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.innerHTML = '<h1>'+0+'</h1>';
    p2Display.innerHTML = '<h1>'+0+'</h1>';
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
};

inputAngka.addEventListener("change", function() {
    winningScoreDisplay.textContent = inputAngka.value;
    winningScore = Number(inputAngka.value);
    reset();
})