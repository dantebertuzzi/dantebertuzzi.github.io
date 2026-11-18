# dantebertuzzi.github.io

Personal site, laid out as a working paper: abstract, a figure, a table of
packages, research, methods and correspondence. Built with Jekyll 4 and
deployed to GitHub Pages by GitHub Actions.

## Structure

```
_config.yml              site settings, languages, themes
index.md                 page content (Markdown + kramdown attributes)
_layouts/default.html    HTML skeleton
_includes/               head, header, footer, section heading, figure,
                         packages table, sparkline, flags, icons
_data/packages.yml       Table 1: packages and weekly commits (52 weeks)
_data/i18n.yml           Italian, Hungarian and Romanian strings
assets/css/style.css     all styles (four colour themes)
assets/js/               ES modules: theme, language, table sorting
assets/img/              favicon and the sertão banner
.github/workflows/       build and deploy to GitHub Pages
```

## Translations

English is written in the content itself. Every translatable element carries
`data-i18n="key"`, and `_data/i18n.yml` holds the same key for `it`, `hu` and
`ro`. Jekyll turns that file into `assets/js/translations.js`.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. The scripts are ES modules, so open the site
through the server rather than as a file.

No trackers.
