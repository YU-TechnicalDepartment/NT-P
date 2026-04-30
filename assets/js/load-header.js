// 全ページ共通ヘッダーを読み込む
fetch("assets/components/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;

    // ヘッダー読み込み後にスクロール機能を再適用
    const script = document.createElement("script");
    script.src = "assets/js/scroll.js";
    document.body.appendChild(script);

    // ★ Home 以外のページでは、ボタン押したら Home に飛ぶ
    const isHome = location.pathname.endsWith("index.html") || location.pathname.endsWith("/");

    document.querySelectorAll(".header-nav [data-scroll]").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-scroll");

        if (!isHome) {
          // Home に飛んで、スクロール先を URL パラメータで渡す
          location.href = `index.html?scroll=${target}`;
        }
      });
    });
  })
  .catch(err => {
    console.error("ヘッダー読み込みエラー:", err);
  });
