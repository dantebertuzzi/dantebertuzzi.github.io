import translations from "./translations.js";
import { load, save } from "./storage.js";

const LANGS = ["en", "it", "hu", "ro"];
const NO_DATA = "not enough valid days";

function pickInitial() {
  const saved = load("lang");
  if (LANGS.includes(saved)) return saved;
  for (const tag of navigator.languages || [navigator.language || ""]) {
    const code = String(tag).slice(0, 2).toLowerCase();
    if (LANGS.includes(code)) return code;
  }
  return "en";
}

export function initLanguage() {
  const root = document.documentElement;
  const nodes = document.querySelectorAll("[data-i18n]");
  const barTitles = document.querySelectorAll("#fig1 svg title");
  const buttons = document.querySelectorAll(".langs button");

  // O inglês do HTML é a referência para voltar ao idioma original.
  const english = { title: document.title };
  nodes.forEach((el) => {
    const attr = el.dataset.i18nAttr;
    english[el.dataset.i18n] = attr ? el.getAttribute(attr) : el.innerHTML;
  });
  barTitles.forEach((t) => (t.dataset.orig = t.textContent));

  function setLang(lang) {
    const dict = translations[lang] ?? {};
    nodes.forEach((el) => {
      const key = el.dataset.i18n;
      const value = dict[key] ?? english[key];
      const attr = el.dataset.i18nAttr;
      if (attr) el.setAttribute(attr, value);
      else el.innerHTML = value;
    });
    document.title = dict.title ?? english.title;
    barTitles.forEach((t) => {
      t.textContent = dict.nodata ? t.dataset.orig.replace(NO_DATA, dict.nodata) : t.dataset.orig;
    });
    root.lang = lang;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }

  const initial = pickInitial();
  if (initial !== "en") setLang(initial);

  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      setLang(b.dataset.lang);
      save("lang", b.dataset.lang);
    }),
  );
}
