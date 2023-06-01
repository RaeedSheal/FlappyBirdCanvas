const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const pipeWidth = 50;
const pipeGap = 100;
const pipeHeight = canvas.height;
const gapSize = 80;
const gapVariance = 30;
let pipeX = canvas.width;
let gapPosition = (pipeHeight - gapSize) / 2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the pipes
    ctx.fillStyle = "green";

    ctx.fillRect(pipeX, 0, pipeWidth, gapPosition);

    ctx.fillRect(
        pipeX,
        gapPosition + gapSize,
        pipeWidth,
        pipeHeight - (gapPosition + gapSize)
    );

    // Move the pipes from right to lef
    pipeX -= 3;

    if (pipeX + pipeWidth < 0) {
        pipeX = canvas.width;

        //  new gap position for the next pipe
        gapPosition =
            Math.random() * (pipeHeight - gapSize - 2 * gapVariance) +
            gapVariance;
    }

    // loop
}

// Start the animation loop
draw();
