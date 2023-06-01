const myGameArea = {
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
  },
};
