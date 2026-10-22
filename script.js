document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme === "night" ? "night" : "light";

  document.documentElement.dataset.theme = initialTheme;

  if (themeToggle) {
    const updateThemeToggle = (theme) => {
      const isNight = theme === "night";
      themeToggle.textContent = isNight ? "light mode" : "night mode";
      themeToggle.setAttribute("aria-label", `Switch to ${isNight ? "light" : "night"} mode`);
      themeToggle.setAttribute("aria-pressed", String(isNight));
    };

    updateThemeToggle(initialTheme);

    themeToggle.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "night" ? "light" : "night";
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("theme", nextTheme);
      updateThemeToggle(nextTheme);
    });
  }

  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
});
