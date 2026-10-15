// Selector de idioma ES/EN. Traduce nodos de texto y atributos con el diccionario D (clave = texto en español).
// Para agregar textos: sumar "español":"english" a D. Lo que no esté en D queda en español.
(() => {
  const D = {
    "Mateo Scovenna · Portfolio": "Mateo Scovenna · Portfolio",
    "Portfolio de Mateo Scovenna, estudiante de Licenciatura en Informática y Desarrollador Full-Stack Junior.":
      "Portfolio of Mateo Scovenna, Computer Science student and Junior Full-Stack Developer.",
    "Saltar al contenido": "Skip to content",
    "Abrir menú": "Open menu",
    "Cambiar tema": "Toggle theme",
    Proyectos: "Projects",
    Habilidades: "Skills",
    "Sobre mí": "About me",
    Contacto: "Contact",
    "Disponible para nuevos proyectos ·": "Available for new projects ·",
    "Convierto planillas en tableros que ayudan a decidir.":
      "I turn spreadsheets into dashboards that help people decide.",
    "Estudiante de Licenciatura en Informática &": "Computer Science student &",
    "Desarrollador Full-Stack": "Full-Stack Developer",
    "Especialista en Datos": "Data Specialist",
    "Creador de Dashboards": "Dashboard Builder",
    "Ver demos interactivas": "View interactive demos",
    "demos interactivas": "interactive demos",
    "vistas de análisis": "analysis views",
    "instalaciones requeridas": "installs required",
    "Proyecto destacado": "Featured project",
    "Panel de control de calidad": "Quality control dashboard",
    "Sistema web que procesa libros de Excel de un laboratorio de planta láctea y los transforma en tableros con límites estadísticos, tendencias e historial detallado.":
      "Web system that processes Excel workbooks from a dairy plant laboratory and turns them into dashboards with statistical limits, trends and detailed history.",
    "Lanzamiento ejecutable mediante mini servidor en PowerShell sin instalaciones.":
      "Executable launch through a PowerShell mini server, no installs needed.",
    "6 pestañas de control: Recibo de leche, materia prima, procesos, producto final, etc.":
      "6 control tabs: milk intake, raw material, processes, final product, etc.",
    "Generación e integración de informes exportables a PowerPoint y PDF.":
      "Generation and integration of reports exportable to PowerPoint and PDF.",
    "Más proyectos": "More projects",
    "Panel de producción y OEE": "Production and OEE dashboard",
    "Calcula disponibilidad, rendimiento y calidad por línea y turno, identificando paradas críticas.":
      "Calculates availability, performance and quality per line and shift, identifying critical stoppages.",
    "Abrir demo →": "Open demo →",
    "Descargar (.zip)": "Download (.zip)",
    "No conformidades y CAPA": "Non-conformities and CAPA",
    "Registro de desvíos con responsable y plazo. Marca los vencidos y muestra patrones repetitivos.":
      "Deviation log with owner and deadline. Flags overdue items and shows recurring patterns.",
    "Panel de ventas y stock": "Sales and stock dashboard",
    "Monitoreo de ventas, clasificación de productos ABC y alertas automáticas de reabastecimiento.":
      "Sales monitoring, ABC product classification and automatic restocking alerts.",
    "Análisis ABC": "ABC analysis",
    "Desarrollo Web Full-Stack": "Full-Stack Web Development",
    "Especializado en crear interfaces ágiles e intuitivas que interactúan eficientemente con datos.":
      "Specialized in building fast, intuitive interfaces that work efficiently with data.",
    "Bases de Datos y Backend": "Databases and Backend",
    "Diseño de modelos relacionales y automatización de procesos backend.":
      "Relational model design and backend process automation.",
    "Estudiante de Licenciatura en Informática enfocado en crear soluciones de software eficientes que resuelvan problemas de negocio reales.":
      "Computer Science student focused on building efficient software solutions that solve real business problems.",
    "Mi enfoque se centra en transformar procesos manuales o datos desorganizados en paneles interactivos que faciliten la toma de decisiones.":
      "My focus is on turning manual processes or messy data into interactive dashboards that make decision-making easier.",
    Mail: "Email",
    "Video de demostración del panel de control de calidad":
      "Demo video of the quality control dashboard",
    Argentina: "Argentina",
    // Demos: comunes
    "← Volver al portfolio": "← Back to portfolio",
    Tema: "Theme",
    "Desarrollado por Mateo Scovenna": "Developed by Mateo Scovenna",
    Registro: "Log",
    Indicadores: "Indicators",
    Auditorías: "Audits",
    Proveedores: "Suppliers",
    Fecha: "Date",
    Área: "Area",
    Tipo: "Type",
    Estado: "Status",
    Detalle: "Detail",
    // No conformidades
    "No conformidades y acciones correctivas":
      "Non-conformities and corrective actions",
    "Registro de desvíos con responsable, plazo y cierre documentado":
      "Deviation log with owner, deadline and documented closure",
    "Todos los estados": "All statuses",
    Abierta: "Open",
    "En acción": "In progress",
    Cerrada: "Closed",
    "Todas las áreas": "All areas",
    "Exportar CSV": "Export CSV",
    "Importar CSV": "Import CSV",
    "Nuevo desvío": "New deviation",
    Registrar: "Register",
    "Plazo 7 días": "7-day deadline",
    "Plazo 15 días": "15-day deadline",
    "Plazo 30 días": "30-day deadline",
    "Causas que se repiten": "Recurring causes",
    "Desvíos por causa: abiertos y cerrados.":
      "Deviations by cause: open and closed.",
    "Desvíos por causa": "Deviations by cause",
    "Desvíos por área": "Deviations by area",
    "Dónde se concentran los problemas.":
      "Where the problems are concentrated.",
    "Descripción y acción": "Description and action",
    Causa: "Cause",
    Responsable: "Owner",
    Vence: "Due",
    Abiertos: "Open",
    "Desvíos por mes": "Deviations per month",
    "Antigüedad de los abiertos": "Age of open items",
    "Días desde que se registró cada desvío abierto.":
      "Days since each open deviation was logged.",
    "Tiempo medio de cierre por área": "Average closing time by area",
    "Tiempo de cierre por área": "Closing time by area",
    "Días entre el registro y el cierre.": "Days between logging and closure.",
    "Puntaje por auditoría": "Score per audit",
    "La línea punteada marca el objetivo de 85 puntos.":
      "The dotted line marks the 85-point target.",
    "Auditorías realizadas": "Completed audits",
    Auditor: "Auditor",
    Críticos: "Critical",
    Menores: "Minor",
    Puntaje: "Score",
    "Puntaje de proveedores": "Supplier score",
    Proveedor: "Supplier",
    "Puntual.": "On time",
    Rechazo: "Rejection",
    Desvíos: "Deviations",
    "Buscar en descripción": "Search description",
    Buscar: "Search",
    "Descripción del desvío": "Deviation description",
    Vencidos: "Overdue",
    "Desvíos abiertos": "Open deviations",
    // Producción
    "Disponibilidad × rendimiento × calidad, por línea y turno":
      "Availability × performance × quality, by line and shift",
    Desde: "From",
    Hasta: "To",
    "Objetivo OEE %": "OEE target %",
    "Cargar CSV": "Load CSV",
    "Exportar resumen": "Export summary",
    "Panel OEE": "OEE panel",
    "Plan vs real": "Plan vs actual",
    Rechazos: "Rejects",
    Mantenimiento: "Maintenance",
    "OEE por día": "OEE per day",
    "Las barras rojas quedaron por debajo del objetivo.":
      "Red bars fell below the target.",
    "Pareto de paradas": "Stoppage Pareto",
    "Minutos perdidos por causa y porcentaje acumulado.":
      "Minutes lost by cause and cumulative percentage.",
    "Por turno": "By shift",
    "Dónde se pierde más.": "Where the most is lost.",
    Turno: "Shift",
    Producido: "Produced",
    "Disp.": "Avail.",
    "Rend.": "Perf.",
    "Cal.": "Qual.",
    "Por línea": "By line",
    "Comparación entre líneas en el período.":
      "Comparison between lines over the period.",
    Línea: "Line",
    "Cumplimiento diario del plan": "Daily plan attainment",
    "Cumplimiento por línea": "Attainment by line",
    Plan: "Plan",
    Real: "Actual",
    Diferencia: "Difference",
    Cumplimiento: "Attainment",
    "Tasa de rechazo diaria": "Daily reject rate",
    "Mapa línea por turno": "Line-by-shift map",
    "Cuanto más oscuro, más rechazo.": "The darker, the more rejects.",
    "Horas de paro correctivo por equipo":
      "Corrective downtime hours by equipment",
    "Horas de paro por equipo": "Downtime hours by equipment",
    "Los equipos que más producción frenan.":
      "The equipment that halts production the most.",
    "Próximos preventivos": "Upcoming preventive tasks",
    Equipo: "Equipment",
    "Últimas órdenes de mantenimiento": "Latest maintenance orders",
    Duración: "Duration",
    Costo: "Cost",
    "Cargar produccion.csv y paradas.csv":
      "Load produccion.csv and paradas.csv",
    // Ventas
    "Qué se vende, qué conviene reponer y cuánto pedir":
      "What sells, what to restock and how much to order",
    "Últimos 7 días": "Last 7 days",
    "Últimos 15 días": "Last 15 days",
    "Últimos 30 días": "Last 30 days",
    "Últimos 60 días": "Last 60 days",
    Período: "Period",
    "Cobertura objetivo (días)": "Target coverage (days)",
    "Panel de ventas": "Sales panel",
    Rentabilidad: "Profitability",
    Clientes: "Customers",
    Compras: "Purchasing",
    "Ventas por semana": "Sales per week",
    "Últimas 12 semanas de la categoría elegida.":
      "Last 12 weeks of the selected category.",
    "Clasificación ABC": "ABC classification",
    "Stock y reposición": "Stock and restocking",
    "Exportar pedido sugerido": "Export suggested order",
    Producto: "Product",
    Categoría: "Category",
    Stock: "Stock",
    "Venta diaria": "Daily sales",
    Cobertura: "Coverage",
    "Plazo entrega": "Lead time",
    "Pedido sugerido": "Suggested order",
    "Margen por categoría": "Margin by category",
    "Margen bruto sobre las ventas del período.":
      "Gross margin on the period's sales.",
    "Productos que más margen dejan": "Highest-margin products",
    "Productos con más margen": "Highest-margin products",
    "Rentabilidad por producto": "Profitability by product",
    Ventas: "Sales",
    Margen: "Margin",
    "Margen %": "Margin %",
    "Mayores clientes": "Top customers",
    "Facturación del período.": "Billing for the period.",
    "Facturación por zona": "Billing by zone",
    "Dónde está concentrada la venta.": "Where sales are concentrated.",
    "Clientes para reactivar": "Customers to reactivate",
    "No compran hace más de 30 días. Conviene contactarlos.":
      "No purchases in over 30 days. Worth contacting them.",
    Cliente: "Customer",
    Zona: "Zone",
    "Última compra": "Last purchase",
    "Sin comprar": "Days idle",
    "Facturado en total": "Total billed",
    "Ranking de clientes": "Customer ranking",
    Facturado: "Billed",
    "Entregas a tiempo por proveedor": "On-time deliveries by supplier",
    "Pedidos recibidos en la fecha prometida o antes.":
      "Orders received on or before the promised date.",
    "Pedidos pendientes": "Pending orders",
    "Cant.": "Qty.",
    Prometido: "Promised",
    "Cargar ventas.csv y stock.csv": "Load ventas.csv and stock.csv",
  };
  const K = "ms-lang",
    H = document.documentElement,
    AT = ["aria-label", "placeholder", "title", "alt"];
  let lang;
  try {
    lang = localStorage.getItem(K);
  } catch (e) {}
  if (lang !== "es" && lang !== "en")
    lang = /^es/i.test(navigator.language || "es") ? "es" : "en";
  const nodes = new WeakMap(),
    attrs = new WeakMap();
  const look = (s) => D[s.replace(/\s+/g, " ").trim()];
  window.msT = (s) => (lang === "en" ? look(s) || s : s); // para textos que el JS de la página arma a mano (ej. efecto de tipeo)
  function swap(rec, cur, set) {
    // rec={es,en}; devuelve true si cambió
    let src = rec && cur === rec.en ? rec.es : cur;
    if (lang === "es") {
      if (rec && cur === rec.en) set(rec.es);
      return rec;
    }
    const t = look(src);
    if (!t) return rec;
    const e = src.match(/^\s*/)[0] + t + src.match(/\s*$/)[0];
    set(e);
    return { es: src, en: e };
  }
  function apply(root) {
    if (root.nodeType === 3) {
      const p = root.parentNode && root.parentNode.nodeName;
      if (p !== "SCRIPT" && p !== "STYLE")
        nodes.set(
          root,
          swap(nodes.get(root), root.data, (v) => (root.data = v)),
        );
      return;
    }
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    const w = document.createTreeWalker(root, 4, {
      acceptNode: (n) =>
        /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName) ? 2 : 1,
    });
    let n;
    while ((n = w.nextNode()))
      nodes.set(
        n,
        swap(nodes.get(n), n.data, (v) => (n.data = v)),
      );
    const els =
      root.nodeType === 1
        ? [
            root,
            ...root.querySelectorAll(
              "[aria-label],[placeholder],[title],[alt]",
            ),
          ]
        : root.querySelectorAll("[aria-label],[placeholder],[title],[alt]");
    els.forEach((el) =>
      AT.forEach((a) => {
        if (!el.hasAttribute(a)) return;
        const m = attrs.get(el) || {};
        m[a] = swap(m[a], el.getAttribute(a), (v) => el.setAttribute(a, v));
        attrs.set(el, m);
      }),
    );
  }
  const mo = new MutationObserver((ms) => {
    mo.disconnect();
    ms.forEach((m) =>
      m.type === "characterData"
        ? apply(m.target)
        : m.addedNodes.forEach(apply),
    );
    observe();
  });
  const observe = () =>
    mo.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  function meta() {
    H.lang = lang;
    const d = document.querySelector('meta[name="description"]');
    if (d) {
      if (!d.__es) d.__es = d.content;
      d.content = lang === "en" ? look(d.__es) || d.__es : d.__es;
    }
    if (!document.__t) document.__t = document.title;
    document.title =
      lang === "en" ? look(document.__t) || document.__t : document.__t;
  }
  function btnState(b) {
    const code = lang === "es" ? "gb" : "es";
    const altText = lang === "es" ? "Reino Unido" : "España";
    b.innerHTML = `<img src="https://flagcdn.com/w40/${code}.png" alt="${altText}" class="lang-flag-img">`;
    b.setAttribute(
      "aria-label",
      lang === "es" ? "Switch to English" : "Cambiar a español",
    );
    b.title = b.getAttribute("aria-label");
  }
  function init() {
    const a =
      document.getElementById("theme-toggle") ||
      document.getElementById("tema");
    const b = document.createElement("button");
    b.id = "lang-toggle";
    b.type = "button";
    if (a && a.className) b.className = a.className;
    const st = document.createElement("style");
    st.textContent =
      "#lang-toggle{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:inherit;background:transparent;border:1px solid currentColor;border-radius:8px;padding:.35rem .45rem;margin-right:.5rem;opacity:.85;line-height:1}#lang-toggle:hover{opacity:1}.lang-flag-img{width:20px;height:auto;border-radius:2px;display:block;pointer-events:none}" +
      (a
        ? ""
        : "#lang-toggle{position:fixed;top:.75rem;right:.75rem;z-index:99}");
    document.head.appendChild(st);
    a ? a.parentNode.insertBefore(b, a) : document.body.appendChild(b);
    btnState(b);
    b.onclick = () => {
      lang = lang === "es" ? "en" : "es";
      try {
        localStorage.setItem(K, lang);
      } catch (e) {}
      mo.disconnect();
      meta();
      apply(document.body);
      btnState(b);
      observe();
      dispatchEvent(new CustomEvent("ms-lang", { detail: lang }));
    };
    meta();
    if (lang === "en") apply(document.body);
    observe();
  }
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();