// async function для отримання даних про рейтинг
async function fetchRankingData() {
  try {
    const response = await fetch("http://localhost:5000/rankingData");
    if (!response.ok) {
      throw new Error("Не вдалося отримати дані.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка завантаження рейтингу:", error);
    return [];
  }
}

// Функція для рендерингу рейтингу
function renderRanking(rankingData) {
  const rankingContainer = document.querySelector(".ranking-container");
  rankingContainer.innerHTML = ""; // Очищення контейнера перед рендерингом

  rankingData.sort((a, b) => b.score - a.score); // Сортуємо рейтинг за балами

  // Створення елементів рейтингу
  rankingData.forEach((player, index) => {
    const div = document.createElement("div");
    div.classList.add("ranking-item");

    // Додаємо спеціальні класи для перших трьох місць
    if (index === 0) div.classList.add("first-place");
    if (index === 1) div.classList.add("second-place");
    if (index === 2) div.classList.add("third-place");

    div.innerHTML = `
      <strong>${player.name}</strong> — ${player.score} балів
    `;
    rankingContainer.appendChild(div);
  });
}

// Виконати після завантаження сторінки
document.addEventListener("DOMContentLoaded", async () => {
  const rankingData = await fetchRankingData(); // Отримуємо дані рейтингу
  renderRanking(rankingData); // Рендеримо рейтинг
});
