import { startCountdown } from "./countDown.js";
import { renderRanking } from "./ranking.js";

export function renderHackathons(hackathons) {
  const hackathonContainer = document.querySelector(".grid-container");

  hackathons.forEach(({ title, deadline, rules, image }) => {
    const li = document.createElement("li");
    li.classList.add("grid-item");

    li.innerHTML = `
      <h3 class="hackathon-title">${title}</h3>
      <p class="deadline">Дедлайн: ${deadline}</p>
      <p class="rules">${rules}</p>
      <div class="image-wrapper">
        <img class="img" src="${image}" alt="${title}" />
      </div>
      <div class="timer-cont">
      <p class="timer">Час до завершення</p>
      <p class="timer-details"></p>
      </div>
      <button class="apply-btn">Подати заявку</button>
    `;

    startCountdown(li.querySelector(".timer-details"), deadline);

    const btn = li.querySelector(".apply-btn");
    btn.addEventListener("click", async () => {
      const { value: name } = await Swal.fire({
        title: "Введіть ваше ім'я",
        input: "text",
        inputPlaceholder: "Ваше ім'я",
        showCancelButton: true,
        confirmButtonText: "Подати заявку",
      });

      if (name) {
        btn.textContent = "Заявку подано!";
        btn.disabled = true;
        btn.style.backgroundColor = "#4CAF50";

        const score = 0;
        window.rankingData.push({ name, score });

        await fetch("http://localhost:5000/rankingData", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, score }),
        });

        renderRanking();
      }
    });

    hackathonContainer.appendChild(li);
  });
}
