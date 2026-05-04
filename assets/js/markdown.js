// 正規表現を一切使わない Markdown パーサー
function mdToHtml(md) {
  const lines = md.split("\n");
  let html = "";
  let listBuffer = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      html += "<ul>";
      listBuffer.forEach(item => html += `<li>${item}</li>`);
      html += "</ul>";
      listBuffer = [];
    }
  };

  lines.forEach(line => {
    const trimmed = line.trim();

    // 見出し
    if (trimmed.startsWith("### ")) {
      flushList();
      html += `<h3>${trimmed.slice(4)}</h3>`;
      return;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      html += `<h2>${trimmed.slice(3)}</h2>`;
      return;
    }
    if (trimmed.startsWith("# ")) {
      flushList();
      html += `<h1>${trimmed.slice(2)}</h1>`;
      return;
    }

    // 箇条書き
    if (trimmed.startsWith("- ")) {
      listBuffer.push(trimmed.slice(2));
      return;
    }

    // 通常段落
    flushList();
    if (trimmed !== "") {
      html += `<p>${trimmed}</p>`;
    }
  });

  flushList();
  return html;
}
