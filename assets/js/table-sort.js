// Ordena a tabela de pacotes ao clicar no cabeçalho de uma coluna.
const versionKey = (v) => v.split(".").map(Number).reduce((acc, n) => acc * 1000 + n, 0);

export function initTableSort(table) {
  if (!table) return;
  const body = table.tBodies[0];

  table.querySelectorAll("thead button").forEach((button) =>
    button.addEventListener("click", () => {
      const th = button.parentElement;
      const { key, type } = button.dataset;
      const dir = th.getAttribute("aria-sort") === "ascending" ? "descending" : "ascending";

      table.querySelectorAll("thead th[aria-sort]").forEach((h) => h.setAttribute("aria-sort", "none"));
      th.setAttribute("aria-sort", dir);

      const value = (tr) => {
        const v = tr.dataset[key];
        return type === "num" ? Number(v) : type === "ver" ? versionKey(v) : v;
      };
      const sign = dir === "ascending" ? 1 : -1;
      [...body.rows]
        .sort((a, b) => sign * (value(a) < value(b) ? -1 : value(a) > value(b) ? 1 : 0))
        .forEach((tr) => body.append(tr));
    }),
  );
}
