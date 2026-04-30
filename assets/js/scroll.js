// ★ Home に来たとき、URL パラメータ scroll=xxx があれば自動スクロール
const params = new URLSearchParams(location.search);
const autoScrollTarget = params.get("scroll");

if (autoScrollTarget) {
  window.addEventListener("load", () => {
    const section = document.getElementById(autoScrollTarget);
    if (section) {
      const rect = section.getBoundingClientRect();
      const offset = window.pageYOffset + rect.top - 90;

      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  });
}

// ★ Home のときだけ、ヘッダーのボタンでスクロール
document.querySelectorAll(".header-nav [data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-scroll");
    const section = document.getElementById(targetId);
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const offset = window.pageYOffset + rect.top - 90;

    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });
});
