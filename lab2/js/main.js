import { fetchData } from "./api.js";
import { renderHackathons } from "./hackathons.js";
import { renderProjects } from "./projects.js";
import { renderRanking } from "./ranking.js";
import { renderNavigation } from "./navigation.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const [rankingData, hackathons, projects, navItems] = await fetchData();

    window.rankingData = rankingData;

    renderHackathons(hackathons);
    renderProjects(projects);
    renderNavigation(navItems);
    renderRanking();
  } catch (error) {
    console.error("Помилка отримання даних:", error);
  }
});
