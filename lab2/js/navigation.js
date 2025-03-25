export function renderNavigation(navItems) {
  const navList = document.querySelector(".nav-list");

  navItems.forEach(({ href, text }) => {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    li.innerHTML = `<a href="${href}" class="nav-link">${text}</a>`;
    navList.appendChild(li);
  });
}
