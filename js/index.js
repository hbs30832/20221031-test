let slideWrapper = document.querySelector(".slideWrapper");
let slideBtnList = document.querySelectorAll(".slideBtnList button");

let slideIdx = 0;

// 세개의 버튼 클릭 시 각 인덱스 * 100%만큼 움직이게 적용
slideBtnList.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    slideIdx = idx;
    slideWrapper.style.transform = `translateX(${slideIdx * -100}%)`;
  });
});
