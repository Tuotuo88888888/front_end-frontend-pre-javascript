// 让便签可被拖动，但不能超出视口
document.querySelector(".move-bar").addEventListener("mousedown", function (e) {
  let initX = e.clientX;
  let initY = e.clientY;
  let note = document.querySelector(".note");
  let rect = document.querySelector(".note").getBoundingClientRect();

  let left = rect.left;
  let top = rect.top;
  let width = document.documentElement.clientWidth - note.offsetWidth;
  let height = document.documentElement.clientHeight - note.offsetHeight;
//   console.dir(document.documentElement);
//   console.dir(note);

  function winMouseMove(e) {
    let x = e.clientX - initX + left;
    let y = e.clientY - initY + top;
    if (x < 0) {
      x = 0;
    }
    if (y < 0) {
      y = 0;
    }
    if (x > width) {
      x = width;
    }
    if (y > height) {
      y = height;
    }
    note.style.left = x + "px";
    note.style.top = y + "px";
  }
  function winMouseUp(e) {
    window.removeEventListener("mousemove", winMouseMove);
    window.removeEventListener("mouseup", winMouseUp);
  }

  window.addEventListener("mousemove", winMouseMove);
  window.addEventListener("mouseup", winMouseUp);
});
