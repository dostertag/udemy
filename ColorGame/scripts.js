var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDispaly = document.querySelector("#message");
var hBackground = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for(let i = 0; i < squares.length; i++) {
        // add initial colors to squares
        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked and compare to set color
            var clickedColor = this.style.backgroundColor;
            // coompare color to picked color
            if (clickedColor === pickedColor) {
                // alert("correct");
                messageDispaly.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                hBackground.style.background = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDispaly.textContent = "Try Again!";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDispaly.textContent = "";
    resetButton.textContent = "New Colors";
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    hBackground.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    // loop through all squares and change color to given coolor
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // pick a random number
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    // add num random colors
    for(let i = 0; i < num; i++) {
        //get random color
        arr.push(randomColor());
        //push into array
    }
    // return new array
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}






