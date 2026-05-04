// 正規表現を使わない安全な Markdown パーサー
function mdToHtml(md) {
  const lines = md.split("\n");
  let html = "";

  lines.forEach(line => {

    // 見出し
    if (line.startsWith("### ")) {
      html += `<h3>${line.slice(4)}</h3>`;
      return;
    }
    if (line.startsWith("## ")) {
      html += `<h2>${line.slice(3)}</h2>`;
      return;
    }
    if (line.startsWith("# ")) {
      html += `<h1>${line.slice(2)}</h1>`;
      return;
    }

    // 箇条書き
    if (line.startsWith("- ")) {
      html += `<li>${line.slice(2)}</li>`;
      return;
    }

    // 太字 **text**
    line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // 斜体 *text*
    line = line.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // リンク [text](url)
    line = line.replace(/

\[(.*?)\]

\((.*?)\)/g, '<a href="$2">$1</a>');

    // 通常段落
    if (line.trim() !== "") {
      html += `<p>${line}</p>`;
    }
  });

  // 箇条書きの <li> を <ul> で囲む
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");

  return html;
}
