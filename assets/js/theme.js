import { save } from "./storage.js";

export function initTheme() {
  const root = document.documentElement;
  const buttons = document.querySelectorAll(".themes button");
  const mark = (theme) =>
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.set === theme)));

  mark(root.dataset.theme || "auto");
  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      root.dataset.theme = b.dataset.set;
      mark(b.dataset.set);
      save("theme", b.dataset.set);
    }),
  );
}
