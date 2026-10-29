/*
  ATL Tree Lopping - shared script for every page.

  Image slots: every photo on the site is stock carried over from the old Odoo
  site. Each slot uses a plainly named file in /images (for example
  arborist-climbing-tree-with-chainsaw.webp and .jpg). To swap in real job
  photos, replace those files with the same names and sizes. See
  images/manifest.json for what goes where.

  No forms: there is no contact form and no backend. Contact is tap-to-call
  (plain tel: links, no JS needed) and email (mailto: links).

  This file loads in the <head> without defer so the saved text size is set
  before the page paints. Everything else waits for the DOM.
*/
(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "atl-text-size";
  var SIZES = ["normal", "large", "xlarge"];
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  root.classList.add("js");

  function readSize() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      return SIZES.indexOf(saved) > -1 ? saved : "normal";
    } catch (e) {
      return "normal";
    }
  }

  function applySize(size) {
    if (size === "normal") {
      root.removeAttribute("data-text-size");
    } else {
      root.setAttribute("data-text-size", size);
    }
  }

  applySize(readSize());

  if (!reduceMotion && "IntersectionObserver" in window) {
    root.classList.add("js-reveal");
  }

  function initTextSize() {
    var buttons = document.querySelectorAll("[data-text-size]:not(html)");
    var current = readSize();

    function sync(size) {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("aria-pressed", String(buttons[i].getAttribute("data-text-size") === size));
      }
    }

    sync(current);

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var size = this.getAttribute("data-text-size");
        applySize(size);
        sync(size);
        try {
          window.localStorage.setItem(STORAGE_KEY, size);
        } catch (e) {
          /* Storage blocked: the size still applies for this page view. */
        }
      });
    }
  }

  // Below 1180px the menu is a full-screen dialog: close button, Escape, focus trap, no page scroll behind it.
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    var closeBtn = nav && nav.querySelector(".site-nav__close");
    if (!toggle || !nav || !closeBtn) return;
    var desktop = window.matchMedia("(min-width: 1180px)");

    function isOpen() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    function focusable() {
      var all = nav.querySelectorAll("a[href], button");
      return Array.prototype.filter.call(all, function (el) {
        return el.offsetParent !== null;
      });
    }

    function setOpen(open, returnFocus) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      root.classList.toggle("nav-open", open);
      if (open) {
        nav.setAttribute("role", "dialog");
        nav.setAttribute("aria-modal", "true");
        nav.setAttribute("aria-label", "Menu");
        closeBtn.focus();
      } else {
        nav.removeAttribute("role");
        nav.removeAttribute("aria-modal");
        nav.removeAttribute("aria-label");
        if (returnFocus) toggle.focus();
      }
    }

    toggle.addEventListener("click", function () {
      setOpen(true, false);
    });

    closeBtn.addEventListener("click", function () {
      setOpen(false, true);
    });

    document.addEventListener("keydown", function (event) {
      if (!isOpen()) return;
      if (event.key === "Escape") {
        setOpen(false, true);
        return;
      }
      if (event.key !== "Tab") return;
      var items = focusable();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (!nav.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    function onResize() {
      if (desktop.matches && isOpen()) setOpen(false, false);
    }
    if (desktop.addEventListener) desktop.addEventListener("change", onResize);
    else if (desktop.addListener) desktop.addListener(onResize);
  }

  function initSmoothScroll() {
    document.addEventListener("click", function (event) {
      var link = event.target.closest && event.target.closest('a[href^="#"]');
      if (!link) return;
      var id = link.getAttribute("href").slice(1);
      var target = id && document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      if (window.history && window.history.pushState) window.history.pushState(null, "", "#" + id);
    });
  }

  function initReveal() {
    if (!root.classList.contains("js-reveal")) return;
    var items = document.querySelectorAll(".reveal");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

    for (var i = 0; i < items.length; i++) observer.observe(items[i]);
  }

  // The mobile call bar hides while the footer is on screen, so it never covers it.
  function initCallBar() {
    var bar = document.querySelector("[data-call-bar]");
    var footer = document.querySelector(".site-footer");
    if (!bar || !footer || !("IntersectionObserver" in window)) return;

    new IntersectionObserver(function (entries) {
      bar.classList.toggle("is-hidden", entries[0].isIntersecting);
    }).observe(footer);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTextSize();
    initNav();
    initSmoothScroll();
    initReveal();
    initCallBar();
  });
})();
