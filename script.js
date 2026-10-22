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

  const articleBody = document.querySelector(".article-body");
  if (articleBody) {
    const lightbox = document.createElement("dialog");
    lightbox.className = "image-lightbox";

    const closeButton = document.createElement("button");
    closeButton.className = "image-lightbox-close";
    closeButton.type = "button";
    closeButton.textContent = "close";
    closeButton.setAttribute("aria-label", "Close enlarged image");

    const enlargedImage = document.createElement("img");
    enlargedImage.alt = "";

    lightbox.append(closeButton, enlargedImage);
    document.body.append(lightbox);

    closeButton.addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.close();
      }
    });

    articleBody.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const image = event.target.closest("img");
      if (!image || !articleBody.contains(image)) {
        return;
      }

      event.preventDefault();
      enlargedImage.src = image.currentSrc || image.src;
      enlargedImage.alt = image.alt;
      lightbox.showModal();
    });
  }
});
