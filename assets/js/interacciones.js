<script>
(function () {
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
      { label: "Temas", href: prefix + "index.html#temas", match: "#temas" },
      { label: "Preguntas", href: prefix + "repaso/preguntas.html", match: "/repaso/preguntas.html" },
      { label: "Glosario", href: prefix + "repaso/glosario.html", match: "/repaso/glosario.html" }
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
        (item.match === "#temas" && window.location.hash === "#temas") ||
        (item.match !== "#temas" && current.endsWith(item.match))
      ) {
        link.setAttribute("aria-current", "page");
      }

      nav.appendChild(link);
    });

    document.body.appendChild(nav);
  }

  function improveAnswerCards() {
    document.querySelectorAll("details.qa-card").forEach(function (card) {
      card.addEventListener("toggle", function () {
        if (card.open) {
          card.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    addBottomNav();
    improveAnswerCards();
  });
})();
</script>
