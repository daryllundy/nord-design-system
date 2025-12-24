# Components & Utilities

A plain HTML/CSS guide to using the Nord Design System Kernel's primitives.

## Components

### Button
Standard interactive elements.

```html
<!-- Primary -->
<a href="#" class="button">Action</a>
<button class="button">Submit</button>

<!-- Styles -->
<button class="button button--ghost">Ghost</button>
<button class="button button--subtle">Subtle</button>
<button class="button button--danger">Delete</button>
<button class="button button--success">Save</button>
```

### Card
Containers for grouped content.

```html
<div class="card">
  <h3 class="card__title">Card Title</h3>
  <div class="card__meta">Optional metadata</div>
  <p class="card__body">
    Main content goes here.
  </p>
</div>
```

### Forms
Standard form controls with accessible focus states.

```html
<form class="stack-md">
  
  <!-- Text Input -->
  <div class="field">
    <label class="field__label" for="username">Username</label>
    <input type="text" id="username" class="input" placeholder="Enter name">
    <span class="field__hint">Must be unique.</span>
  </div>

  <!-- Select -->
  <div class="field">
    <label class="field__label">Role</label>
    <select class="input">
      <option>User</option>
      <option>Admin</option>
    </select>
  </div>

  <!-- Checkbox -->
  <label class="checkbox">
    <input type="checkbox"> 
    Subscribe to newsletter
  </label>

</form>
```

### Alert
Feedback blocks for user notification.

```html
<div class="alert">Default Info Alert</div>
<div class="alert alert--success">Operation Successful</div>
<div class="alert alert--warning">Check your inputs</div>
<div class="alert alert--danger">Fatal Error</div>
```

### Data Display

**Table**
```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project A</td>
      <td><span class="badge">Active</span></td>
    </tr>
  </tbody>
</table>
```

**Badge & Pill**
```html
<span class="badge">Version 1.0</span>
<span class="pill">User Interface</span>
```

## Utilities

### Layout

**Stack** (Vertical rhythm)
```html
<div class="stack-md">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```
Available sizes: `.stack-sm` (12px), `.stack-md` (16px), `.stack-lg` (24px).

**Cluster** (Horizontal grouping)
Good for buttons or tags.
```html
<div class="cluster">
  <button>One</button>
  <button>Two</button>
</div>
```

**Grid**
Default grid gap.
```html
<div class="grid grid-2"> <!-- grid-2 = auto-fit min 240px -->
  <div>Col 1</div>
  <div>Col 2</div>
</div>
```

**Container**
Centers content with a max-width of 1080px.
```html
<main class="container">...</main>
```

### Visuals
- `.text-muted`: Dimmed text color
- `.text-accent`: Accent text color
- `.text-center`: Center alignment
- `.surface`: Applies surface background, border, and shadow
- `.surface--raised`: Higher elevation shadow
