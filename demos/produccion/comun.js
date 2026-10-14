const $ = id => document.getElementById(id);

const fmt = (n, d = 0) => (isFinite(n) ? n : 0).toLocaleString("es-AR", {
  minimumFractionDigits: d,
  maximumFractionDigits: d
});

const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[c]));

function parseCSV(t) {
  t = t.replace(/^\uFEFF/, "");
  const f = t.split(/\r?\n/)[0] || "";
  const sep = f.split(";").length > f.split(",").length ? ";" : ",";
  const R = [];
  let r = [], c = "", q = false;

  const fin = () => {
    r.push(c);
    c = "";
    if (r.some(x => x.trim() !== "")) R.push(r);
    r = [];
  };

  for (let i = 0; i < t.length; i++) {
    const h = t[i];
    if (q) {
      if (h === '"') {
        if (t[i + 1] === '"') { c += '"'; i++; } 
        else q = false;
      } else c += h;
    } else if (h === '"') q = true;
    else if (h === sep) { r.push(c); c = ""; }
    else if (h === "\n" || h === "\r") {
      if (h === "\r" && t[i + 1] === "\n") i++;
      fin();
    } else c += h;
  }
  if (c !== "" || r.length) fin();

  const H = (R.shift() || []).map(x => 
    x.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "_")
  );

  return R.map(v => {
    const o = {};
    H.forEach((k, i) => o[k] = (v[i] == null ? "" : v[i]).trim());
    return o;
  });
}

const num = v => {
  v = String(v == null ? "" : v).trim();
  if (v.includes(",") && !v.includes(".")) v = v.replace(",", ".");
  const n = parseFloat(v);
  return isNaN(n) ? 0 : n;
};

function fecha(v) {
  v = String(v).trim();
  let m = v.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return new Date(+m[1], m[2] - 1, +m[3]);
  m = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})/);
  if (m) return new Date(m[3].length === 2 ? 2000 + +m[3] : +m[3], m[2] - 1, +m[1]);
  return null;
}

const iso = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
const DIA = 864e5;
const fd = d => new Date(d).toLocaleDateString("es-AR");

async function leer(ruta) {
  const r = await fetch(ruta, { cache: "no-store" });
  if (!r.ok) throw new Error(r.status);
  return parseCSV(await r.text());
}

const leerArchivo = f => new Promise(ok => {
  const r = new FileReader();
  r.onload = () => ok(parseCSV(r.result));
  r.readAsText(f);
});

function aCSV(cols, filas) {
  const q = v => {
    v = String(v == null ? "" : v);
    return /[;"\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  };
  return "\uFEFF" + [cols.join(";")].concat(filas.map(r => r.map(q).join(";"))).join("\r\n");
}

function bajar(nombre, cols, filas) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([aCSV(cols, filas)], { type: "text/csv;charset=utf-8" }));
  a.download = nombre;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  const b = $("tema"), r = document.documentElement;
  if (b) {
    b.onclick = () => {
      const d = r.getAttribute("data-theme") === "dark" || 
        (!r.getAttribute("data-theme") && matchMedia("(prefers-color-scheme:dark)").matches);
      r.setAttribute("data-theme", d ? "light" : "dark");
    };
  }
});

function kp(id, a) {
  $(id).innerHTML = a.map(k => `
    <div class="k ${k[2] || ""}">
      <strong>${k[0]}</strong>
      <span>${k[1]}</span>
    </div>
  `).join("");
}

function tabla(id, cols, rows, vacio) {
  const N = /^[\s$\d.,\%+\/\-]+(\s?(días|día|min|h|u\.|k|M))?$/;
  const iz = c => {
    c = String(c);
    return !N.test(c) && c.indexOf('<span class="tag') !== 0;
  };

  const tb = $(id);
  tb.innerHTML = rows.length 
    ? rows.map(r => "<tr>" + r.map(c => `<td${iz(c) ? ' style="text-align:left"' : ""}>${c}</td>`).join("") + "</tr>").join("")
    : `<tr><td colspan="${cols}" class="vacio">${vacio || "No hay datos."}</td></tr>`;

  const t = tb.closest("table");
  if (t && rows.length) {
    t.querySelectorAll("thead th").forEach((h, i) => {
      h.style.textAlign = iz(rows[0][i]) ? "left" : "right";
    });
  }
}

function tabs(cb) {
  document.querySelectorAll(".tabs button").forEach(b => {
    b.onclick = () => {
      document.querySelectorAll(".tabs button").forEach(x => x.classList.toggle("on", x === b));
      document.querySelectorAll(".tab").forEach(t => t.classList.toggle("on", t.id === "tab-" + b.dataset.t));
      cb && cb(b.dataset.t);
    };
  });
}

