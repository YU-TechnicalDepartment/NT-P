(() => {
  /**
   * 指定したIDの要素へオフセットを考慮してスクロールする共通関数
   * @param {string} id - ターゲット要素のID
   */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const offset = window.pageYOffset + rect.top - 90; // ヘッダー分のオフセット

    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  };

  // ★ Home に来たとき、URL パラメータ scroll=xxx があれば自動スクロール
  const params = new URLSearchParams(location.search);
  const autoScrollTarget = params.get("scroll");

  if (autoScrollTarget) {
    // ページの全リソース（画像など）が読み込まれた後に実行
    window.addEventListener("load", () => {
      // 読み込み直後はブラウザのデフォルト挙動と競合する場合があるため、少し遅延させるとより確実です
      setTimeout(() => scrollToSection(autoScrollTarget), 100);
    });
  }

  // ★ Home のときだけ、ヘッダーのボタンでスクロール
  document.querySelectorAll(".header-nav [data-scroll]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // aタグなどのデフォルト動作を防止
      const targetId = btn.getAttribute("data-scroll");
      scrollToSection(targetId);
    });
  });

})();
