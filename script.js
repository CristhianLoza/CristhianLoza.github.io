document.getElementById("year").textContent = new Date().getFullYear();

const filters = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    const selected = filter.dataset.filter;
    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const show = selected === "all" || categories.includes(selected);
      card.classList.toggle("hidden", !show);
      if (!show) card.classList.remove("open");
    });
  });
});

document.querySelectorAll(".project-more").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    card.classList.toggle("open");
    button.firstChild.textContent = card.classList.contains("open") ? "Ocultar enfoque " : "Ver enfoque ";
  });
});