function startGame() {
    GameArea.start();
    Bird = new component(20, 20, "green", 330, 30);
    pipe = new draw();
}

let GameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 800;
        this.canvas.style.cursor = "none";
        this.canvas.style.border = "1px solid #000000";
        this.canvas.style.backgroundImage = "url('images/bg-image.jpeg')";
        this.canvas.style.margin = "auto";
        this.canvas.style.display = "block";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    },
};

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.gravitySpeed = 0;
    this.update = function () {
        ctx = GameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPos = function () {
        this.gravitySpeed = 1;
        this.y += this.gravitySpeed;
    };
}

function updateGameArea() {
    GameArea.clear();
    Bird.newPos();
    Bird.update();
    pipe.newPos();
    pipe.update();
}

function Jump() {
    Bird.y -= 15;
}

function draw() {
    const pipeWidth = 50;
    const pipeGap = 100;
    const pipeHeight = 800;
    const gapSize = 80;
    const gapVariance = 30;
    let pipeX = 480;
    let gapPosition = (pipeHeight - gapSize) / 2;

    this.update = function () {
        ctx.clearRect(0, 0, 480, 800);
        ctx = GameArea.context;
        ctx.fillStyle = "green";
        ctx.fillRect(
            pipeX,
            gapPosition + gapSize,
            pipeWidth,
            pipeHeight - (gapPosition + gapSize)
        );

        if (pipeX + pipeWidth < 0) {
            pipeX = canvas.width;

            //  new gap position for the next pipe
            gapPosition =
                Math.random() * (pipeHeight - gapSize - 2 * gapVariance) +
                gapVariance;
            equestAnimationFrame(draw);
        }
    };
    this.newPos = function () {
        pipeX -= 3;
    };

    // loop
}
