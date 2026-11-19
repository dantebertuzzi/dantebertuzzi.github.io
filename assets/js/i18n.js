import translations from "./translations.js";
import { load, save } from "./storage.js";

// O português está no HTML (idioma padrão); os demais vêm do arquivo de traduções.
const BASE = "pt";
const LANGS = [BASE, ...Object.keys(translations)];
const NO_DATA = "dias válidos insuficientes";

const pickInitial = () => {
  const saved = load("lang");
  return LANGS.includes(saved) ? saved : BASE;
};

export function initLanguage() {
  const root = document.documentElement;
  const nodes = document.querySelectorAll("[data-i18n]");
  const barTitles = document.querySelectorAll("#fig1 svg title");
  const buttons = document.querySelectorAll(".langs button");

  // Guarda o texto original do HTML para poder voltar ao português.
  const base = { title: document.title, lang: root.lang };
  nodes.forEach((el) => {
    const attr = el.dataset.i18nAttr;
    base[el.dataset.i18n] = attr ? el.getAttribute(attr) : el.innerHTML;
  });
  barTitles.forEach((t) => (t.dataset.orig = t.textContent));

  function setLang(lang) {
    const dict = translations[lang] ?? {};
    nodes.forEach((el) => {
      const key = el.dataset.i18n;
      const value = dict[key] ?? base[key];
      const attr = el.dataset.i18nAttr;
      if (attr) el.setAttribute(attr, value);
      else el.innerHTML = value;
    });
    document.title = dict.title ?? base.title;
    barTitles.forEach((t) => {
      t.textContent = dict.nodata ? t.dataset.orig.replace(NO_DATA, dict.nodata) : t.dataset.orig;
    });
    root.lang = lang === BASE ? base.lang : lang;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }

  const initial = pickInitial();
  if (initial !== BASE) setLang(initial);

  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      setLang(b.dataset.lang);
      save("lang", b.dataset.lang);
    }),
  );
}
