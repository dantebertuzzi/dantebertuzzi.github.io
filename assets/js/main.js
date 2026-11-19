// Ponto de entrada (módulo: já é adiado até o DOM estar pronto).
import { initTheme } from "./theme.js";
import { initTableSort } from "./table-sort.js";

initTheme();
initTableSort(document.getElementById("pkgs"));
