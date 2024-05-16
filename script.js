window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");
  const scale = window.devicePixelRatio || 5;
  // adjusting the size of the canvas using js instade of css
  //because it(css) causes the canvas zoomed in and pixeletedF
  canvas.height = (window.innerHeight - 6) * scale;
  canvas.width = (window.innerWidth - 200) * scale;
  context.scale(scale, scale);
  console.log(canvas.innerHeight);

  let painting = false;

  function startPosition() {
    painting = true;
    draw(e);
  }
  function endPosition() {
    painting = false;
    context.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    context.lineWidth = 3;
    context.lineCap = "round";
    // context.lineJoin= "round";
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.filter = "blur(1px)";
    context.lineTo(e.clientX, e.clientY);
    context.strokeStyle = "red";
    context.stroke();
    // context.save();
    console.log(context);
  }
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);
});
//if the canvas window is resized and not reloaded , the canvas size remains same.
//need to resize the canvas area according to resized area
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
