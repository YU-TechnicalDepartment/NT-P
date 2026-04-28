const track = document.querySelector(".card-slider-track");
const slides = document.querySelectorAll(".card-slide");
const dotsContainer = document.querySelector(".slider-dots");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

/* ドット生成 */
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

const dots = dotsContainer.querySelectorAll("button");

/* 更新処理 */
function updateSlider() {
  track.style.transform = `translateX(-${index * 95.5}%)`;

  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

/* 左右ボタン（無限ループ） */
prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

/* 自動スライド */
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 5000);

updateSlider();
