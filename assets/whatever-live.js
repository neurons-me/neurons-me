// Compact two-column me.whatever(what) figure for the neurons-me index.
// Hover or click a line / node to select the same path on both sides.
// GitHub's README drops this script; the static table in the markdown stays as fallback.
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";

  var LINES = [
    { text: "me.colony.pantry.seeds(40);", path: "colony.pantry.seeds" },
    { text: "me.colony.pantry.honey(12);", path: "colony.pantry.honey" },
    { text: "me.colony.bees(4);", path: "colony.bees" },
    { text: 'me.colony["="]("food", "pantry.seeds + pantry.honey");', path: "colony.food" },
    { text: 'me.colony["="]("ration", "food / bees");', path: "colony.ration" },
    { text: 'me("colony.food");            // → 52', path: "colony.food" },
    { text: "me.colony.pantry.seeds(48);   // more seeds arrive", path: "colony.pantry.seeds" },
    { text: 'me("colony.food");            // → 60, recomputed', path: "colony.food" },
    { text: 'me("colony.ration");          // → 15, recomputed', path: "colony.ration" }
  ];

  var NODES = [
    { path: "", x: 248, y: 66, r: 24, root: true },
    { path: "colony", x: 248, y: 156, r: 28, label: "COLONY", ly: 118 },
    { path: "colony.pantry", x: 122, y: 272, r: 28, label: "PANTRY", ly: 232 },
    { path: "colony.bees", x: 248, y: 272, r: 28, label: "BEES", ly: 232, value: "4", vy: 277 },
    { path: "colony.food", x: 385, y: 248, r: 32, label: "FOOD [=]", ly: 190, value: "60", vy: 255, der: true },
    { path: "colony.pantry.seeds", x: 62, y: 392, r: 28, label: "SEEDS", ly: 442, value: "48", vy: 397 },
    { path: "colony.pantry.honey", x: 182, y: 392, r: 28, label: "HONEY", ly: 442, value: "12", vy: 397 },
    { path: "colony.ration", x: 385, y: 400, r: 32, label: "RATION [=]", ly: 454, value: "15", vy: 407, der: true }
  ];

  var EDGES = [
    { a: "", b: "colony", d: "M248 90 V128" },
    { a: "colony", b: "colony.pantry", d: "M227 175 L143 253" },
    { a: "colony", b: "colony.bees", d: "M248 184 V244" },
    { a: "colony", b: "colony.food", d: "M271 172 L358 230" },
    { a: "colony.pantry", b: "colony.pantry.seeds", d: "M110 297 L75 367" },
    { a: "colony.pantry", b: "colony.pantry.honey", d: "M135 297 L170 367" }
  ];

  var DEPS = [
    { src: "colony.pantry.seeds", dst: "colony.food", d: "M82 410 Q200 470 357 268" },
    { src: "colony.pantry.honey", dst: "colony.food", d: "M200 404 Q290 430 357 268" },
    { src: "colony.bees", dst: "colony.ration", d: "M272 288 Q310 360 353 400" },
    { src: "colony.food", dst: "colony.ration", d: "M385 280 V368" }
  ];

  var CSS = [
    ".whatever-live{clear:both;display:flow-root;margin:12px 0 28px}",
    ".whatever-live .wl-pair{display:grid;grid-template-columns:300px minmax(0,1fr);gap:8px 24px;align-items:start}",
    "@media (max-width:720px){.whatever-live .wl-pair{grid-template-columns:1fr}}.whatever-live .wl-script-col{min-width:0}.whatever-live .wl-title{margin:0 0 12px}.whatever-live .wl-links{margin:8px 2px 0;font:12px/1.4 system-ui,-apple-system,sans-serif;color:var(--muted,#656d76)}.whatever-live .wl-links a{color:inherit;text-decoration:none}.whatever-live .wl-links a:hover{color:var(--accent,#0969da)}",
    ".whatever-live .wl-script{margin:0;padding:12px 8px;border:1px solid var(--border,#d0d7de);border-radius:10px;background:var(--subtle,#f6f8fa);overflow:auto;font:13px/1.7 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--fg,#24292f)}",
    ".whatever-live .wl-line{display:block;padding:2px 10px;margin:0;border-radius:6px;cursor:pointer;white-space:pre-wrap;border-left:3px solid transparent}",
    ".whatever-live .wl-line:hover{background:color-mix(in srgb,var(--accent,#0969da) 10%,transparent)}",
    ".whatever-live .wl-line.on{background:color-mix(in srgb,var(--accent,#0969da) 14%,transparent);border-left-color:var(--accent,#0969da)}",
    ".whatever-live .wl-com{color:var(--hl-comment,#6b7280);font-style:italic}",
    ".whatever-live .wl-str{color:var(--hl-string,#0a7d3f)}",
    ".whatever-live .wl-num{color:var(--hl-number,#b45309)}",
    ".whatever-live .wl-me{color:var(--accent,#0969da);font-weight:600}",
    ".whatever-live .wl-graph{display:flex;align-items:center;justify-content:center;min-height:0}",
    ".whatever-live .wl-graph svg{display:block;width:100%;max-width:300px;height:auto;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;overflow:visible}",
    ".whatever-live .e{stroke:var(--border,#d0d7de);stroke-width:1.4;fill:none}",
    ".whatever-live .e.on{stroke:var(--accent,#0969da);stroke-width:2.2}",
    ".whatever-live .d{stroke:var(--accent,#0969da);fill:none}",
    ".whatever-live .dg{stroke-width:2.6;opacity:.45;filter:blur(2.5px)}",
    ".whatever-live .dd{stroke-width:1.6;stroke-dasharray:4 5;animation:wlFlow 1.6s linear infinite}",
    ".whatever-live .d.hot{stroke:var(--wl-sun,#c69026)}.whatever-live .dg.hot{opacity:.9}",
    "@keyframes wlFlow{to{stroke-dashoffset:-18}}",
    ".whatever-live .n{cursor:pointer;outline:none}",
    ".whatever-live .n circle{fill:var(--bg,#fff);stroke:var(--muted,#57606a);stroke-width:1.4;transition:stroke .15s}",
    ".whatever-live .n.der circle{stroke:var(--wl-sun,#c69026);stroke-width:2}",
    ".whatever-live .n.path circle{stroke:var(--accent,#0969da);stroke-width:2.2}",
    ".whatever-live .n.sel circle{stroke:var(--accent,#0969da);stroke-width:3}",
    ".whatever-live .n.der.sel circle{stroke:var(--wl-sun,#c69026);stroke-width:3}",
    ".whatever-live .n:focus-visible circle{stroke-dasharray:3 3}",
    ".whatever-live .n .lb{fill:var(--muted,#57606a);font-size:13px;letter-spacing:1.5px;text-anchor:middle}",
    ".whatever-live .n.der .lb{fill:var(--wl-sun,#c69026)}",
    ".whatever-live .n.path .lb,.whatever-live .n.sel .lb{fill:var(--accent,#0969da)}",
    ".whatever-live .n.der.sel .lb,.whatever-live .n.der.path .lb{fill:var(--wl-sun,#c69026)}",
    ".whatever-live .n .v{fill:var(--fg,#24292f);font:italic 18px Georgia,'DejaVu Serif',serif;text-anchor:middle}",
    ".whatever-live .n.der .v{fill:var(--wl-sun,#c69026);font-size:24px}",
    ".whatever-live .n .root{fill:var(--accent,#0969da);font-size:15px;text-anchor:middle}",
    ".whatever-live{--wl-sun:#c69026}",
    "@media (prefers-color-scheme:dark){.whatever-live{--wl-sun:#d29922}}",
    "@media (prefers-reduced-motion:reduce){.whatever-live .dd{animation:none}}"
  ].join("\n");

  function el(tag, attrs, parent) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) {
      if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    if (parent) parent.appendChild(n);
    return n;
  }

  function svg(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs || {}) {
      if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    if (parent) parent.appendChild(n);
    return n;
  }

  function prefixes(path) {
    var on = { "": 1 };
    if (!path) return on;
    var segs = path.split("."), acc = "";
    segs.forEach(function (s) {
      acc = acc ? acc + "." + s : s;
      on[acc] = 1;
    });
    return on;
  }

  var TOK = /(\/\/.*)$|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(\bme\b)/g;

  function paint(text, parent) {
    var last = 0, m;
    function add(cls, s) {
      if (!s) return;
      if (!cls) {
        parent.appendChild(document.createTextNode(s));
        return;
      }
      var sp = document.createElement("span");
      sp.className = cls;
      sp.textContent = s;
      parent.appendChild(sp);
    }
    while ((m = TOK.exec(text))) {
      add(null, text.slice(last, m.index));
      if (m[1]) add("wl-com", m[1]);
      else if (m[2]) add("wl-str", m[2]);
      else if (m[3]) add("wl-num", m[3]);
      else add("wl-me", m[4]);
      last = TOK.lastIndex;
    }
    add(null, text.slice(last));
    TOK.lastIndex = 0;
  }

  function mount(host) {
    if (!document.getElementById("wl-css")) el("style", { id: "wl-css", text: CSS }, document.head);

    var pair = el("div", { class: "wl-pair" });
    var graph = el("div", { class: "wl-graph" }, pair);
    var col = el("div", { class: "wl-script-col" }, pair);
    el("h2", { class: "wl-title", text: "me.whatever(what)" }, col);
    var pane = el("pre", { class: "wl-script", "aria-label": "me.whatever(what) script" }, col);
    var links = el("p", { class: "wl-links" }, col);
    el("a", { href: "https://neurons-me.github.io/.me/docs/Syntax.html", text: ".me syntax" }, links);
    links.appendChild(document.createTextNode(" · "));
    el("a", { href: "https://neurons-me.github.io/.me/docs/Operators.html", text: "operators" }, links);
    links.appendChild(document.createTextNode(" · "));
    el("a", { href: "https://neurons-me.github.io/.me/docs/Explain.html", text: "me.explain()" }, links);
    var svgRoot = svg("svg", {
      viewBox: "20 20 460 460",
      role: "img",
      "aria-label": "Path tree: pantry.seeds and pantry.honey derive food; food and bees derive ration"
    }, graph);

    var defs = svg("defs", {}, svgRoot);
    var filter = svg("filter", { id: "wlGlow", x: "-20%", y: "-20%", width: "140%", height: "140%" }, defs);
    svg("feGaussianBlur", { stdDeviation: "3" }, filter);

    var gE = svg("g", {}, svgRoot);
    var gD = svg("g", {}, svgRoot);
    var gN = svg("g", {}, svgRoot);

    var lineEls = [];
    LINES.forEach(function (ln) {
      var row = el("span", {
        class: "wl-line",
        tabindex: "0",
        role: "button",
        "data-path": ln.path,
        "aria-label": ln.text
      }, pane);
      paint(ln.text, row);
      lineEls.push(row);
    });

    var edgeEls = [];
    EDGES.forEach(function (e) {
      edgeEls.push({ a: e.a, b: e.b, el: svg("path", { class: "e", d: e.d }, gE) });
    });

    var depEls = [];
    DEPS.forEach(function (e) {
      var glow = svg("path", { class: "d dg", d: e.d }, gD);
      glow.setAttribute("filter", "url(#wlGlow)");
      depEls.push({
        src: e.src,
        dst: e.dst,
        g: glow,
        dd: svg("path", { class: "d dd", d: e.d }, gD)
      });
    });

    var nodeEls = {};
    NODES.forEach(function (n) {
      var g = svg("g", {
        class: "n" + (n.der ? " der" : ""),
        tabindex: "0",
        role: "button",
        "data-path": n.path,
        "aria-label": n.root ? "me" : n.path + (n.value ? " = " + n.value : "")
      }, gN);
      svg("circle", { cx: String(n.x), cy: String(n.y), r: String(n.r) }, g);
      if (n.root) svg("text", { class: "root", x: n.x, y: n.y + 5, text: "me" }, g);
      else {
        svg("text", { class: "lb", x: n.x, y: n.ly, text: n.label }, g);
        if (n.value) svg("text", { class: "v", x: n.x, y: n.vy, text: n.value }, g);
      }
      nodeEls[n.path] = g;
    });

    var pinned = host.getAttribute("data-sel") || "colony.ration";

    function relatedSet(current) {
      var rel = {};
      rel[current] = 1;
      var changed = true;
      while (changed) {
        changed = false;
        DEPS.forEach(function (e) {
          if (rel[e.dst] && !rel[e.src]) { rel[e.src] = 1; changed = true; }
        });
      }
      changed = true;
      while (changed) {
        changed = false;
        DEPS.forEach(function (e) {
          if (rel[e.src] && !rel[e.dst]) { rel[e.dst] = 1; changed = true; }
        });
      }
      return rel;
    }

    function apply(path) {
      var current = path || "";
      var on = prefixes(current);
      var rel = relatedSet(current);
      lineEls.forEach(function (row) {
        row.classList.toggle("on", row.getAttribute("data-path") === current);
      });
      edgeEls.forEach(function (e) {
        e.el.setAttribute("class", "e" + (on[e.a] && on[e.b] ? " on" : ""));
      });
      depEls.forEach(function (e) {
        var hot = !!(rel[e.src] && rel[e.dst]);
        e.g.setAttribute("class", "d dg" + (hot ? " hot" : ""));
        e.dd.setAttribute("class", "d dd" + (hot ? " hot" : ""));
      });
      NODES.forEach(function (n) {
        var g = nodeEls[n.path];
        var cls = "n";
        if (n.der) cls += " der";
        if (n.path === current) cls += " sel";
        else if (on[n.path] || rel[n.path]) cls += " path";
        g.setAttribute("class", cls);
        g.setAttribute("aria-pressed", n.path === current ? "true" : "false");
      });
    }

    function pin(path) {
      pinned = path;
      apply(path);
    }

    function restore() {
      apply(pinned);
    }

    function bind(node, path) {
      node.addEventListener("mouseenter", function () { apply(path); });
      node.addEventListener("mouseleave", restore);
      node.addEventListener("click", function () { pin(path); });
      node.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          pin(path);
        }
      });
    }

    lineEls.forEach(function (row) { bind(row, row.getAttribute("data-path")); });
    NODES.forEach(function (n) { bind(nodeEls[n.path], n.path); });

    host.textContent = "";
    host.appendChild(pair);
    apply(pinned);

    window.WhateverLive = {
      select: function (p) { pin(p); }
    };
  }

  function boot() {
    var host = document.getElementById("whatever-live");
    if (!host || host.getAttribute("data-wl") === "1") return;
    host.setAttribute("data-wl", "1");
    mount(host);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
