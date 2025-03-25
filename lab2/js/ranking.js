export function renderRanking() {
  const rankingContainer = document.querySelector(".ranking-container");
  rankingContainer.innerHTML = "";

  window.rankingData.sort((a, b) => b.score - a.score);

  // Показуємо тільки перші 5 елементів
  const top5Players = window.rankingData.slice(0, 5);

  top5Players.forEach((player, index) => {
    const div = document.createElement("div");
    div.classList.add("ranking-item");

    if (index === 0) div.classList.add("first-place");
    if (index === 1) div.classList.add("second-place");
    if (index === 2) div.classList.add("third-place");

    div.innerHTML = `<strong>${player.name}</strong>  ${player.score} балів`;
    rankingContainer.appendChild(div);
  });

  // Додаємо кнопку "Переглянути більше"
  const moreButton = document.createElement("button");
  moreButton.classList.add("view-more-btn");
  moreButton.textContent = "Переглянути більше";

  moreButton.addEventListener("click", () => {
    // Перенаправлення на нову сторінку
    window.location.href = "ranking.html";
  });

  rankingContainer.appendChild(moreButton);
}
