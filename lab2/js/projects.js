export function renderProjects(projects) {
  const projectContainer = document.querySelector(".project-container");

  projects.forEach(
    ({ id, title, description, status, statusClass, buttonText }) => {
      const div = document.createElement("div");
      div.classList.add("project-card");

      div.innerHTML = `
      <h3 class="project-title">${title}</h3>
      <p class="project-description">${description}</p>
      <span class="status ${statusClass}">${status}</span>
      <button class="btn" data-id="${id}">${buttonText}</button>
    `;

      div.querySelector(".btn").addEventListener("click", () => {
        window.location.href = `project-details.html?id=${id}`;
      });

      projectContainer.appendChild(div);
    }
  );
}
