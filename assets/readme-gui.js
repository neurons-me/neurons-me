// .GUI topbar (this.gui@4.4.2) for Pages layout: readme. Mounts only the shared
// landing topbar (logo, me:// path, SearchBar, Docs, GitHub, theme, mode, gear)
// into #gui-root. The markdown body and whatever-live widget stay as they are.
// The static #static-topbar header is the no-JS / CDN-failure fallback.
(function () {
  const html = document.documentElement;
  const SRC = document.getElementById("static-topbar");
  const ROOT = document.getElementById("gui-root");
  const G = window.GUI;
  if (!G || !window.React || !window.ReactDOM || typeof G.mount !== "function" || !SRC || !ROOT) {
    html.classList.remove("gui-boot");
    return;
  }
  try { render(); } catch (e) {
    html.classList.remove("gui-on", "gui-boot");
    ROOT.innerHTML = "";
    console.error(e);
  }
  function render() {
    const h = React.createElement, params = new URLSearchParams(location.search);
    const { Box, Button, Link, IconButton } = G.Atoms;
    const { Menu, MenuItem, ListItemIcon, ListItemText } = G.Molecules;
    const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
    const N = (type, props, children) => ({ type, props: props || {}, ...(children ? { children } : {}) });
    const txt = (el) => (el ? el.textContent.trim() : "");

    const path = [...SRC.querySelectorAll(".mepath > a, .mepath > .here")].map((e) => ({
      text: txt(e), href: e.getAttribute("href"), title: e.getAttribute("title") || txt(e),
    }));
    const page = {
      path,
      docs: SRC.querySelector(".act") && SRC.querySelector(".act").getAttribute("href"),
      github: SRC.querySelector(".gh") && SRC.querySelector(".gh").getAttribute("href"),
    };

    const ICONS = {
      settings: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36 2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
      code: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
      grid: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z",
      palette: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
      moon: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z",
      sun: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z",
      search: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
      down: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z",
      github: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
    };
    const Ico = ({ kind, size = 18, off }) => h("svg", { viewBox: kind === "github" ? "0 0 16 16" : "0 0 24 24", width: size, height: size, fill: "currentColor", "aria-hidden": "true", focusable: "false", style: { display: "block", flex: "none" } },
      h("path", { d: ICONS[kind] }), off ? h("path", { d: "M3 3 21 21", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" }) : null);

    const SEARCH_SRC = "https://neurons-me.github.io/index.json";
    const searchSkin = (t) => {
      const P = t.palette, I = (v) => `${v} !important`, shadow = (t.shadows && t.shadows[8]) || "none";
      return {
        "& > div > div:first-of-type": { background: I(P.background.paper), borderColor: I(P.divider), color: I(P.text.primary), padding: I("6px 12px"), transition: "border-color 120ms ease" },
        "& > div > div:first-of-type:focus-within": { borderColor: I(P.primary.main) },
        "& input": { color: I(P.text.primary), caretColor: P.primary.main },
        "& input::placeholder": { color: P.text.secondary, opacity: 1 },
        "& [role=listbox]": { background: I(P.background.paper), borderColor: I(P.divider), boxShadow: I(shadow), color: P.text.primary },
        "& [role=listbox] > div": { color: I(P.text.secondary) },
        "& [role=option]": { color: I(P.text.primary), borderColor: I(P.divider) },
        "& [role=option]:hover, & [role=option][aria-selected=true]": { background: I(P.action.hover) },
        "& [role=option] > span:nth-of-type(2) > span:nth-of-type(2), & [role=option] > span:nth-of-type(3)": { color: I(P.text.secondary) },
      };
    };
    function TopSearch() {
      const SB = G.Components && G.Components.SearchBar;
      const [open, setOpen] = React.useState(false), box = React.useRef(null), btn = React.useRef(null);
      React.useEffect(() => { if (open) { const i = box.current && box.current.querySelector("input"); if (i) i.focus(); } }, [open]);
      React.useEffect(() => {
        if (open) return undefined;
        const k = (e) => { const t = e.target; if (e.key === "/" && !e.metaKey && !e.ctrlKey && !(t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable))) { e.preventDefault(); setOpen(true); } };
        window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
      }, [open]);
      if (!SB) return null;
      const close = (refocus) => { setOpen(false); if (refocus) setTimeout(() => btn.current && btn.current.focus(), 0); };
      if (!open) return h(G.Atoms.IconButton, { ref: btn, id: "site-search-open", size: "small", "aria-label": "Search", title: "Search (/)", onClick: () => setOpen(true), sx: { color: "text.secondary", p: { xs: .25, sm: .625 } } }, h(Ico, { kind: "search", size: 18 }));
      return h(G.Atoms.Box, { ref: box, id: "site-search", role: "search",
        onKeyDown: (e) => { if (e.key === "Escape") { e.preventDefault(); close(true); } },
        onBlur: (e) => { const nx = e.relatedTarget; if (nx && box.current && box.current.contains(nx)) return; const i = box.current && box.current.querySelector("input"); if (!i || !i.value.trim()) close(false); },
        sx: (t) => ({ zIndex: 1200, width: 300, minWidth: 0, flexShrink: 1, [t.breakpoints.down("sm")]: { position: "absolute", left: 8, right: 8, top: "50%", transform: "translateY(-50%)", width: "auto" },
          "& > div": { maxWidth: "none !important" }, ...searchSkin(t) }) },
        h(SB, { src: SEARCH_SRC, placeholder: "Search in All.This", themeMode: "auto", enableSlashShortcut: false }));
    }

    const LOGO = "https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629064/neurons.me_b50f6a.png";
    function ThemePicker() {
      const [anchor, setAnchor] = React.useState(null), { themeId } = G.useThemeContext(), close = () => setAnchor(null);
      return h(React.Fragment, null,
        h(Button, { id: "theme-picker", size: "small", variant: "outlined", "aria-label": `Theme: ${themeId}`, "aria-haspopup": "true", "aria-expanded": anchor ? "true" : "false", onClick: (e) => setAnchor(e.currentTarget),
          sx: { minWidth: 0, py: { xs: .5, sm: .25 }, px: { xs: .5, sm: .75 }, gap: .5, fontFamily: MONO, fontSize: 11, textTransform: "none", color: "text.secondary", borderColor: { xs: "transparent", sm: "divider" }, whiteSpace: "nowrap", "& .lbl": { display: { xs: "none", sm: "inline" } } } },
          h(Ico, { kind: "palette", size: 15 }), h(Box, { component: "span", className: "lbl" }, themeId), h(Box, { component: "span", className: "lbl" }, h(Ico, { kind: "down", size: 14 }))),
        h(Menu, { id: "theme-menu", anchorEl: anchor, open: !!anchor, onClose: close, anchorOrigin: { vertical: "bottom", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "right" }, "data-gui-inspector-control": "true",
          slotProps: { list: { "aria-label": "Themes", dense: true }, paper: { sx: { width: 220, p: .5, mt: .5 } } } },
          h(G.ThemesCatalog, { sidebarView: "expanded", onThemeSelect: close })));
    }
    function ModeToggle() {
      const { mode, toggleMode } = G.useThemeContext(), dark = mode === "dark";
      return h(IconButton, { id: "theme-mode-toggle", size: "small", onClick: () => toggleMode(), "aria-label": dark ? "Switch to light mode" : "Switch to dark mode", title: dark ? "Light mode" : "Dark mode", sx: { color: "text.secondary", p: { xs: .5, sm: .625 } } }, h(Ico, { kind: dark ? "moon" : "sun", size: 18 }));
    }
    function SettingsMenu() {
      const sel = G.useOptionalSelection ? G.useOptionalSelection() : null;
      const [anchor, setAnchor] = React.useState(null), close = () => setAnchor(null);
      React.useEffect(() => { if (sel && params.get("grid") === "1" && !sel.gridEnabled) sel.setGridEnabled(true); }, []);
      const insp = Boolean(G.getInspectorEnabled()), grid = Boolean(sel && sel.gridEnabled);
      const items = [
        { key: "inspector", label: insp ? "Inspector · ON" : "Inspector · OFF", icon: h(Ico, { kind: "code", off: !insp }), onClick: () => G.toggleInspector() },
        sel && { key: "grid", label: grid ? "Grid Layout · ON" : "Grid Layout · OFF", icon: h(Ico, { kind: "grid", off: !grid }), onClick: () => sel.setGridEnabled(!grid) },
      ].filter(Boolean);
      return h(React.Fragment, null,
        h(IconButton, { id: "gui-settings", "aria-label": "GUI settings", title: "GUI settings", size: "small", onClick: (e) => setAnchor(e.currentTarget), sx: { color: "text.secondary", p: { xs: .5, sm: .625 } } }, h(Ico, { kind: "settings", size: 18 })),
        h(Menu, { id: "settings-menu", anchorEl: anchor, open: !!anchor, onClose: close, "data-gui-inspector-control": "true", anchorOrigin: { vertical: "bottom", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "right" } },
          ...items.map((it) => h(MenuItem, { key: it.key, "data-settings-item": it.key, onClick: () => { close(); it.onClick(); } }, h(ListItemIcon, null, it.icon), h(ListItemText, null, it.label)))));
    }
    function SibSlot(p) {
      var f = React.useState(0)[1];
      React.useEffect(function () {
        if (window.MeSiblings) return;
        var on = function () { f(1); };
        addEventListener("me-siblings", on);
        if (!document.getElementById("me-siblings")) {
          var s = document.createElement("script");
          s.id = "me-siblings";
          s.src = "https://neurons-me.github.io/assets/me-siblings.js?v=4";
          document.head.appendChild(s);
        }
        return function () { removeEventListener("me-siblings", on); };
      }, []);
      return window.MeSiblings ? window.MeSiblings.node(p.path, p.i) : null;
    }
    function LandingTopBar(p) {
      const { mode } = G.useThemeContext();
      React.useEffect(() => { html.dataset.guiMode = mode === "dark" ? "dark" : "light"; }, [mode]);
      const seg = (s, i) => [i > 0 && !page.path[i - 1].text.endsWith("://") ? h(Box, { component: "span", key: `sep${i}`, sx: { color: "text.disabled", mx: .15 } }, "/") : null,
        s.href ? h(Link, { key: s.text, href: s.href, underline: "hover", title: s.title, sx: { color: "primary.main", fontFamily: MONO, fontSize: { xs: 12, sm: 13 } } }, s.text)
          : h(Box, { component: "span", key: s.text, "aria-current": "page", sx: { color: "text.primary", fontFamily: MONO, fontSize: { xs: 12, sm: 13 }, fontWeight: 600 } }, s.text), h(SibSlot, { key: "sib" + i, path: page.path, i: i })];
      return h(Box, { component: "nav", "aria-label": "me path", "data-gui-node-id": p["data-gui-node-id"], sx: { position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", gap: { xs: .5, sm: 1.25 }, px: { xs: .75, sm: 2.5 }, minHeight: 48, borderBottom: 1, borderColor: "divider", bgcolor: "background.paper" } },
        h(Link, { href: "https://neurons-me.github.io/", title: "neurons.me", underline: "none", sx: { display: "inline-flex", lineHeight: 0, flexShrink: 0 } }, h("img", { src: LOGO, alt: "neurons.me", width: 28, height: 28, style: { display: "block", objectFit: "contain" } })),
        h(Box, { sx: { display: "inline-flex", alignItems: "center", minWidth: 0, overflowX: "auto", whiteSpace: "nowrap", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } } }, ...page.path.flatMap(seg)),
        h(Box, { sx: { ml: "auto", display: "inline-flex", alignItems: "center", gap: { xs: .25, sm: 1.25 }, flexShrink: 0 } },
          h(TopSearch),
          page.docs && h(Link, { href: page.docs, underline: "hover", sx: { fontFamily: MONO, fontSize: 12, color: "text.secondary" } }, "Docs"),
          page.github && h(Link, { href: page.github, underline: "none", target: "_blank", rel: "noopener", title: "GitHub · neurons-me", "aria-label": "GitHub", sx: { display: "inline-flex", lineHeight: 0, color: "text.secondary", "&:hover": { color: "text.primary" } } }, h(Ico, { kind: "github", size: 18 })),
          h(Box, { "data-gui-inspector-control": "true", sx: { display: "inline-flex", alignItems: "center", gap: .25 } }, h(ThemePicker), h(ModeToggle), h(SettingsMenu))));
    }

    const scope = window.__thisGuiThemeScope || {};
    let mode = "dark";
    try {
      const pref = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
      mode = params.get("mode") || localStorage.getItem(scope.themeModeKey) || pref;
      if (params.get("mode")) localStorage.setItem(scope.themeModeKey, mode);
    } catch (e) {}
    html.dataset.guiMode = mode === "dark" ? "dark" : "light";
    const PageTheme = ({ children }) => h(G.Theme, { initialThemeId: "neurons.me", initialMode: mode }, children);
    const INSPECTOR_ON = params.get("inspector") === "1";
    if (typeof G.getInspectorEnabled === "function" && G.getInspectorEnabled() !== INSPECTOR_ON) G.setInspectorEnabled(INSPECTOR_ON);
    G.mount(N("LandingTopBar", {}), ROOT, {
      gui: { ...G, Theme: PageTheme, registry: { ...(G.Registry || G.registry), LandingTopBar } },
      devtools: { enabled: true, inspector: INSPECTOR_ON, adminView: false, inspectorToggleVisible: false },
    });
    html.classList.add("gui-on");
  }
})();
