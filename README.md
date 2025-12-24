# Nord Design System Kernel

A lightweight, drop-in design system kernel based on the [Nord](https://www.nordtheme.com/) color palette. This project provides a framework-agnostic CSS core and a tiny JavaScript runtime for theme orchestration.

## Features

- **🎨 Nord Palette**: Full support for Nord's beautiful arctic blue color scheme.
- **🌗 Dark & Light Modes**: Built-in support for both dark (default) and light themes, with automatic system preference detection.
- **🛠️ Utility First**: specific utility classes for spacing, layout, text, and surfaces.
- **🧱 Component Primitives**: Styled base components including Buttons, Cards, Forms, Tables, and Alerts.
- **🔌 Zero Dependencies**: Pure CSS and Vanilla JS. No build step required.
- **💾 Theme Persistence**: Remembers user preference via `localStorage`.

## 🤖 Agentic AI Usage

This kernel is optimized for use with Agentic AI coding workflow. If you are using an AI assistant (like Cursor, Windsurf, or generic LLM agents) to build your web app, you can "theme" your entire application by providing the agent with the **[AGENT_USAGE.md](AGENT_USAGE.md)** file.

This allows the AI to:
1. Understand the visual language of Nord immediately.
2. Use the correct utility classes and component structures without guessing.
3. adhere to the design system's constraints (tokens, spacing, radii).

Simply add `AGENT_USAGE.md` to your project's context or system prompt to instruct the agent to "Build using the Nord Design System Kernel".

## Quick Start

### 1. Download the Kernel

You can fetch the latest files directly into your project:

```bash
# Get the CSS core
curl -sO https://raw.githubusercontent.com/daryllundy/nord-design-system/main/nord-theme.css

# Get the JS runtime
curl -sO https://raw.githubusercontent.com/daryllundy/nord-design-system/main/theme-kernel.js
```

### 2. Add to HTML

Include the stylesheet and script in your HTML file, then initialize the theme kernel.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="nord-theme.css">
</head>
<body>
  
  <!-- Your content here -->

  <script src="theme-kernel.js"></script>
  <script>
    NordTheme.init();
  </script>
</body>
</html>
```

## Usage

### Theme Toggling

To add a theme toggle button, simply add the `data-nord-theme-toggle` attribute to any clickable element. The kernel will automatically bind the click event.

```html
<button class="button" data-nord-theme-toggle>
  Toggle Theme
</button>
```

### Core Components

The system includes several primitive components ready to use:

**Buttons**
```html
<button class="button">Primary</button>
<button class="button button--secondary">Secondary</button>
<button class="button button--ghost">Ghost</button>
```

**Cards**
```html
<div class="card">
  <h3 class="card__title">Card Content</h3>
  <p class="card__body">Simple, clean container for content.</p>
</div>
```

**Forms**
```html
<div class="field">
  <label class="field__label">Email</label>
  <input type="email" class="input" placeholder="snow@nord.com">
</div>
```

### Utility Classes

- **Layout**: `.stack-sm`, `.stack-md`, `.cluster`, `.grid`, `.container`
- **Spacing**: `.m-1` through `.m-5` (margins), `.p-1` through `.p-5` (padding)
- **Text**: `.text-muted`, `.text-accent`, `.text-center`
- **Surface**: `.surface`, `.surface--raised`

## Customization

The design system is built entirely on CSS Custom Properties (variables). You can easily override these in your own CSS:

```css
:root {
  /* Override the primary color */
  --color-primary: #5e81ac;
  
  /* Change the base radius */
  --radius-md: 6px;
}
```

Check `nord-theme.css` for the full list of available tokens.

## Development

No build pipeline is required. You can edit the CSS/JS files directly.

To view the examples locally:

```bash
python -m http.server
# Open http://localhost:8000/examples/
```

## License

MIT
