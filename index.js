const projectToggleButtons = document.querySelectorAll(".project-toggle");

projectToggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const projectCard = button.closest(".project-card");

    projectCard.classList.toggle("open");

    if (projectCard.classList.contains("open")) {
      button.textContent = "Hide Details";
    } else {
      button.textContent = "View Details";
    }
  });
});
