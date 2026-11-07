// Compact me.whatever(what) figure: the title stays; examples and languages cycle.
// Hover a word, a line or a node to see the same path on every side.
// Language pills cycle like the .me/LLMS hero (without depending on that project).
// Loaded from the Pages layout, not the README.
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";

  var GUI_ICONS = {
    "receipt_long": { viewBox: "0 -960 960 960", d: "M222-80q-43.75 0-74.37-30.63Q117-141.25 117-185v-95q0-12.75 8.63-21.38Q134.25-310 147-310h97v-552q0-5.25 4.5-7.13Q253-871 257-867l36 36q4.64 5 10.82 5 6.18 0 11.18-5l38-38q4.64-5 10.82-5 6.18 0 11.18 5l37 38q4.64 5 10.82 5 6.18 0 11.18-5l38-38q4.64-5 10.82-5 6.18 0 11.18 5l38 38q4.64 5 10.82 5 6.18 0 11.18-5l38-38q4.64-5 10.82-5 6.18 0 11.18 5l38 38q4.64 5 10.82 5 6.18 0 11.18-5l38-38q4.64-5 10.82-5 6.18 0 11.18 5l38 38q4.64 5 10.82 5 6.18 0 11.18-5l36-36q4-4 8.5-2.13 4.5 1.88 4.5 7.13v677q0 43.75-30.62 74.37Q781.75-80 738-80H222Zm516-60q20 0 32.5-12.5T783-185v-595H304v470h359q12.75 0 21.38 8.62Q693-292.75 693-280v94.85q0 20.15 12.5 32.65T738-140ZM387-682h180q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H387q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5Zm0 134h180q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H387q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5Zm303-74q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9Zm0 129q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9ZM221-140h412v-110H177v65q0 20 12.65 32.5T221-140Zm-44 0v-110 110Z" },
    "groups": { viewBox: "0 -960 960 960", d: "M30-240q-12.75 0-21.37-8.63Q0-257.25 0-270v-23q0-38.57 41.5-62.78Q83-380 150.38-380q12.16 0 23.39.5t22.23 2.15q-8 17.35-12 35.17-4 17.81-4 37.18v65H30Zm240 0q-12.75 0-21.37-8.63Q240-257.25 240-270v-35q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v35q0 12.75-8.62 21.37Q702.75-240 690-240H270Zm510 0v-65q0-19.86-3.5-37.43T765-377.27q11-1.73 22.17-2.23 11.17-.5 22.83-.5 67.5 0 108.75 23.77T960-293v23q0 12.75-8.62 21.37Q942.75-240 930-240H780Zm-480-60h360v-6q0-37-50.5-60.5T480-390q-79 0-129.5 23.5T300-305v5ZM149.57-410q-28.57 0-49.07-20.56Q80-451.13 80-480q0-29 20.56-49.5Q121.13-550 150-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T149.57-410Zm660 0q-28.57 0-49.07-20.56Q740-451.13 740-480q0-29 20.56-49.5Q781.13-550 810-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T809.57-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.35-60Q506-540 523-557.35t17-43Q540-626 522.85-643t-42.5-17q-25.35 0-42.85 17.15t-17.5 42.5q0 25.35 17.35 42.85t43 17.5ZM480-300Zm0-300Z" },
    "pie_chart": { viewBox: "0 -960 960 960", d: "M510-510h309q-11-122-98.5-211.5T510-819v309Zm-60 369v-678q-131 11-220.5 109T140-480q0 132 89.5 230T450-141Zm60 0q123-8 210.5-97.5T819-450H510v309Zm-30-339Zm0 400q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" },
    "payments": { viewBox: "0 -960 960 960", d: "M540-420q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM220-280q-24.75 0-42.37-17.63Q160-315.25 160-340v-400q0-24.75 17.63-42.38Q195.25-800 220-800h640q24.75 0 42.38 17.62Q920-764.75 920-740v400q0 24.75-17.62 42.37Q884.75-280 860-280H220Zm100-60h440q0-42 29-71t71-29v-200q-42 0-71-29t-29-71H320q0 42-29 71t-71 29v200q42 0 71 29t29 71Zm450 180H100q-24.75 0-42.37-17.63Q40-195.25 40-220v-430q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v430h670q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5ZM220-340v-400 400Z" },
  };

  // Same tokens as this.gui <Icon name="receipt_long" /> (Material Symbols rounded).
  function guiIcon(name, size) {
    var spec = GUI_ICONS[name];
    var node = document.createElementNS(NS, "svg");
    node.setAttribute("class", "wl-gui-icon");
    node.setAttribute("viewBox", spec ? spec.viewBox : "0 0 24 24");
    node.setAttribute("width", String(size));
    node.setAttribute("height", String(size));
    node.setAttribute("aria-hidden", "true");
    node.setAttribute("focusable", "false");
    if (spec) {
      var path = document.createElementNS(NS, "path");
      path.setAttribute("d", spec.d);
      node.appendChild(path);
    }
    return node;
  }


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
    { id: "both", label: "both", kind: "triple" },
    { id: "bills", kind: "triple", life: true,
      label: { en: "bills", es: "cuentas", fr: "factures", de: "rechnungen", it: "conti", pt: "contas" },
      icon: "receipt_long",
      hint: { en: "rent and power this month", es: "renta y luz del mes", fr: "loyer et élec du mois", de: "miete und strom im monat", it: "affitto e luce del mese", pt: "aluguel e luz do mês" } },
    { id: "team", kind: "triple", life: true,
      label: { en: "team", es: "equipo", fr: "équipe", de: "team", it: "squadra", pt: "equipe" },
      icon: "groups",
      hint: { en: "people in the studio", es: "quiénes están en el estudio", fr: "les gens du studio", de: "wer im studio ist", it: "chi è nello studio", pt: "quem está no estúdio" } },
    { id: "share", kind: "triple", life: true,
      label: { en: "share", es: "parte", fr: "part", de: "anteil", it: "quota", pt: "parte" },
      icon: "pie_chart",
      hint: { en: "split the check", es: "partir la cuenta", fr: "diviser la note", de: "die rechnung teilen", it: "dividere il conto", pt: "dividir a conta" } },
    { id: "pay", kind: "triple", life: true,
      label: { en: "pay", es: "pago", fr: "paie", de: "lohn", it: "paga", pt: "pagamento" },
      icon: "payments",
      hint: { en: "hours times the rate", es: "horas por la tarifa", fr: "heures fois le tarif", de: "stunden mal den tarif", it: "ore per la tariffa", pt: "horas vezes a tarifa" } }
  ];

  function frameText(map, lang, fallback) {
    if (!map) return fallback || "";
    if (typeof map === "string") return map;
    return map[lang] || map.en || fallback || "";
  }

  function frameLabel(frame, lang) {
    return frameText(frame.label, lang, frame.id);
  }

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
    },
    bills: {
      en: { text: "set [rent|a] to [1200|a] and [power|b] to [85|b], and let [month|t] be [rent|a] plus [power|b]", sets: [{ path: "rent", value: 1200 }, { path: "power", value: 85 }], define: { name: "month", expr: "rent + power", result: 1285 } },
      es: { text: "pon [renta|a] en [1200|a] y [luz|b] en [85|b], y que [mes|t] sea [renta|a] más [luz|b]", sets: [{ path: "renta", value: 1200 }, { path: "luz", value: 85 }], define: { name: "mes", expr: "renta + luz", result: 1285 } },
      fr: { text: "mets [loyer|a] à [1200|a] et [élec|b] à [85|b], et que [mois|t] soit [loyer|a] plus [élec|b]", sets: [{ path: "loyer", value: 1200 }, { path: "elec", value: 85 }], define: { name: "mois", expr: "loyer + elec", result: 1285 } },
      de: { text: "setze [miete|a] auf [1200|a] und [strom|b] auf [85|b], und lass [monat|t] [miete|a] plus [strom|b] sein", sets: [{ path: "miete", value: 1200 }, { path: "strom", value: 85 }], define: { name: "monat", expr: "miete + strom", result: 1285 } },
      it: { text: "metti [affitto|a] a [1200|a] e [luce|b] a [85|b], e che [mese|t] sia [affitto|a] più [luce|b]", sets: [{ path: "affitto", value: 1200 }, { path: "luce", value: 85 }], define: { name: "mese", expr: "affitto + luce", result: 1285 } },
      pt: { text: "põe [aluguel|a] em [1200|a] e [luz|b] em [85|b], e que [mês|t] seja [aluguel|a] mais [luz|b]", sets: [{ path: "aluguel", value: 1200 }, { path: "luz", value: 85 }], define: { name: "mes", expr: "aluguel + luz", result: 1285 } }
    },
    team: {
      en: { text: "set [design|a] to [4|a] and [eng|b] to [11|b], and let [studio|t] be [design|a] plus [eng|b]", sets: [{ path: "design", value: 4 }, { path: "eng", value: 11 }], define: { name: "studio", expr: "design + eng", result: 15 } },
      es: { text: "pon [diseño|a] en [4|a] y [ingeniería|b] en [11|b], y que [estudio|t] sea [diseño|a] más [ingeniería|b]", sets: [{ path: "diseno", value: 4 }, { path: "ingenieria", value: 11 }], define: { name: "estudio", expr: "diseno + ingenieria", result: 15 } },
      fr: { text: "mets [design|a] à [4|a] et [dev|b] à [11|b], et que [studio|t] soit [design|a] plus [dev|b]", sets: [{ path: "design", value: 4 }, { path: "dev", value: 11 }], define: { name: "studio", expr: "design + dev", result: 15 } },
      de: { text: "setze [design|a] auf [4|a] und [technik|b] auf [11|b], und lass [studio|t] [design|a] plus [technik|b] sein", sets: [{ path: "design", value: 4 }, { path: "technik", value: 11 }], define: { name: "studio", expr: "design + technik", result: 15 } },
      it: { text: "metti [design|a] a [4|a] e [sviluppo|b] a [11|b], e che [studio|t] sia [design|a] più [sviluppo|b]", sets: [{ path: "design", value: 4 }, { path: "sviluppo", value: 11 }], define: { name: "studio", expr: "design + sviluppo", result: 15 } },
      pt: { text: "põe [design|a] em [4|a] e [dev|b] em [11|b], e que [estúdio|t] seja [design|a] mais [dev|b]", sets: [{ path: "design", value: 4 }, { path: "dev", value: 11 }], define: { name: "estudio", expr: "design + dev", result: 15 } }
    },
    share: {
      en: { text: "set [bill|a] to [86|a] and [people|b] to [4|b], and let [share|t] be [bill|a] divided by [people|b]", sets: [{ path: "bill", value: 86 }, { path: "people", value: 4 }], define: { name: "share", expr: "bill / people", result: 21.5 } },
      es: { text: "pon [cuenta|a] en [86|a] y [personas|b] en [4|b], y que [parte|t] sea [cuenta|a] entre [personas|b]", sets: [{ path: "cuenta", value: 86 }, { path: "personas", value: 4 }], define: { name: "parte", expr: "cuenta / personas", result: 21.5 } },
      fr: { text: "mets [note|a] à [86|a] et [gens|b] à [4|b], et que [part|t] soit [note|a] divisé par [gens|b]", sets: [{ path: "note", value: 86 }, { path: "gens", value: 4 }], define: { name: "part", expr: "note / gens", result: 21.5 } },
      de: { text: "setze [rechnung|a] auf [86|a] und [leute|b] auf [4|b], und lass [anteil|t] [rechnung|a] geteilt durch [leute|b] sein", sets: [{ path: "rechnung", value: 86 }, { path: "leute", value: 4 }], define: { name: "anteil", expr: "rechnung / leute", result: 21.5 } },
      it: { text: "metti [conto|a] a [86|a] e [persone|b] a [4|b], e che [quota|t] sia [conto|a] diviso [persone|b]", sets: [{ path: "conto", value: 86 }, { path: "persone", value: 4 }], define: { name: "quota", expr: "conto / persone", result: 21.5 } },
      pt: { text: "põe [conta|a] em [86|a] e [pessoas|b] em [4|b], e que [parte|t] seja [conta|a] dividido por [pessoas|b]", sets: [{ path: "conta", value: 86 }, { path: "pessoas", value: 4 }], define: { name: "parte", expr: "conta / pessoas", result: 21.5 } }
    },
    pay: {
      en: { text: "set [hours|a] to [8|a] and [rate|b] to [25|b], and let [pay|t] be [hours|a] times [rate|b]", sets: [{ path: "hours", value: 8 }, { path: "rate", value: 25 }], define: { name: "pay", expr: "hours * rate", result: 200 } },
      es: { text: "pon [horas|a] en [8|a] y [tarifa|b] en [25|b], y que [pago|t] sea [horas|a] por [tarifa|b]", sets: [{ path: "horas", value: 8 }, { path: "tarifa", value: 25 }], define: { name: "pago", expr: "horas * tarifa", result: 200 } },
      fr: { text: "mets [heures|a] à [8|a] et [tarif|b] à [25|b], et que [paie|t] soit [heures|a] fois [tarif|b]", sets: [{ path: "heures", value: 8 }, { path: "tarif", value: 25 }], define: { name: "paie", expr: "heures * tarif", result: 200 } },
      de: { text: "setze [stunden|a] auf [8|a] und [tarif|b] auf [25|b], und lass [lohn|t] [stunden|a] mal [tarif|b] sein", sets: [{ path: "stunden", value: 8 }, { path: "tarif", value: 25 }], define: { name: "lohn", expr: "stunden * tarif", result: 200 } },
      it: { text: "metti [ore|a] a [8|a] e [tariffa|b] a [25|b], e che [paga|t] sia [ore|a] per [tariffa|b]", sets: [{ path: "ore", value: 8 }, { path: "tariffa", value: 25 }], define: { name: "paga", expr: "ore * tariffa", result: 200 } },
      pt: { text: "põe [horas|a] em [8|a] e [tarifa|b] em [25|b], e que [pagamento|t] seja [horas|a] vezes [tarifa|b]", sets: [{ path: "horas", value: 8 }, { path: "tarifa", value: 25 }], define: { name: "pagamento", expr: "horas * tarifa", result: 200 } }
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
    var reads = sets.map(function (sv) {
      return { text: 'me("' + sv.path + '");', path: sv.path, value: String(sv.value) };
    });
    reads.push({ text: 'me("' + t + '");', path: t, value: String(def.result), der: true });
    if (frame.icon) {
      lines.push({ text: "me." + t + ".icon(" + JSON.stringify(frame.icon) + ");", path: t + ".icon" });
      reads.push({ text: 'me("' + t + '.icon");', path: t + ".icon", icon: frame.icon });
    }

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
      if (frame.icon) {
        nodes[3].r = 50;
        nodes[3].vy = 338;
        nodes[3].icon = frame.icon;
        nodes.push({ path: t + ".icon", x: 248, y: 292, r: 13, iconGlyph: frame.icon, ghost: true });
      }
    }
    return { frame: frame, lang: langMeta, q: t, segs: segs, lines: lines, reads: reads, nodes: nodes, edges: edges, deps: depsE };
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
    ".whatever-live .wl-script-wrap{border:1px solid var(--border,#d0d7de);border-radius:10px;background:var(--subtle,#f6f8fa);overflow:hidden}",
    ".whatever-live .wl-script{margin:0;padding:12px 8px 8px;border:none;border-radius:0;background:transparent;overflow:auto;font:13px/1.7 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--fg,#24292f)}",
    ".whatever-live .wl-reads{margin:0;padding:8px 8px 10px;border-top:1px solid var(--border,#d0d7de)}",
    ".whatever-live .wl-read{display:flex;align-items:baseline;gap:12px;padding:3px 10px;border-radius:6px;cursor:pointer;border-left:3px solid transparent}",
    ".whatever-live .wl-read:hover{background:color-mix(in srgb,var(--accent,#0969da) 10%,transparent)}",
    ".whatever-live .wl-read.on{background:color-mix(in srgb,var(--accent,#0969da) 14%,transparent);border-left-color:var(--accent,#0969da)}",
    ".whatever-live .wl-read-call{flex:1;min-width:0;font:13px/1.7 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}",
    ".whatever-live .wl-read-arrow{font:13px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--muted,#656d76)}",
    ".whatever-live .wl-read-val{font:italic 20px/1 Georgia,'DejaVu Serif',serif;color:var(--fg,#24292f);min-width:2ch;text-align:right}",
    ".whatever-live .wl-read.der .wl-read-val,.whatever-live .wl-read.der .wl-read-arrow{color:var(--wl-sun,#c69026)}",
    ".whatever-live .wl-read.der.on{border-left-color:var(--wl-sun,#c69026)}",
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
    "@media (prefers-reduced-motion:reduce){.whatever-live .dd{animation:none}}",
    ".whatever-live .wl-frames-more{margin:10px 0 0;display:grid;grid-template-columns:1fr 1fr;gap:6px}",
    ".whatever-live .wl-pill.desc{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;column-gap:8px;align-items:center;border-radius:10px;padding:8px 12px;letter-spacing:0;width:100%;text-align:left}",
    ".whatever-live .wl-pill-icon{grid-row:1/span 2;width:22px;height:22px;fill:currentColor}",
    ".whatever-live .wl-pill-name{grid-column:2;font:600 11px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.06em}",
    ".whatever-live .wl-pill-hint{grid-column:2;font:400 12px/1.35 system-ui,-apple-system,sans-serif;color:var(--muted,#656d76)}",
    ".whatever-live .wl-gui-icon{display:block;fill:currentColor}",
    ".whatever-live .n .wl-gui-icon{fill:var(--wl-sun,#c69026)}",
    ".whatever-live .n.ghost circle{fill:transparent;stroke:none}",
    ".whatever-live .wl-read-icon{display:flex;align-items:center;min-width:1.4em;color:var(--wl-sun,#c69026)}",
    ".whatever-live .wl-read-icon .wl-gui-icon{width:22px;height:22px;fill:currentColor}"
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
    var framesMore = el("div", { class: "wl-frames wl-frames-more", role: "tablist", "aria-label": "everyday examples" });
    function paintFramePill(b, F, lang, on) {
      b.className = "wl-pill" + (F.life ? " desc" : "") + (on ? " on" : "");
      b.setAttribute("aria-selected", on ? "true" : "false");
      var name = frameLabel(F, lang);
      if (!F.life) {
        b.textContent = name;
        return;
      }
      b.textContent = "";
      if (F.icon) {
        var ic = guiIcon(F.icon, 22);
        ic.setAttribute("class", "wl-gui-icon wl-pill-icon");
        b.appendChild(ic);
      }
      el("span", { class: "wl-pill-name", text: name }, b);
      el("span", { class: "wl-pill-hint", text: frameText(F.hint, lang) }, b);
    }
    var frameEls = FRAMES.map(function (F, i) {
      var b = el("button", {
        class: "wl-pill" + (F.life ? " desc" : "") + (i === 0 ? " on" : ""),
        type: "button",
        role: "tab",
        "data-id": F.id,
        "aria-selected": i === 0 ? "true" : "false"
      }, F.life ? framesMore : frames);
      paintFramePill(b, F, "en", i === 0);
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
        if (n.ghost) cls += " ghost";
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
        paintFramePill(b, FRAMES[i], G.lang.lang, i === fi);
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
      var wrap = el("div", { class: "wl-script-wrap" }, col);
      var pane = el("pre", { class: "wl-script", "aria-label": "me.whatever(what) script" }, wrap);
      var svgRoot = svg("svg", {
        viewBox: "20 20 460 360",
        role: "img",
        "aria-label": "Path tree: " + frameLabel(G.frame, G.lang.lang) + " in " + G.lang.name
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
      var reads = el("div", { class: "wl-reads", "aria-label": "get" }, wrap);
      (G.reads || []).forEach(function (rd) {
        var row = el("div", {
          class: "wl-read" + (rd.der ? " der" : ""),
          tabindex: "0",
          role: "button",
          "data-path": rd.path,
          "aria-label": rd.text + " " + rd.value
        }, reads);
        var call = el("span", { class: "wl-read-call" }, row);
        paint(rd.text, call);
        el("span", { class: "wl-read-arrow", text: "→" }, row);
        if (rd.icon) {
          var ival = el("span", { class: "wl-read-val wl-read-icon" }, row);
          ival.appendChild(guiIcon(rd.icon, 22));
        } else {
          el("span", { class: "wl-read-val", text: rd.value }, row);
        }
        lineEls.push(row);
        bind(row, rd.path);
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
        else if (n.iconGlyph) {
          var glyph = guiIcon(n.iconGlyph, 22);
          glyph.setAttribute("x", String(n.x - 11));
          glyph.setAttribute("y", String(n.y - 11));
          g.appendChild(glyph);
        } else {
          svg("text", { class: "lb", x: n.lx != null ? n.lx : n.x, y: n.ly, text: n.label }, g);
          if (n.value) svg("text", { class: "v", x: n.x, y: n.vy, text: n.value }, g);
        }
        nodeEls[n.path] = g;
        bind(g, n.path);
      });
      apply(pinned);
      col.appendChild(framesMore);
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