/* Gráfico de Barras Horizontales */
function barH(id, items, o = {}) {
  $(id).style.maxWidth = "640px";
  const f = o.f || fmt, L = o.L || 130, W = 400, h = 24, g = 10;
  const mx = Math.max(1e-9, ...items.map(x => x.v));
  const u = (W - L - 92) / mx;
  let s = "";

  items.forEach((r, i) => {
    const y = 8 + i * (h + g);
    const w = Math.max(1, r.v * u);
    const delay = (i * 0.03).toFixed(2);
    s += `<text x="0" y="${y + 16}">${esc(String(r.n).slice(0, 34))}</text>
          <rect class="bar-h" x="${L}" y="${y}" width="${w}" height="${h}" rx="2" fill="${r.c || "var(--acc)"}" style="transform-origin: ${L}px ${y}px; animation-delay: ${delay}s">
            <title>${esc(r.n)}: ${f(r.v)}</title>
          </rect>
          <text x="${L + w + 8}" y="${y + 16}">${f(r.v)}</text>`;
  });

  $(id).setAttribute("viewBox", `0 0 ${W} ${Math.max(60, 8 + items.length * (h + g))}`);
  $(id).innerHTML = items.length ? s : '<text x="10" y="30">Sin datos.</text>';
}

/* Gráfico de Barras Verticales */
function barV(id, items, o = {}) {
  const f = o.f || fmt, W = 640, H = o.H || 250, L = 56, R = 8, T = 14, B = 28;
  const n = Math.max(1, items.length);
  const bw = (W - L - R) / n;
  const mx = Math.max(o.meta || 0, ...items.map(x => x.v), 1e-9) * 1.08;
  const Y = v => T + (1 - v / mx) * (H - T - B);
  const ev = o.every || Math.ceil(n / 12);
  let s = "";

  [0, 0.5, 1].forEach(k => {
    s += `<line x1="${L}" x2="${W - R}" y1="${Y(mx * k)}" y2="${Y(mx * k)}" stroke="var(--line)" stroke-dasharray="3 3"/>
          <text x="${L - 6}" y="${Y(mx * k) + 4}" text-anchor="end">${f(mx * k)}</text>`;
  });

  items.forEach((r, i) => {
    const x = L + i * bw;
    const p = Math.min(4, bw / 4);
    const rectX = x + p;
    const rectY = Y(r.v);
    const rectW = Math.max(1, bw - 2 * p);
    const rectH = Math.max(0, H - B - rectY);
    const delay = (i * 0.03).toFixed(2);

    s += `<rect class="bar-v" x="${rectX}" y="${rectY}" width="${rectW}" height="${rectH}" rx="2" fill="${r.c || "var(--acc)"}" style="transform-origin: ${rectX}px ${H - B}px; animation-delay: ${delay}s">
            <title>${esc(r.n)}: ${f(r.v)}</title>
          </rect>` +
      (i % ev === 0 ? `<text x="${x + bw / 2}" y="${H - 10}" text-anchor="middle">${esc(String(r.n).slice(0, 12))}</text>` : "");
  });

  if (o.meta != null) {
    s += `<line x1="${L}" x2="${W - R}" y1="${Y(o.meta)}" y2="${Y(o.meta)}" stroke="var(--warn)" stroke-width="2" stroke-dasharray="6 4"/>`;
  }

  $(id).setAttribute("viewBox", `0 0 ${W} ${H}`);
  $(id).innerHTML = items.length ? s : '<text x="10" y="30">Sin datos.</text>';
}

/* Gráfico de Líneas */
function linea(id, labs, series, o = {}) {
  const f = o.f || fmt, W = 640, H = o.H || 250, L = 56, R = 10, T = 14, B = 28;
  const n = labs.length;
  const all = series.flatMap(s => s.v);
  const mn = o.min != null ? o.min : Math.min(...all);
  const mx = Math.max(...all, 1e-9) * 1.08;
  const X = i => L + (n > 1 ? i * (W - L - R) / (n - 1) : 0);
  const Y = v => T + (1 - (v - mn) / ((mx - mn) || 1)) * (H - T - B);
  const ev = Math.ceil(n / 10);
  let s = "";

  [0, 0.5, 1].forEach(k => {
    const v = mn + (mx - mn) * k;
    s += `<line x1="${L}" x2="${W - R}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)" stroke-dasharray="3 3"/>
          <text x="${L - 6}" y="${Y(v) + 4}" text-anchor="end">${f(v)}</text>`;
  });

  series.forEach(se => {
    s += `<polyline pathLength="1" fill="none" stroke="${se.c}" stroke-width="2" stroke-linejoin="round" points="${se.v.map((v, i) => X(i) + "," + Y(v)).join(" ")}"/>` +
      (n <= 12 ? se.v.map((v, i) => `<circle cx="${X(i)}" cy="${Y(v)}" r="3" fill="${se.c}"><title>${esc(se.n)} ${esc(labs[i])}: ${f(v)}</title></circle>`).join("") : "");
  });

  labs.forEach((l, i) => {
    if (i % ev === 0) s += `<text x="${X(i)}" y="${H - 10}" text-anchor="middle">${esc(l)}</text>`;
  });

  $(id).setAttribute("viewBox", `0 0 ${W} ${H}`);
  $(id).innerHTML = s;
}