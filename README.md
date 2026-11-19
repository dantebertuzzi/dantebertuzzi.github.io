# dantebertuzzi.github.io

Personal site, laid out as a working paper: abstract, a figure, a table of
packages, research, methods and correspondence. Built with Jekyll 4 and
deployed to GitHub Pages by GitHub Actions. No JavaScript is needed to read
it, no third-party requests, no trackers.

## Languages

Each language is its own page, so search engines index all of them:

| Page | Language |
| --- | --- |
| `/` (`index.md`) | Português (default) |
| `/en/` | English |
| `/it/` | Italiano |
| `/hu/` | Magyar |
| `/ro/` | Română |

The prose of each page lives in its Markdown file. Interface strings (table,
figure, footer, meta description, package descriptions) live in
`_data/i18n.yml`, one block per language; the order of the blocks is the order
of the flags. To add a language: copy one block in `_data/i18n.yml`, copy one
page (for example `en/index.md`) and translate it, and add a flag in
`_includes/flags/`.

## Structure

```
_config.yml              site settings and colour themes
index.md, */index.md     page content per language (Markdown)
_layouts/default.html    HTML skeleton
_includes/               head (SEO), structured data, header, footer,
                         section heading, figure, packages table, sparkline,
                         flags, icons
_data/i18n.yml           interface strings per language
_data/packages.yml       Table 1: version and weekly commits per package
assets/css/style.css     all styles (four colour themes, self-hosted font)
assets/fonts/            JetBrains Mono, woff2, SIL Open Font License
assets/js/               ES modules: theme switcher, table sorting
assets/img/              favicon, sertão banner, social preview image
sitemap.xml, robots.txt  generated, with hreflang alternates
scripts/                 update_packages.rb
.github/workflows/       deploy; weekly package data update
```

## SEO

Every page has its own title, description, canonical URL, `hreflang` links to
the other languages, Open Graph and Twitter card tags with
`assets/img/og.png`, and JSON-LD (WebSite, ProfilePage, Person, the preprint as
ScholarlyArticle and each package as SoftwareSourceCode). The sitemap lists all
languages with their alternates.

## Package data

`scripts/update_packages.rb` reads each package's weekly commits (GitHub
`/stats/commit_activity`) and the version in its `Project.toml`, and rewrites
`_data/packages.yml`. The *Update package data* workflow runs it every Monday,
commits any change and redeploys. To run it locally:

```sh
GITHUB_TOKEN=$(gh auth token) ruby scripts/update_packages.rb
```

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. The scripts are ES modules, so open the site
through the server rather than as a file.
