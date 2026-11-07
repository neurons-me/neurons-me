// Compact me.whatever(what) figure: the title stays; examples and languages cycle.
// Hover a word, a line or a node to see the same path on every side.
// Language pills cycle like the .me/LLMS hero (without depending on that project).
// Loaded from the Pages layout, not the README.
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";

  var LANGS = [
    { lang: "en", name: "English" },
    { lang: "es", name: "Español" },
    { lang: "fr", name: "Français" },
    { lang: "de", name: "Deutsch" },
    { lang: "it", name: "Italiano" },
    { lang: "pt", name: "Português" }
  ];

  var FRAMES = [
    { id: "whatever", label: "whatever", kind: "pair" },
    { id: "ours", label: "ours", kind: "triple" },
    { id: "both", label: "both", kind: "triple" }
  ];

  var EXAMPLES = {
    whatever: {
      en: { text: "set [what|w] to [8|w] and let [whatever|W] follow [what|w] times two plus one", sets: [{ path: "what", value: 8 }], define: { name: "whatever", expr: "what * 2 + 1", result: 17 } },
      es: { text: "pon [qué|w] en [8|w] y que [cualquiera|W] siga a [qué|w] por dos más uno", sets: [{ path: "que", value: 8 }], define: { name: "cualquiera", expr: "que * 2 + 1", result: 17 } },
      fr: { text: "mets [quoi|w] à [8|w] et que [quelconque|W] suive [quoi|w] fois deux plus un", sets: [{ path: "quoi", value: 8 }], define: { name: "quelconque", expr: "quoi * 2 + 1", result: 17 } },
      de: { text: "setze [was|w] auf [8|w] und lass [beliebig|W] [was|w] mal zwei plus eins folgen", sets: [{ path: "was", value: 8 }], define: { name: "beliebig", expr: "was * 2 + 1", result: 17 } },
      it: { text: "metti [cosa|w] a [8|w] e lascia che [qualunque|W] segua [cosa|w] per due più uno", sets: [{ path: "cosa", value: 8 }], define: { name: "qualunque", expr: "cosa * 2 + 1", result: 17 } },
      pt: { text: "põe [o que|w] em [8|w] e que [qualquer|W] siga [o que|w] vezes dois mais um", sets: [{ path: "que", value: 8 }], define: { name: "qualquer", expr: "que * 2 + 1", result: 17 } }
    },
    ours: {
      en: { text: "set [mine|a] to [8|a] and [yours|b] to [3|b], and let [ours|t] be [mine|a] times [yours|b] plus one", sets: [{ path: "mine", value: 8 }, { path: "yours", value: 3 }], define: { name: "ours", expr: "mine * yours + 1", result: 25 } },
      es: { text: "pon [mío|a] en [8|a] y [tuyo|b] en [3|b], y que [nuestro|t] sea [mío|a] por [tuyo|b] más uno", sets: [{ path: "mio", value: 8 }, { path: "tuyo", value: 3 }], define: { name: "nuestro", expr: "mio * tuyo + 1", result: 25 } },
      fr: { text: "mets [mien|a] à [8|a] et [tien|b] à [3|b], et que [nôtre|t] soit [mien|a] fois [tien|b] plus un", sets: [{ path: "mien", value: 8 }, { path: "tien", value: 3 }], define: { name: "notre", expr: "mien * tien + 1", result: 25 } },
      de: { text: "setze [meins|a] auf [8|a] und [deins|b] auf [3|b], und lass [unser|t] [meins|a] mal [deins|b] plus eins sein", sets: [{ path: "meins", value: 8 }, { path: "deins", value: 3 }], define: { name: "unser", expr: "meins * deins + 1", result: 25 } },
      it: { text: "metti [mio|a] a [8|a] e [tuo|b] a [3|b], e che [nostro|t] sia [mio|a] per [tuo|b] più uno", sets: [{ path: "mio", value: 8 }, { path: "tuo", value: 3 }], define: { name: "nostro", expr: "mio * tuo + 1", result: 25 } },
      pt: { text: "põe [meu|a] em [8|a] e [teu|b] em [3|b], e que [nosso|t] seja [meu|a] vezes [teu|b] mais um", sets: [{ path: "meu", value: 8 }, { path: "teu", value: 3 }], define: { name: "nosso", expr: "meu * teu + 1", result: 25 } }
    },
    both: {
      en: { text: "set [this|a] to [8|a] and [that|b] to [3|b], and let [both|t] be [this|a] times [that|b] plus one", sets: [{ path: "this", value: 8 }, { path: "that", value: 3 }], define: { name: "both", expr: "this * that + 1", result: 25 } },
      es: { text: "pon [esto|a] en [8|a] y [aquello|b] en [3|b], y que [ambos|t] sean [esto|a] por [aquello|b] más uno", sets: [{ path: "esto", value: 8 }, { path: "aquello", value: 3 }], define: { name: "ambos", expr: "esto * aquello + 1", result: 25 } },
      fr: { text: "mets [ceci|a] à [8|a] et [cela|b] à [3|b], et que [les deux|t] soit [ceci|a] fois [cela|b] plus un", sets: [{ path: "ceci", value: 8 }, { path: "cela", value: 3 }], define: { name: "deux", expr: "ceci * cela + 1", result: 25 } },
      de: { text: "setze [dies|a] auf [8|a] und [das|b] auf [3|b], und lass [beides|t] [dies|a] mal [das|b] plus eins sein", sets: [{ path: "dies", value: 8 }, { path: "das", value: 3 }], define: { name: "beides", expr: "dies * das + 1", result: 25 } },
      it: { text: "metti [questo|a] a [8|a] e [quello|b] a [3|b], e che [entrambi|t] sia [questo|a] per [quello|b] più uno", sets: [{ path: "questo", value: 8 }, { path: "quello", value: 3 }], define: { name: "entrambi", expr: "questo * quello + 1", result: 25 } },
      pt: { text: "põe [isto|a] em [8|a] e [aquilo|b] em [3|b], e que [ambos|t] sejam [isto|a] vezes [aquilo|b] mais um", sets: [{ path: "isto", value: 8 }, { path: "aquilo", value: 3 }], define: { name: "ambos", expr: "isto * aquilo + 1", result: 25 } }
    }
  };

  function build(frame, langMeta, ex) {
    var sets = ex.sets;
    var def = ex.define;
    var t = def.name;
    var ROLE = { w: sets[0].path, W: t, a: sets[0].path, t: t };
    if (sets[1]) ROLE.b = sets[1].path;
    var segs = [], re = /\[([^|\]]+)\|([^\]]+)\]/g, i = 0, mm;
    while ((mm = re.exec(ex.text))) {
      if (mm.index > i) segs.push({ t: ex.text.slice(i, mm.index) });
      segs.push({ t: mm[1], path: ROLE[mm[2]] });
      i = re.lastIndex;
    }
    if (i < ex.text.length) segs.push({ t: ex.text.slice(i) });

    var lines = sets.map(function (s) {
      return { text: "me." + s.path + "(" + s.value + ");", path: s.path };
    });
    lines.push({ text: 'me["="](' + JSON.stringify(def.name) + ", " + JSON.stringify(def.expr) + ");", path: t });
    lines.push({ text: 'me("' + t + '");              // → ' + def.result, path: t });

    var nodes, edges, depsE;
    if (frame.kind === "pair") {
      nodes = [
        { path: "", x: 248, y: 64, r: 22, root: true },
        { path: sets[0].path, x: 140, y: 240, r: 32, label: sets[0].path, ly: 192, value: String(sets[0].value), vy: 246 },
        { path: t, x: 360, y: 240, r: 36, label: t + " [=]", ly: 188, value: String(def.result), vy: 247, der: true }
      ];
      edges = [
        { a: "", b: sets[0].path, d: "M226 86 L162 208" },
        { a: "", b: t, d: "M270 86 L336 204" }
      ];
      depsE = [{ src: sets[0].path, dst: t, d: "M172 250 Q248 312 328 250" }];
    } else {
      nodes = [
        { path: "", x: 248, y: 56, r: 22, root: true },
        { path: sets[0].path, x: 110, y: 220, r: 32, label: sets[0].path, ly: 172, value: String(sets[0].value), vy: 226 },
        { path: sets[1].path, x: 386, y: 220, r: 32, label: sets[1].path, ly: 172, value: String(sets[1].value), vy: 226 },
        { path: t, x: 248, y: 310, r: 36, label: t + " [=]", ly: 258, value: String(def.result), vy: 317, der: true }
      ];
      edges = [
        { a: "", b: sets[0].path, d: "M226 78 L132 190" },
        { a: "", b: sets[1].path, d: "M270 78 L364 190" },
        { a: "", b: t, d: "M248 78 V274" }
      ];
      depsE = [
        { src: sets[0].path, dst: t, d: "M140 250 Q180 286 220 298" },
        { src: sets[1].path, dst: t, d: "M356 250 Q316 286 276 298" }
      ];
    }
    return { frame: frame, lang: langMeta, q: t, segs: segs, lines: lines, nodes: nodes, edges: edges, deps: depsE };
  }

  var MODELS = FRAMES.map(function (frame) {
    return LANGS.map(function (langMeta) {
      return build(frame, langMeta, EXAMPLES[frame.id][langMeta.lang]);
    });
  });

  var CSS = [
    ".whatever-live{clear:both;display:flow-root;margin:12px 0 28px}",
    ".whatever-live .wl-head{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px 16px;margin:0 0 10px}",
    ".whatever-live .wl-title{margin:0}",
    ".whatever-live .wl-langs,.whatever-live .wl-frames{display:flex;flex-wrap:wrap;gap:6px}",
    ".whatever-live .wl-frames{margin:0 0 12px}",
    ".whatever-live .wl-pill{font:600 11px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.06em;padding:5px 10px;border-radius:999px;border:1px solid var(--border,#d0d7de);background:transparent;color:var(--muted,#656d76);cursor:pointer}",
    ".whatever-live .wl-pill:hover{color:var(--fg,#24292f)}",
    ".whatever-live .wl-pill.on{border-color:var(--accent,#0969da);color:var(--accent,#0969da);background:color-mix(in srgb,var(--accent,#0969da) 12%,transparent)}",
    ".whatever-live .wl-say{font:600 17px/1.45 system-ui,-apple-system,sans-serif;margin:0 0 14px;color:var(--fg,#24292f)}",
    ".whatever-live .wl-w{cursor:pointer;border-radius:4px;padding:0 2px;margin:0 -2px;text-decoration:underline dotted color-mix(in srgb,var(--accent,#0969da) 55%,transparent);text-underline-offset:4px}",
    ".whatever-live .wl-w.on{background:color-mix(in srgb,var(--accent,#0969da) 16%,transparent);text-decoration-color:var(--accent,#0969da)}",
    ".whatever-live .wl-pair{display:grid;grid-template-columns:300px minmax(0,1fr);gap:8px 24px;align-items:start}",
    "@media (max-width:720px){.whatever-live .wl-pair{grid-template-columns:1fr}}",
    ".whatever-live .wl-script-col{min-width:0}",
    ".whatever-live .wl-links{margin:8px 2px 0;font:12px/1.4 system-ui,-apple-system,sans-serif;color:var(--muted,#656d76)}.whatever-live .wl-links a{color:inherit;text-decoration:none}.whatever-live .wl-links a:hover{color:var(--accent,#0969da)}",
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
    ".whatever-live .n .lb{fill:var(--muted,#57606a);font-size:13px;letter-spacing:.4px;text-anchor:middle}",
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

  var TOK = /(\/\/.*)$|("(?:[^"\\\\]|\\\\.)*")|(-?\\d+(?:\\.\\d+)?)|(\\bme\\b)/g;

  function paint(text, parent) {
    var lasti = 0, m;
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
      add(null, text.slice(lasti, m.index));
      if (m[1]) add("wl-com", m[1]);
      else if (m[2]) add("wl-str", m[2]);
      else if (m[3]) add("wl-num", m[3]);
      else add("wl-me", m[4]);
      lasti = TOK.lastIndex;
    }
    add(null, text.slice(lasti));
    TOK.lastIndex = 0;
  }

  function mount(host) {
    if (!document.getElementById("wl-css")) el("style", { id: "wl-css", text: CSS }, document.head);

    var li = 0;
    var fi = 0;
    var hold = false;
    var pinned = MODELS[0][0].q;
    var timer = null;

    var head = el("div", { class: "wl-head" });
    el("h2", { class: "wl-title", text: "me.whatever(what)" }, head);
    var pills = el("div", { class: "wl-langs", role: "tablist", "aria-label": "language" }, head);
    var pillEls = LANGS.map(function (L, i) {
      var b = el("button", {
        class: "wl-pill" + (i === 0 ? " on" : ""),
        type: "button",
        role: "tab",
        "aria-selected": i === 0 ? "true" : "false",
        lang: L.lang,
        title: L.name,
        text: L.lang.toUpperCase()
      }, pills);
      b.addEventListener("click", function () { show(i, fi); });
      return b;
    });
    var frames = el("div", { class: "wl-frames", role: "tablist", "aria-label": "example" });
    var frameEls = FRAMES.map(function (F, i) {
      var b = el("button", {
        class: "wl-pill" + (i === 0 ? " on" : ""),
        type: "button",
        role: "tab",
        "aria-selected": i === 0 ? "true" : "false",
        text: F.label
      }, frames);
      b.addEventListener("click", function () { show(li, i); });
      return b;
    });
    var say = el("p", { class: "wl-say" });
    var pair = el("div", { class: "wl-pair" });
    var links = el("p", { class: "wl-links" });
    el("a", { href: "https://neurons-me.github.io/.me/docs/Syntax.html", text: ".me syntax" }, links);
    links.appendChild(document.createTextNode(" · "));
    el("a", { href: "https://neurons-me.github.io/.me/docs/Operators.html", text: "operators" }, links);
    links.appendChild(document.createTextNode(" · "));
    el("a", { href: "https://neurons-me.github.io/.me/docs/Explain.html", text: "me.explain()" }, links);

    var wordEls = [];
    var lineEls = [];
    var edgeEls = [];
    var depEls = [];
    var nodeEls = {};
    var nodes = [];
    var deps = [];

    function relatedSet(current) {
      var rel = {};
      rel[current] = 1;
      var changed = true;
      while (changed) {
        changed = false;
        deps.forEach(function (e) {
          if (rel[e.dst] && !rel[e.src]) { rel[e.src] = 1; changed = true; }
        });
      }
      changed = true;
      while (changed) {
        changed = false;
        deps.forEach(function (e) {
          if (rel[e.src] && !rel[e.dst]) { rel[e.dst] = 1; changed = true; }
        });
      }
      return rel;
    }

    function apply(path) {
      var current = path || "";
      var on = prefixes(current);
      nodes.forEach(function (n) {
        if (current && n.path.indexOf(current + ".") === 0) on[n.path] = 1;
      });
      var rel = relatedSet(current);
      function hit(el) {
        var p = el.getAttribute("data-path") || "";
        el.classList.toggle("on", p === current);
      }
      wordEls.forEach(hit);
      lineEls.forEach(hit);
      edgeEls.forEach(function (e) {
        e.el.setAttribute("class", "e" + (on[e.a] && on[e.b] ? " on" : ""));
      });
      depEls.forEach(function (e) {
        var hot = !!(rel[e.src] && rel[e.dst]);
        e.g.setAttribute("class", "d dg" + (hot ? " hot" : ""));
        e.dd.setAttribute("class", "d dd" + (hot ? " hot" : ""));
      });
      nodes.forEach(function (n) {
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

    function restore() { apply(pinned); }

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

    function draw() {
      var G = MODELS[fi][li];
      nodes = G.nodes;
      deps = G.deps;
      pinned = G.q;

      pillEls.forEach(function (b, i) {
        b.className = "wl-pill" + (i === li ? " on" : "");
        b.setAttribute("aria-selected", i === li ? "true" : "false");
      });
      frameEls.forEach(function (b, i) {
        b.className = "wl-pill" + (i === fi ? " on" : "");
        b.setAttribute("aria-selected", i === fi ? "true" : "false");
      });

      say.textContent = "";
      say.setAttribute("lang", G.lang.lang);
      say.appendChild(document.createTextNode("“"));
      wordEls = [];
      G.segs.forEach(function (seg) {
        if (!seg.path) {
          say.appendChild(document.createTextNode(seg.t));
          return;
        }
        var w = el("span", { class: "wl-w", tabindex: "0", role: "button", "data-path": seg.path, "aria-label": seg.t }, say);
        w.textContent = seg.t;
        bind(w, seg.path);
        wordEls.push(w);
      });
      say.appendChild(document.createTextNode("”"));

      pair.textContent = "";
      var graph = el("div", { class: "wl-graph" }, pair);
      var col = el("div", { class: "wl-script-col" }, pair);
      var pane = el("pre", { class: "wl-script", "aria-label": "me.whatever(what) script" }, col);
      var svgRoot = svg("svg", {
        viewBox: "20 20 460 360",
        role: "img",
        "aria-label": "Path tree: " + G.frame.label + " in " + G.lang.name
      }, graph);
      var defs = svg("defs", {}, svgRoot);
      var filter = svg("filter", { id: "wlGlow", x: "-20%", y: "-20%", width: "140%", height: "140%" }, defs);
      svg("feGaussianBlur", { stdDeviation: "3" }, filter);
      var gE = svg("g", {}, svgRoot);
      var gD = svg("g", {}, svgRoot);
      var gN = svg("g", {}, svgRoot);

      lineEls = [];
      G.lines.forEach(function (ln) {
        var row = el("span", {
          class: "wl-line",
          tabindex: "0",
          role: "button",
          "data-path": ln.path,
          "aria-label": ln.text
        }, pane);
        paint(ln.text, row);
        lineEls.push(row);
        bind(row, ln.path);
      });

      edgeEls = [];
      G.edges.forEach(function (e) {
        edgeEls.push({ a: e.a, b: e.b, el: svg("path", { class: "e", d: e.d }, gE) });
      });
      depEls = [];
      G.deps.forEach(function (e) {
        var glow = svg("path", { class: "d dg", d: e.d }, gD);
        glow.setAttribute("filter", "url(#wlGlow)");
        depEls.push({ src: e.src, dst: e.dst, g: glow, dd: svg("path", { class: "d dd", d: e.d }, gD) });
      });
      nodeEls = {};
      G.nodes.forEach(function (n) {
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
          svg("text", { class: "lb", x: n.lx != null ? n.lx : n.x, y: n.ly, text: n.label }, g);
          if (n.value) svg("text", { class: "v", x: n.x, y: n.vy, text: n.value }, g);
        }
        nodeEls[n.path] = g;
        bind(g, n.path);
      });
      apply(pinned);
    }

    function show(newLi, newFi) {
      li = newLi;
      fi = newFi;
      draw();
      arm();
    }

    function arm() {
      if (timer) clearTimeout(timer);
      timer = null;
      if (hold) return;
      timer = setTimeout(function () {
        show(li, (fi + 1) % FRAMES.length);
      }, 4000);
    }

    host.textContent = "";
    host.appendChild(head);
    host.appendChild(frames);
    host.appendChild(say);
    host.appendChild(pair);
    host.appendChild(links);
    host.addEventListener("mouseenter", function () { hold = true; if (timer) clearTimeout(timer); });
    host.addEventListener("mouseleave", function () { hold = false; arm(); });
    draw();
    arm();
  }

  function syncThemedPictures() {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    function applyPic() {
      var pics = document.querySelectorAll("picture");
      for (var i = 0; i < pics.length; i++) {
        var sources = pics[i].querySelectorAll("source");
        for (var j = 0; j < sources.length; j++) {
          var s = sources[j];
          var orig = s.getAttribute("data-media") || s.getAttribute("media") || "";
          if (!/prefers-color-scheme/.test(orig)) continue;
          if (!s.getAttribute("data-media")) s.setAttribute("data-media", orig);
          var wantsDark = /prefers-color-scheme:\s*dark/.test(s.getAttribute("data-media"));
          s.media = mq.matches === wantsDark ? "all" : "not all";
        }
      }
    }
    if (mq.addEventListener) mq.addEventListener("change", applyPic);
    else if (mq.addListener) mq.addListener(applyPic);
    applyPic();
  }

  function boot() {
    syncThemedPictures();
    var host = document.getElementById("whatever-live");
    if (!host || host.getAttribute("data-wl") === "1") return;
    host.setAttribute("data-wl", "1");
    mount(host);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
