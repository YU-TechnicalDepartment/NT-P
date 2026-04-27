// ===============================
// カードスライダー（完全版）
// ===============================

// 要素取得
const track = document.querySelector(".card-slider-track");
const slides = document.querySelectorAll(".card-slide");
const dotsContainer = document.querySelector(".slider-dots");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

// -------------------------------
// ドット生成
// -------------------------------
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

// -------------------------------
// スライダー更新処理
// -------------------------------
function updateSlider() {
  // 横スライド
  track.style.transform = `translateX(-${index * 100}%)`;

  // フェードアニメーション用
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  // ドット更新
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");

  // 矢印の表示制御
  prevBtn.style.display = index === 0 ? "none" : "block";
  nextBtn.style.display = index === slides.length - 1 ? "none" : "block";
}

// -------------------------------
// 左右ボタン
// -------------------------------
prevBtn.addEventListener("click", () => {
  index = Math.max(0, index - 1);
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  index = Math.min(slides.length - 1, index + 1);
  updateSlider();
});

// -------------------------------
// 自動スライド（必要なら ON）
// -------------------------------
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 5000);

// -------------------------------
// 初期表示
// -------------------------------
updateSlider();
