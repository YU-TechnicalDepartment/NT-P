// Markdown → HTML 変換（軽量版）
function mdToHtml(md) {
  let html = md;

  // 見出し
  html = html.replace(/^### (.*)$/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*)$/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*)$/gim, "<h1>$1</h1>");

  // 太字（**text**）
  html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");

  // 斜体（*text*）
  html = html.replace(/\*(.*?)\*/gim, "<em>$1</em>");

  // リンク [text](url)
  html = html.replace(/

\[(.*?)\]

\((.*?)\)/gim, '<a href="$2">$1</a>');

  // 改行
  html = html.replace(/\n/g, "<br>");

  return html.trim();
}
