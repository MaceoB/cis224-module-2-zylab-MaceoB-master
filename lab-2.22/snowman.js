// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function () {
    var canvas = document.querySelector("canvas");

    drawGround(canvas);
    drawSnowText(canvas);
    drawSnowman(canvas);
    drawSnowflakes(canvas);
});

function drawGround(canvas) {
    var context = canvas.getContext("2d");

    // background
    context.fillStyle = "lightgray";
    context.fillRect(0, 0, 300, 300);

    // ground
    context.fillStyle = "brown";
    context.fillRect(0, canvas.height - 50, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {
    for (var c = 0; c < 100; c++) {
        var x = Math.floor(Math.random() * canvas.width);
        var y = Math.floor(Math.random() * canvas.height);
        drawSingleFlake(canvas, x, y);
    }
}

// Complete the functions below

function drawSnowText(canvas) {

}

function drawSnowman(canvas) {

}

function drawSingleFlake(canvas, x, y) {

}