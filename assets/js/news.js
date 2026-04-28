// お知らせを news.json から読み込んで表示

fetch("news.json")
  .then(res => res.json())
  .then(data => {
    const box = document.getElementById("news-box");
    box.innerHTML = "";

    // 日付の新しい順にソート（上が新しい）
    data.sort((a, b) => (a.date < b.date ? 1 : -1));

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "news-item";
      div.innerHTML = `
        <div class="news-item-title">${item.title}</div>
        <div class="news-item-date">${item.date}</div>
        <div class="news-item-content">${item.content}</div>
      `;
      box.appendChild(div);
    });

    if (data.length === 0) {
      box.textContent = "お知らせはまだありません。";
    }
  })
  .catch(() => {
    const box = document.getElementById("news-box");
    box.textContent = "お知らせの読み込みに失敗しました。";
  });
