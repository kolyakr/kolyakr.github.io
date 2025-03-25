async function fetchProjects() {
  const response = await fetch("http://localhost:5000/projects");
  return response.json();
}

function getProjectIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function renderProjectDetails() {
  const projectId = getProjectIdFromURL();
  if (!projectId) {
    document.querySelector(".project-details-container").innerHTML =
      "<p>Проєкт не знайдено!</p>";
    return;
  }

  const projects = await fetchProjects();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    document.querySelector(".project-details-container").innerHTML =
      "<p>Проєкт не знайдено!</p>";
    return;
  }

  document.querySelector(".project-details-container").innerHTML = `
    <h1>${project.title}</h1>
    <div class="project-image-cont"><img src="${project.image}" alt="${
    project.title
  }" class="project-image"></div>
    <p><strong>Опис:</strong> ${project.description}</p>
    <p><strong>Статус:</strong> <span class="${project.statusClass}">${
    project.status
  }</span></p>
    <p><strong>Дата створення:</strong> ${project.createdAt}</p>
    <h3>Технології</h3>
    <ul>${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}</ul>
    <h3>Функції</h3>
    <ul>${project.features
      .map((feature) => `<li>${feature}</li>`)
      .join("")}</ul>
    <p><strong>Посилання:</strong> <a href="${project.link}" target="_blank">${
    project.link
  }</a></p>
    <h3>Відгуки</h3>
    <ul>${project.reviews
      .map(
        (review) => `
      <li><strong>${review.user}:</strong> ${review.comment} (${review.rating}/5 ⭐)</li>
    `
      )
      .join("")}</ul>
  `;
}

document.addEventListener("DOMContentLoaded", renderProjectDetails);
