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
  const defaultModeKey = config.default || "studios";
  const hashAliases = {
    "#s": "studios",
    "#studios": "studios",
    "#f": "festivals",
    "#festivals": "festivals",
    "#c": "collaborators",
    "#collaborators": "collaborators",
  };

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

  function initProjectGalleries() {
    document.querySelectorAll(".project-gallery__track").forEach((track) => {
      let isMouseDragging = false;
      let startX = 0;
      let startScrollLeft = 0;
      let moved = false;
      let suppressClick = false;
      let loopTimer = null;
      let hasInteracted = false;

      function resetToFirstSlide() {
        track.scrollLeft = 0;
      }

      function wrapTrackIfNeeded() {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll <= 0) return;

        if (track.scrollLeft >= maxScroll - 2) {
          track.scrollLeft = 0;
        } else if (track.scrollLeft <= 2) {
          track.scrollLeft = maxScroll;
        }
      }

      track.querySelectorAll("img").forEach((image) => {
        image.setAttribute("draggable", "false");
      });

      track.querySelectorAll(".project-gallery__lightbox-link").forEach((link) => {
        link.addEventListener("dragstart", (event) => {
          event.preventDefault();
        });

        link.addEventListener(
          "click",
          (event) => {
            if (suppressClick) {
              event.preventDefault();
              event.stopPropagation();
            }
          },
          true,
        );

        link.addEventListener("auxclick", (event) => {
          event.preventDefault();
        });

        link.addEventListener("mousedown", (event) => {
          if (event.button === 1) {
            event.preventDefault();
          }
        });
      });

      track.addEventListener("mousedown", (event) => {
        if (event.button !== 0) return;
        const link = event.target.closest(".project-gallery__lightbox-link");
        hasInteracted = true;
        isMouseDragging = true;
        startX = event.clientX;
        startScrollLeft = track.scrollLeft;
        moved = false;
        suppressClick = false;
        track.classList.add("is-dragging");

        if (link) {
          event.preventDefault();
        }
      });

      document.addEventListener("mousemove", (event) => {
        if (!isMouseDragging) return;
        const deltaX = event.clientX - startX;
        if (Math.abs(deltaX) > 6) {
          moved = true;
          suppressClick = true;
          track.scrollLeft = startScrollLeft - deltaX;
        }
      });

      document.addEventListener("mouseup", () => {
        if (!isMouseDragging) return;
        isMouseDragging = false;
        track.classList.remove("is-dragging");

        if (moved) {
          window.setTimeout(() => {
            suppressClick = false;
          }, 0);
        }
      });

      track.addEventListener(
        "touchstart",
        () => {
          hasInteracted = true;
        },
        { passive: true },
      );

      track.addEventListener("scroll", () => {
        window.clearTimeout(loopTimer);
        loopTimer = window.setTimeout(() => {
          if (hasInteracted && !isMouseDragging && track.children.length > 1) {
            wrapTrackIfNeeded();
          }
        }, 140);
      });

      window.requestAnimationFrame(() => {
        resetToFirstSlide();
      });
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

    const primaryProjectNode = projectNodes.get(mode.featured_first);
    if (primaryProjectNode) {
      const firstChip = primaryProjectNode.querySelector("[data-project-chip]");
      if (firstChip) {
        firstChip.click();
      }
    }
  }

  function applyModeFromHash() {
    const modeKey = hashAliases[window.location.hash.toLowerCase()];
    if (modeKey) {
      applyMode(modeKey);
      return true;
    }
    return false;
  }

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modeKey = button.getAttribute("data-mode-button");
      applyMode(modeKey);
      const shortHash = `#${modeKey.charAt(0)}`;
      if (window.location.hash !== shortHash) {
        history.replaceState(null, "", shortHash);
      }
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

        if (active) {
          const track = panel.querySelector(".project-gallery__track");
          if (track) {
            window.requestAnimationFrame(() => {
              track.scrollLeft = 0;
            });
          }
        }
      });
    });
  });

  initProjectGalleries();

  if (!applyModeFromHash()) {
    applyMode(defaultModeKey);
  }

  window.addEventListener("hashchange", () => {
    if (!applyModeFromHash()) {
      applyMode(defaultModeKey);
    }
  });
})();
