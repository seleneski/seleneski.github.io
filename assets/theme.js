(function () {
  const root = document.documentElement;
  const storageKey = "selen-theme";
  const savedTheme = localStorage.getItem(storageKey);

  if (savedTheme) {
    root.dataset.theme = savedTheme;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("[data-theme-toggle]");
    if (!button) return;

    const updateLabel = () => {
      const current = root.dataset.theme || "system";
      button.setAttribute("aria-label", current === "dark" ? "Use light theme" : "Use dark theme");
      button.textContent = current === "dark" ? "☀" : "☾";
    };

    button.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem(storageKey, next);
      updateLabel();
    });

    updateLabel();
  });
})();
