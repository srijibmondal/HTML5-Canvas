const canvas = document.querySelector("#canvas");
window.addEventListener("load", () => {
  const context = canvas.getContext("2d");
  const scale = window.devicePixelRatio || 1;
  // adjusting the size of the canvas using js instade of css
  //because it(css) causes the canvas zoomed in and pixeletedF
  canvas.height = (window.innerHeight - 6) * scale;
  canvas.width = (window.innerWidth - 200) * scale;
  context.scale(scale, scale);
  // console.log(canvas.innerHeight);

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
    context.lineWidth = 2;
    context.lineCap = "round";
    context.lineJoin = "bevel";
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.filter = "blur(.7px)";
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.strokeStyle= "#ccc"
    context.save();
    // console.log(context);
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
const dwnld__btn = document.querySelector("#download__btn");

dwnld__btn.addEventListener("click", () => {
  const uri = canvas.toDataURL();
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
