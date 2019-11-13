document.getElementById("lefteye").style.backgroundColor =
    "black";
document.getElementById("head").style.backgroundColor =
    "brown";
document.getElementById("lefteye").style.backgroundColor = 20;
document.getElementById("lefteye").style.backgroundColor = 20;
document.getElementById("rightarm").style.backgroundColor =
    "brown";
document.getElementById("leftarm").style.backgroundColor =
    "brown";
document.getElementById("body").style.backgroundColor =
    "green";

//document.getElementById("head").style.transform =
"rotate(15deg)";

// Put a 2-pixel-wide, solid black border around his body.
document.getElementById("body").style.border = "2px black solid";

// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";

// Put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px yellow dotted";

// Change his left arm`s color.
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

// Change the text color.
document.getElementById("body").style.color = "#FF0000";

// Give Douglas hair.
document.getElementById("head").style.borderTop = "5px black solid";
var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + "%";
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}
var rightnose = document.getElementById("rightnose");
nose.addEventListener("click", moveNoseRight);

function moveNoseRight(e) {
    var robotPart = e.target;
    var left = 100;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.left = left + "%";
        left--;
        if (left === 50) {
            clearInterval(id);
        }
    }
}
var rightmouth = document.getElementById("rightnose");
mouth.addEventListener("click", moveMouthRight);

function moveMouthRight(e) {
    var robotPart = e.target;
    var left = 100;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.left = left + "%";
        left--;
        if (left === 20) {
            clearInterval(id);
        }
    }
}

var leftArm = document.getElementById("leftarm");
leftarm.addEventListener("click", moveArmDown);

function moveArmDown(e) {
    var robotPart = e.target;
    var top = 100;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + "%";
        top--;
        if (top === 34) {
            clearInterval(id);
        }
    }
}