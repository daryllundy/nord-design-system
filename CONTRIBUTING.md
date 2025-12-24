# Contributing to Nord Design System Kernel

Thank you for helping improve the kernel! This project aims to be a lightweight, zero-dependency foundation for Nord-themed apps.

## Philosophy
1. **Zero Dependencies**: usage should require only a CSS import (and optional JS). No compilation, Node.js, or Sass required for the end user.
2. **Token-Driven**: Everything is defined in `:root` variables.
3. **Vanilla First**: Components rely on standard HTML structures and semantic class names.

## Development Workflow

1. **Serve Locally**:
   Run a simple HTTP server from the root of the project:
   ```bash
   python -m http.server
   ```
   Visit `http://localhost:8000/examples/` to see the scratchpad.

2. **Editing CSS**:
   - Edit `nord-theme.css`.
   - Refresh the page.
   - **No build step needed.**

## Coding Standards

### CSS
- **Indentation**: 2 spaces.
- **Formatting**: Keep selector blocks tight.
- **Organization**: Follow the file structure:
    1. Tokens (:root)
    2. Base (Reset, Typography)
    3. Utilities
    4. Components
- **Naming**: Use BEM-ish convention for components (`.card`, `.card__title`) and functional naming for utilities (`.mt-2`, `.text-center`).

### Linting
We use stylelint to keep things tidy.
```bash
npx stylelint nord-theme.css
```

## Pull Requests
- Please include a screenshot for any visual changes.
- Ensure your changes work in both Light and Dark modes.
- Updates to tokens should be reflected in `TOKENS.md`.
