export function startCountdown(element, deadline) {
  const monthMap = {
    січня: "01",
    лютого: "02",
    березня: "03",
    квітня: "04",
    травня: "05",
    червня: "06",
    липня: "07",
    серпня: "08",
    вересня: "09",
    жовтня: "10",
    листопада: "11",
    грудня: "12",
  };

  function updateCountdown() {
    const now = new Date();
    const [day, monthName, year] = deadline.split(" ");
    const month = monthMap[monthName];

    if (!month) {
      element.textContent = "Помилка формату дати!";
      return;
    }

    const deadlineDate = new Date(`${year}-${month}-${day}T23:59:59`);
    const timeDiff = deadlineDate - now;

    if (timeDiff <= 0) {
      element.textContent = "Хакатон завершився!";
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    element.textContent = `${days} д. ${hours} г. ${minutes} хв. ${seconds} с.`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
