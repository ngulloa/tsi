<script>
(function () {
  "use strict";

  function currentDepthPrefix() {
    var path = window.location.pathname;
    if (path.indexOf("/temas/") !== -1 || path.indexOf("/repaso/") !== -1) {
      return "../";
    }
    return "";
  }

  function normalizedPath(value) {
    return value.replace(/\/$/, "/index.html");
  }

  function addBottomNav() {
    if (document.querySelector(".tsi-bottom-nav")) {
      return;
    }

    var prefix = currentDepthPrefix();
    var links = [
      { label: "Inicio", href: prefix + "index.html", match: "/index.html" },
      { label: "Temas", href: prefix + "index.html#temas", match: "/temas/" },
      { label: "Preguntas", href: prefix + "repaso/preguntas.html", match: "/repaso/preguntas.html" },
      { label: "Casos", href: prefix + "repaso/casos.html", match: "/repaso/casos.html" }
    ];

    var nav = document.createElement("nav");
    nav.className = "tsi-bottom-nav";
    nav.setAttribute("aria-label", "Navegación rápida");

    var current = normalizedPath(window.location.pathname);
    links.forEach(function (item) {
      var link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;

      if (
        (item.match === "/index.html" && current.endsWith("/index.html") && window.location.hash !== "#temas") ||
        (item.match === "/temas/" && (current.indexOf("/temas/") !== -1 || window.location.hash === "#temas")) ||
        (item.match !== "/temas/" && current.endsWith(item.match))
      ) {
        link.setAttribute("aria-current", "page");
      }

      nav.appendChild(link);
    });

    document.body.appendChild(nav);
  }

  function addReadingProgress() {
    if (document.querySelector(".tsi-reading-progress")) {
      return;
    }

    var progress = document.createElement("div");
    var bar = document.createElement("div");
    progress.className = "tsi-reading-progress";
    progress.setAttribute("aria-hidden", "true");
    bar.className = "tsi-reading-progress__bar";
    progress.appendChild(bar);
    document.body.appendChild(progress);

    var ticking = false;
    function update() {
      var scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = scrollMax > 0 ? window.scrollY / scrollMax : 1;
      ratio = Math.min(Math.max(ratio, 0), 1);
      bar.style.transform = "scaleX(" + ratio + ")";
      ticking = false;
    }

    function requestUpdate() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
  }

  function addBackToTopButton() {
    if (document.querySelector(".tsi-back-to-top")) {
      return;
    }

    var button = document.createElement("button");
    button.className = "tsi-back-to-top";
    button.type = "button";
    button.textContent = "↑";
    button.setAttribute("aria-label", "Volver arriba");
    button.title = "Volver arriba";
    document.body.appendChild(button);

    function updateVisibility() {
      if (window.scrollY > 420) {
        button.classList.add("is-visible");
      } else {
        button.classList.remove("is-visible");
      }
    }

    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
  }

  function storageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function compactText(value) {
    return value.toLowerCase().replace(/\s+/g, " ").trim().slice(0, 90);
  }

  function questionKey(card, index) {
    var summary = card.querySelector("summary");
    var label = card.id || (summary ? compactText(summary.textContent) : "pregunta-" + index);
    return "tsi:pregunta:" + normalizedPath(window.location.pathname) + ":" + label;
  }

  function improveAnswerCards() {
    document.querySelectorAll("details.pregunta, details.qa-card").forEach(function (card, index) {
      var key = questionKey(card, index);
      var storedState = storageGet(key);

      if (storedState === "open") {
        card.open = true;
      } else if (storedState === "closed") {
        card.open = false;
      }

      card.addEventListener("toggle", function () {
        storageSet(key, card.open ? "open" : "closed");

        if (card.open) {
          card.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    addBottomNav();
    addReadingProgress();
    addBackToTopButton();
    improveAnswerCards();
  });
})();
</script>
