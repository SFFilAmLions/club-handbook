(() => {
  const ZOOM_STEP = 1.25;
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 8;
  let dialog;
  let lastTrigger;

  function numberViewBox(svg) {
    const values = (svg.getAttribute("viewBox") || "").trim().split(/\s+/).map(Number);
    return values.length === 4 && values.every(Number.isFinite)
      ? { x: values[0], y: values[1], width: values[2], height: values[3] }
      : null;
  }

  function createDialog() {
    if (dialog) return dialog;
    dialog = document.createElement("dialog");
    dialog.className = "diagram-zoom-dialog";
    dialog.innerHTML = `
      <div class="diagram-zoom-toolbar">
        <strong id="diagram-zoom-title">Expanded diagram</strong>
        <button type="button" data-diagram-zoom="in" aria-label="Zoom in">+</button>
        <button type="button" data-diagram-zoom="out" aria-label="Zoom out">−</button>
        <button type="button" data-diagram-zoom="reset">Reset</button>
        <button type="button" data-diagram-zoom="close">Close</button>
      </div>
      <div class="diagram-zoom-canvas" aria-describedby="diagram-zoom-title"></div>`;
    dialog.addEventListener("close", () => lastTrigger?.focus());
    document.body.append(dialog);
    return dialog;
  }

  function openDiagram(source, trigger) {
    const modal = createDialog();
    const canvas = modal.querySelector(".diagram-zoom-canvas");
    const diagram = source.cloneNode(true);
    const base = numberViewBox(diagram);
    if (!base) return;

    let zoom = 1;
    let centerX = base.x + base.width / 2;
    let centerY = base.y + base.height / 2;
    let drag;

    canvas.replaceChildren(diagram);
    lastTrigger = trigger;

    function updateViewBox() {
      const width = base.width / zoom;
      const height = base.height / zoom;
      centerX = Math.max(base.x + width / 2, Math.min(base.x + base.width - width / 2, centerX));
      centerY = Math.max(base.y + height / 2, Math.min(base.y + base.height - height / 2, centerY));
      diagram.setAttribute("viewBox", `${centerX - width / 2} ${centerY - height / 2} ${width} ${height}`);
    }

    function setZoom(next) {
      zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, next));
      updateViewBox();
    }

    modal.querySelector("[data-diagram-zoom='in']").onclick = () => setZoom(zoom * ZOOM_STEP);
    modal.querySelector("[data-diagram-zoom='out']").onclick = () => setZoom(zoom / ZOOM_STEP);
    modal.querySelector("[data-diagram-zoom='reset']").onclick = () => {
      zoom = 1;
      centerX = base.x + base.width / 2;
      centerY = base.y + base.height / 2;
      updateViewBox();
    };
    modal.querySelector("[data-diagram-zoom='close']").onclick = () => modal.close();

    canvas.onwheel = (event) => {
      event.preventDefault();
      setZoom(zoom * (event.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP));
    };
    diagram.onpointerdown = (event) => {
      drag = { x: event.clientX, y: event.clientY, centerX, centerY };
      diagram.setPointerCapture(event.pointerId);
    };
    diagram.onpointermove = (event) => {
      if (!drag) return;
      const box = canvas.getBoundingClientRect();
      centerX = drag.centerX - ((event.clientX - drag.x) / box.width) * (base.width / zoom);
      centerY = drag.centerY - ((event.clientY - drag.y) / box.height) * (base.height / zoom);
      updateViewBox();
    };
    diagram.onpointerup = diagram.onpointercancel = () => { drag = undefined; };
    updateViewBox();
    modal.showModal();
  }

  function addControls(root = document) {
    root.querySelectorAll(".mermaid svg").forEach((svg) => {
      const container = svg.closest(".mermaid");
      if (!container || container.dataset.zoomReady) return;
      container.dataset.zoomReady = "true";
      const button = document.createElement("button");
      button.className = "diagram-expand";
      button.type = "button";
      button.textContent = "⤢ Expand diagram";
      button.setAttribute("aria-label", "Expand diagram with zoom controls");
      button.addEventListener("click", () => openDiagram(svg, button));
      container.after(button);
    });
  }

  let queued = false;
  function scheduleControls() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      addControls();
    });
  }

  function start() {
    scheduleControls();
    new MutationObserver(scheduleControls).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
