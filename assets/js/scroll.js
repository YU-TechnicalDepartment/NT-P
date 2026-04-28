// ヘッダー内のボタンから各セクションへスムーズスクロール

document.querySelectorAll(".header-nav [data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-scroll");
    const section = document.getElementById(targetId);
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const offset = window.pageYOffset + rect.top - 90; // ヘッダー高さ分調整

    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });
});
