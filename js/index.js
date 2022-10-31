let slideWrapper = document.querySelector(".slideWrapper");
let slideBtnList = document.querySelectorAll(".slideBtnList button");

let slideIdx = 0;

slideBtnList.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    slideIdx = idx;
    slideWrapper.style.transform = `translateX(${slideIdx * -100}vw)`;
  });
});
