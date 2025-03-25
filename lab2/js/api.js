export async function fetchData() {
  return await Promise.all([
    fetch("http://localhost:5000/rankingData").then((res) => res.json()),
    fetch("http://localhost:5000/hackathons").then((res) => res.json()),
    fetch("http://localhost:5000/projects").then((res) => res.json()),
    fetch("http://localhost:5000/navItems").then((res) => res.json()),
  ]);
}
