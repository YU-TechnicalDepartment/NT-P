// assets/js/slider.js

// GitHub Pages ではフォルダ一覧を取得できないため、
// 画像ファイル名を手動で配列に書く方式に変更
const imageFiles = [
  "01.png",
  "02.png"
  // 必要に応じて追加
];

const slider = document.getElementById("slider");

function loadImages() {
  imageFiles.forEach((file, i) => {
    const img = document.createElement("img");
    img.src = "assets/images/" + file;
    img.className = "slide";
    if (i === 0) img.classList.add("active");
    slider.appendChild(img);
  });

  startSlider();
}

function startSlider() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return; // 画像がない場合は停止

  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3500);
}

loadImages();
