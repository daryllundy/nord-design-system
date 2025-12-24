/* Nord Theme Kernel -------------------------------------------------
   Lightweight runtime helper to set and toggle Nord themes.
   Usage:
   <link rel="stylesheet" href="/path/nord-theme.css">
   <script src="/path/theme-kernel.js"></script>
   <script>NordTheme.init();</script>
------------------------------------------------------------------- */
(function () {
  const DEFAULT_STORAGE_KEY = "nord-theme";
  const root = document.documentElement;

  function readStored(key) {
    try {
      const value = localStorage.getItem(key);
      return value === "light" || value === "dark" ? value : null;
    } catch (_) {
      return null;
    }
  }

  function applyTheme(theme, key) {
    const next = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    root.style.colorScheme = next;
    try { localStorage.setItem(key, next); } catch (_) { /* no-op */ }
    document.dispatchEvent(new CustomEvent("nord-theme-change", { detail: { theme: next } }));
    return next;
  }

  function resolveInitial(options) {
    const { storageKey, initialTheme } = options;
    const stored = readStored(storageKey);
    if (stored) return stored;

    if (initialTheme === "light" || initialTheme === "dark") {
      return initialTheme;
    }

    const fromDom = root.getAttribute("data-theme");
    if (fromDom === "light" || fromDom === "dark") {
      return fromDom;
    }

    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  }

  function bindToggle(handler) {
    const toggles = document.querySelectorAll("[data-nord-theme-toggle]");
    toggles.forEach((node) => node.addEventListener("click", handler));
    return () => toggles.forEach((node) => node.removeEventListener("click", handler));
  }

  function init(userOptions) {
    const options = userOptions || {};
    const storageKey = options.storageKey || DEFAULT_STORAGE_KEY;
    let current = resolveInitial({ storageKey, initialTheme: options.initialTheme });

    applyTheme(current, storageKey);

    const toggleTheme = () => {
      current = current === "light" ? "dark" : "light";
      applyTheme(current, storageKey);
    };

    const stopToggle = bindToggle(toggleTheme);
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const mediaListener = (event) => {
      const stored = readStored(storageKey);
      if (!stored) {
        current = event.matches ? "light" : "dark";
        applyTheme(current, storageKey);
      }
    };
    media.addEventListener("change", mediaListener);

    return {
      setTheme(theme) {
        current = applyTheme(theme, storageKey);
      },
      toggleTheme,
      getTheme() { return current; },
      destroy() {
        stopToggle();
        media.removeEventListener("change", mediaListener);
      }
    };
  }

  window.NordTheme = { init };
})();
