(() => {
  const configNode = document.getElementById("networking-audience-config");
  if (!configNode) return;

  let config;
  try {
    config = JSON.parse(configNode.textContent);
  } catch (_) {
    return;
  }

  const modeButtons = Array.from(document.querySelectorAll("[data-mode-button]"));
  const supportNode = document.querySelector("[data-mode-support]");
  const directionGrid = document.querySelector("[data-direction-grid]");
  const projectContainer = document.querySelector("[data-featured-projects]");

  const directionNodes = new Map(
    Array.from(document.querySelectorAll("[data-direction-key]")).map((node) => [
      node.getAttribute("data-direction-key"),
      node,
    ]),
  );
  const projectNodes = new Map(
    Array.from(document.querySelectorAll("[data-project-key]")).map((node) => [
      node.getAttribute("data-project-key"),
      node,
    ]),
  );

  function setPrimaryProject(projectKey) {
    projectNodes.forEach((node, key) => {
      const isPrimary = key === projectKey;
      node.classList.toggle("is-primary", isPrimary);
    });
  }

  function setPrimaryDirection(directionKey) {
    directionNodes.forEach((node, key) => {
      const isPrimary = key === directionKey;
      node.classList.toggle("is-active", isPrimary);
      node.setAttribute("aria-current", isPrimary ? "true" : "false");
    });
  }

  function reorderNodes(container, order, nodeMap) {
    if (!container || !order) return;
    order.forEach((key) => {
      const node = nodeMap.get(key);
      if (node) container.appendChild(node);
    });
  }

  function applyMode(modeKey) {
    const mode = (config.items || []).find((item) => item.key === modeKey);
    if (!mode) return;

    modeButtons.forEach((button) => {
      const active = button.getAttribute("data-mode-button") === modeKey;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (supportNode && mode.support) {
      supportNode.textContent = mode.support;
    }

    reorderNodes(directionGrid, mode.direction_order, directionNodes);
    reorderNodes(projectContainer, mode.direction_order, projectNodes);
    setPrimaryDirection(mode.featured_first);
    setPrimaryProject(mode.featured_first);
  }

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyMode(button.getAttribute("data-mode-button"));
    });
  });

  document.querySelectorAll("[data-project-chip]").forEach((button) => {
    button.addEventListener("click", () => {
      const projectKey = button.getAttribute("data-project-chip");
      const caseKey = button.getAttribute("data-project-case");
      const root = document.querySelector(`[data-project-key="${projectKey}"]`);
      if (!root) return;

      root.querySelectorAll("[data-project-chip]").forEach((chip) => {
        const active = chip === button;
        chip.classList.toggle("is-active", active);
        chip.setAttribute("aria-pressed", active ? "true" : "false");
      });

      root.querySelectorAll("[data-project-panel]").forEach((panel) => {
        const active = panel.getAttribute("data-project-panel") === caseKey;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    });
  });

  applyMode(config.default || "studios");
})();
