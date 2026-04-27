// assets/js/slider.js

const slider = document.getElementById("slider");

async function loadImages() {
  const res = await fetch("assets/images/");
  const text = await res.text();

  // 画像ファイル名を抽出（jpg/png/webp）
  const files = [...text.matchAll(/href="([^"]+\.(jpg|png|webp))"/g)].map(m => m[1]);

  files.forEach((file, i) => {
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
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3500);
}

loadImages();
