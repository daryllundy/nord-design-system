# Agent Usage Guide: Nord Design System Kernel

**Context for AI Assistants**: When asked to build UI or write HTML/CSS for this project, follow these guidelines.

## 1. Setup

If the user needs to install the system:
```bash
curl -sO https://raw.githubusercontent.com/daryllundy/nord-design-system/main/nord-theme.css
curl -sO https://raw.githubusercontent.com/daryllundy/nord-design-system/main/theme-kernel.js
```
Include `nord-theme.css` in `<head>` and `theme-kernel.js` at end of `<body>`, followed by `NordTheme.init()`.

## 2. Core Principles

- **Utility-First for Layout**: Use `.stack-*`, `.cluster`, `.grid` for structure. Do not write custom CSS for margins/padding if a utility exists.
- **Component-First for Elements**: Use `.button`, `.card`, `.input`, `.table` rather than creating new classes.
- **Token-Driven**: If writing custom CSS, ALWAYS use `var(--color-*)`, `var(--space-*)`, or `var(--radius-*)`. Never hardcode hex values or pixels.

## 3. Cheatsheet

### Layout Utilities
- **Vertical Stack**: `.stack-sm`, `.stack-md`, `.stack-lg` (flex-col, gap).
- **Horizontal Cluster**: `.cluster` (flex-row, wrap, gap, align-center).
- **Grid**: `.grid` (default gap), `.grid-2` (auto-fit min 240px).
- **Container**: `.container` (max-w, center, padded).
- **Spacing**: `.m-[0-5]`, `.p-[0-5]`.

### Components
- **Button**: `<button class="button">` (variants: `--ghost`, `--subtle`, `--danger`).
- **Card**: `<div class="card">` with `.card__title`, `.card__meta`, `.card__body`.
- **Text**: `.text-muted`, `.text-accent`, `.text-center`.
- **Form**: `.field` (wrapper), `.field__label`, `.input` (or `.textarea`, `.select`).
- **Surface**: `.surface`, `.surface--raised`.

### Critical Tokens
| Type | Main Tokens |
|------|-------------|
| **Color** | `--color-bg`, `--color-surface`, `--color-text`, `--color-primary`, `--color-border` |
| **Space** | `--space-1` (4px) ... `--space-6` (32px) |
| **Radius**| `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (12px) |

## 4. Example Snippet

```html
<section class="container stack-lg">
  <header class="cluster">
    <h1>Dashboard</h1>
    <button class="button">New Project</button>
  </header>
  
  <div class="grid grid-2">
    <div class="card">
      <h3 class="card__title">Stats</h3>
      <p class="text-muted">Overview of usage</p>
    </div>
  </div>
</section>
```
