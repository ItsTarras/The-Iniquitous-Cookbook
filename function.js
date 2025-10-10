document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const tagPanel = document.getElementById("tagPanel");

  toggleButton.addEventListener("click", () => {
    tagPanel.classList.toggle("open");
  });
});