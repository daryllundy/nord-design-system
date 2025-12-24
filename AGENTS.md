# Repository Guidelines

## Project Structure & Module Organization
- Core asset lives at `nord-theme.css`; keep it self-contained with tokens, reset, utilities, and component primitives in a clear order.
- Add any demos or playground HTML under an `examples/` folder; reference the CSS via relative paths (e.g., `examples/index.html` → `../nord-theme.css`).
- Document behavioral or token changes in `NOTES.md` when relevant so downstream consumers understand the impact.

## Build, Test, and Development Commands
- No build pipeline is required; the CSS ships as-is. Open a sample HTML file directly in a browser or serve locally with `python -m http.server` from the repo root for quick previewing.
- If you add linting, use Stylelint: `npx stylelint nord-theme.css` (install locally via `npm install --save-dev stylelint stylelint-config-standard` if not already present).

## Coding Style & Naming Conventions
- Indent with two spaces; prefer aligning multi-line values for readability. Keep selector blocks tight and avoid trailing whitespace.
- Preserve section headers and comment banners to keep tokens, base styles, utilities, and components easy to scan.
- Use descriptive CSS variables (`--color-*`, `--space-*`, `--radius-*`) and meaningful utility class names (`.m-2`, `.button--secondary`).
- When adding utilities or components, mirror existing naming patterns and group related declarations together (tokens → base → utilities → components).

## Testing Guidelines
- Validate visual changes in at least one modern browser; confirm contrast and focus styles remain accessible for both default and `[data-theme="light"]` modes.
- Run Stylelint if available before committing; fix or justify any remaining warnings in the PR description.
- For new utilities/components, include a minimal HTML snippet in `examples/` showing expected usage and verify it inherits theme variables correctly.

## Commit & Pull Request Guidelines
- Write concise, imperative commit messages (e.g., "Add focus ring refinement"), wrapping subject lines at ~72 characters.
- PRs should summarize scope, list notable visual changes, and link any related issues. Include before/after screenshots or short screencasts when altering appearance or interactions.
- Keep diffs focused: avoid unrelated formatting churn, and note any backwards-incompatible changes to variables or class names in the description.

## Security & Configuration Tips
- Do not embed secrets or external resources; keep the CSS self-contained and vendor-free.
- If referencing fonts or assets, prefer configurable URLs and document defaults so downstream projects can swap paths without editing core tokens.
