# static_presentation_template

Simple structure to build simple yet interactive single page HTML presentations.

## Structure

```text
.
├── index.html
├── css/style.css
└── js/presentation.js
```

## Quick start

Serve the repository root with any static file server, for example:

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Included behavior

- Single-page slide layout
- Previous / Next controls
- Arrow key navigation (`←` and `→`)
- Slide counter