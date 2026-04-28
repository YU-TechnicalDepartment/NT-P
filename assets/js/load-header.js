// 全ページ共通ヘッダーを読み込む
fetch("assets/components/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;

    // ヘッダー読み込み後にスクロール機能を再適用
    const script = document.createElement("script");
    script.src = "assets/js/scroll.js";
    document.body.appendChild(script);
  });
