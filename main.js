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

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function isOpen() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    function setOpen(open, returnFocus) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close menu" : "Menu";
      nav.classList.toggle("is-open", open);
      if (!open && returnFocus) toggle.focus();
    }

    toggle.addEventListener("click", function () {
      setOpen(!isOpen(), false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) setOpen(false, true);
    });

    document.addEventListener("click", function (event) {
      if (isOpen() && !nav.contains(event.target) && !toggle.contains(event.target)) {
        setOpen(false, false);
      }
    });
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
