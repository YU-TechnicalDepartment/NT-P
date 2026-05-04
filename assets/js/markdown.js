// 超軽量 Markdown パーサー（見出し・太字・リンク・リスト対応）
function mdToHtml(md) {
  let html = md;

  // 見出し
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // 太字
  html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");

  // 斜体
  html = html.replace(/\*(.*?)\*/gim, "<em>$1</em>");

  // リンク
  html = html.replace(/

\[(.*?)\]

\((.*?)\)/gim, '<a href="$2">$1</a>');

  // 改行
  html = html.replace(/\n$/gim, "<br>");

  return html.trim();
}
