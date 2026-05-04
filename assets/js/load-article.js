// URLパラメータから md=xxx.md を取得
const params = new URLSearchParams(location.search);
const mdFile = params.get("md");

if (!mdFile) {
  document.getElementById("article-content").innerHTML =
    "Markdown ファイルが指定されていません。";
} else {
  fetch(`articles/${mdFile}`)
    .then(res => res.text())
    .then(md => {
      const html = mdToHtml(md);
      document.getElementById("article-content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("article-content").innerHTML =
        "記事の読み込みに失敗しました。";
    });
}
