var boxEl = document.querySelector('a-box');

// カーソルがぶつかったら拡大
boxEl.addEventListener('mouseenter', function () {
  boxEl.setAttribute('scale', {x: 5, y: 5, z: 5});
  console.log("mouseenter");
});

// カーソルが離れたら元にもどす
boxEl.addEventListener('mouseleave', function () {
  boxEl.setAttribute('scale', {x: 2, y: 2, z: 2});
  console.log("mouseleave");
});
