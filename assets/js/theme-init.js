// Aplica o tema salvo antes da primeira pintura, para a página não piscar.
// Carregado de forma bloqueante no <head>; o resto do JS vem em módulos.
try {
  const theme = localStorage.getItem("theme");
  if (theme) document.documentElement.dataset.theme = theme;
} catch {}
