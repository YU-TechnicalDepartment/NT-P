// assets/js/ranking.js

const url =
  "https://raw.githubusercontent.com/YU-TechnicalDepartment/Scratch-Ranking-Public/main/README.md";

async function loadRanking() {
  const res = await fetch(url);
  const text = await res.text();

  // コードブロック内だけ抽出
  const match = text.match(/```([\s\S]*?)```/);
  const ranking = match ? match[1].trim() : "取得できませんでした。";

  document.getElementById("ranking-box").textContent = ranking;
}

loadRanking();
