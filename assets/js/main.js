// Ponto de entrada (carregado como módulo, portanto já adiado até o DOM estar pronto).
import { initTheme } from "./theme.js";
import { initLanguage } from "./i18n.js";
import { initTableSort } from "./table-sort.js";

initTheme();
initLanguage();
initTableSort(document.getElementById("pkgs"));
