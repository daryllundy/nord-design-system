# Design Tokens

The Nord Design System Kernel is built entirely on CSS Custom Properties. You can use these tokens anywhere in your application to ensure consistency.

## Palette

### Surface & Layout
| Token | Default (Dark) | Light Theme | Usage |
|-------|---------------|-------------|-------|
| `--color-bg` | `#2e3440` | `#eceff4` | Page background |
| `--color-surface` | `#3b4252` | `#e5e9f0` | Cards, modals, sidebars |
| `--color-surface-alt` | `#434c5e` | `#d8dee9` | Input backgrounds, table headers, subtle areas |
| `--color-border` | `#4c566a` | `#cdd3df` | Borders, dividers |

### Text
| Token | Default (Dark) | Light Theme | Usage |
|-------|---------------|-------------|-------|
| `--color-text` | `#e5e9f0` | `#2e3440` | Body text |
| `--color-heading` | `#eceff4` | `#1f2735` | Headings, strong emphasis |
| `--color-muted` | `#4c566a` | `#616f87` | Secondary text, placeholders, metadata |
| `--color-on-surface` | `#d8dee9` | `#2e3440` | Text on surface/card backgrounds |

### Brand & Feedback
| Token | Default (Dark) | Light Theme | Usage |
|-------|---------------|-------------|-------|
| `--color-primary` | `#88c0d0` | `#5e81ac` | Primary buttons, links |
| `--color-primary-strong` | `#5e81ac` | `#4c6489` | Hover states, active states |
| `--color-accent` | `#8fbcbb` | `#8fbcbb` | Hightlights, special elements |
| `--color-focus` | `#81a1c1` | `#4c6489` | Focus rings, active inputs |
| `--color-success` | `#a3be8c` | `#668f6d` | Success states, completion |
| `--color-warning` | `#d08770` | `#b26a49` | Warnings, strict attention |
| `--color-danger` | `#bf616a` | `#a54c55` | Errors, destructive actions |

## Typography

### Font Families
| Token | Value |
|-------|-------|
| `--font-sans` | `Inter`, system-ui, -apple-system, sans-serif... |
| `--font-mono` | `JetBrains Mono`, monospace... |

### Scale
| Token | Size |
|-------|------|
| `--text-sm` | `0.875rem` (14px) |
| `--text-base` | `1rem` (16px) |
| `--text-lg` | `1.125rem` (18px) |
| `--text-xl` | `1.375rem` (22px) |

### Metrics
| Token | Value |
|-------|-------|
| `--leading` | `1.6` |

## Spacing

Based on a 4px grid.

| Token | Value | Pixels |
|-------|-------|--------|
| `--space-0` | `0` | 0px |
| `--space-1` | `4px` | 4px |
| `--space-2` | `8px` | 8px |
| `--space-3` | `12px` | 12px |
| `--space-4` | `16px` | 16px |
| `--space-5` | `24px` | 24px |
| `--space-6` | `32px` | 32px |
| `--space-7` | `48px` | 48px |

## Radii & Shadows

| Token | Value |
|-------|-------|
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.25)` |
| `--shadow-md` | `0 6px 16px rgba(0,0,0,0.25)` |
| `--focus-ring`| `0 0 0 3px rgba(94, 129, 172, 0.6)` |
