let x = 0;
let y = 0;

const contentAll = document.querySelectorAll(".contWrap div");
//querySelectorAll은 css에 div객체가 list로 잡히기 때문에 사용할때 forEach를 사용하는편이다.

window.addEventListener("mousemove", () => {
  x = event.pageX;
  y = event.pageY;

  contentAll.forEach((item) => {
    item.style.left = x + "px";
  });
});
