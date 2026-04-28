// 上の 4 ボタンから各セクションへスムーズスクロール

document.querySelectorAll(".top-buttons [data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-scroll");
    const section = document.getElementById(targetId);
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const offset = window.pageYOffset + rect.top - 90; // ヘッダー分少し上を空ける

    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });
});
