/* @ds-bundle: {"format":4,"namespace":"NFCDDesignSystem_1d3b67","components":[{"name":"Accordion","sourcePath":"componentes/content/Accordion.jsx"},{"name":"Badge","sourcePath":"componentes/content/Badge.jsx"},{"name":"Card","sourcePath":"componentes/content/Card.jsx"},{"name":"MobileCarousel","sourcePath":"componentes/content/MobileCarousel.jsx"},{"name":"Tag","sourcePath":"componentes/content/Tag.jsx"},{"name":"Button","sourcePath":"componentes/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"componentes/core/Eyebrow.jsx"},{"name":"Rule","sourcePath":"componentes/core/Rule.jsx"},{"name":"Field","sourcePath":"componentes/forms/Field.jsx"}],"sourceHashes":{"componentes/content/Accordion.jsx":"fb4a76408d2f","componentes/content/Badge.jsx":"e8751cd51b88","componentes/content/Card.jsx":"9de87f712f64","componentes/content/MobileCarousel.jsx":"b17fd0a74469","componentes/content/Tag.jsx":"d175648a3f80","componentes/core/Button.jsx":"1b0fb38fd926","componentes/core/Eyebrow.jsx":"904d06811361","componentes/core/Rule.jsx":"54ed6df28e17","componentes/forms/Field.jsx":"ae16893b8816","kits-ui/website/AboutBlock.jsx":"aa79e1ebd81e","kits-ui/website/EncuentrosGrid.jsx":"4871f815ea2c","kits-ui/website/Hero.jsx":"aaae8d001c7f","kits-ui/website/SiteFooter.jsx":"42a9b6e57488","kits-ui/website/SiteHeader.jsx":"a4b9f36d757e","listmonk/listmonk_public_es.js":"a99eb0c124e2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NFCDDesignSystem_1d3b67 = window.NFCDDesignSystem_1d3b67 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// componentes/content/Accordion.jsx
try { (() => {
var __mod = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // componentes/content/Accordion.jsx
  var Accordion_exports = {};
  __export(Accordion_exports, {
    Accordion: () => Accordion,
    default: () => Accordion_default
  });
  var import_react = __toESM(require_react());
  var KEYFRAMES_ID = "nfcd-accordion-keyframes";
  var KEYFRAMES = `@keyframes nfcd-chevron-invite { 0%,100% { transform:translateY(0); opacity:.7; } 50% { transform:translateY(3px); opacity:1; } }
@keyframes nfcd-peek-invite { 0%,100% { max-height:26px; opacity:.4; } 50% { max-height:46px; opacity:.65; } }`;
  function ensureKeyframes() {
    if (typeof document === "undefined" || document.getElementById(KEYFRAMES_ID)) return;
    const style = document.createElement("style");
    style.id = KEYFRAMES_ID;
    style.textContent = KEYFRAMES;
    document.head.appendChild(style);
  }
  function Accordion({
    label = "Ver detalles",
    labelOpen,
    defaultOpen = false,
    children,
    style
  }) {
    const [open, setOpen] = (0, import_react.useState)(defaultOpen);
    const [height, setHeight] = (0, import_react.useState)(defaultOpen ? "none" : 0);
    const [hover, setHover] = (0, import_react.useState)(false);
    const panelRef = (0, import_react.useRef)(null);
    (0, import_react.useEffect)(() => {
      ensureKeyframes();
    }, []);
    (0, import_react.useEffect)(() => {
      const el = panelRef.current;
      if (!el) return;
      if (open) {
        setHeight(el.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [open, children]);
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { borderTop: "1px solid var(--border-hair)", ...style } }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        "aria-expanded": open,
        style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "var(--space-4) 0",
          fontFamily: "var(--font-label)",
          fontSize: "var(--font-size-sm)",
          fontWeight: "var(--weight-bold)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: hover && !open ? "var(--chip-sage-text)" : "var(--brand)",
          lineHeight: 1,
          transition: "color var(--dur-base) var(--ease-quiet)"
        }
      },
      /* @__PURE__ */ import_react.default.createElement("span", { style: { display: "flex", alignItems: "center" } }, open ? labelOpen || label : label),
      /* @__PURE__ */ import_react.default.createElement(
        "svg",
        {
          viewBox: "0 0 24 24",
          width: "25",
          height: "25",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          style: {
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : hover ? "rotate(35deg)" : "rotate(0deg)",
            transition: "transform var(--dur-base) var(--ease-quiet), color var(--dur-base) var(--ease-quiet)",
            animation: open ? "none" : "nfcd-chevron-invite 1.8s ease-in-out infinite"
          }
        },
        /* @__PURE__ */ import_react.default.createElement("polyline", { points: "6 9 12 15 18 9" })
      )
    ), /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        style: {
          maxHeight: open ? height === "none" ? "none" : `${height}px` : hover ? "26px" : "0px",
          overflow: "hidden",
          opacity: open ? 1 : hover ? 0.4 : 0,
          transform: open ? "translateY(0)" : "translateY(-6px)",
          transition: "max-height var(--dur-slow) var(--ease-quiet), opacity var(--dur-slow) var(--ease-quiet), transform var(--dur-slow) var(--ease-quiet)",
          animation: !open && hover ? "nfcd-peek-invite 1.8s ease-in-out infinite" : "none"
        }
      },
      /* @__PURE__ */ import_react.default.createElement("div", { ref: panelRef, style: { paddingBottom: "var(--space-5)" } }, children)
    ));
  }
  var Accordion_default = Accordion;
  return __toCommonJS(Accordion_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "componentes/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// componentes/content/Badge.jsx
try { (() => {
var __mod = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // componentes/content/Badge.jsx
  var Badge_exports = {};
  __export(Badge_exports, {
    Badge: () => Badge
  });
  var import_react = __toESM(require_react());
  function Badge({ children, variant = "soft", tone = "wine", style, ...rest }) {
    const palette = {
      wine: { strong: "var(--chip-wine-solid)", soft: "var(--chip-wine-bg)", softText: "var(--chip-wine-text)", line: "var(--chip-wine-line)" },
      ink: { strong: "var(--chip-ink-solid)", soft: "var(--chip-ink-bg)", softText: "var(--chip-ink-text)", line: "var(--chip-ink-line)" },
      sage: { strong: "var(--chip-sage-solid)", soft: "var(--chip-sage-bg)", softText: "var(--chip-sage-text)", line: "var(--chip-sage-line)" }
    }[tone];
    const styles = variant === "solid" ? { background: palette.strong, color: "var(--chip-on-solid)", border: "1px solid " + palette.strong } : { background: palette.soft, color: palette.softText, border: "1px solid " + palette.line };
    return /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          fontFamily: "var(--font-label)",
          fontSize: "10px",
          fontWeight: "var(--weight-bold)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          padding: "3px 8px",
          borderRadius: "var(--radius-xs)",
          ...styles,
          ...style
        },
        ...rest
      },
      children
    );
  }
  return __toCommonJS(Badge_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "componentes/content/Badge.jsx", error: String((e && e.message) || e) }); }

// componentes/content/Card.jsx
try { (() => {
var __mod = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // componentes/content/Card.jsx
  var Card_exports = {};
  __export(Card_exports, {
    Card: () => Card
  });
  var import_react = __toESM(require_react());
  function Card({ children, accent = false, raised = false, as = "div", style, ...rest }) {
    const Tag = as;
    return /* @__PURE__ */ import_react.default.createElement(
      Tag,
      {
        style: {
          background: raised ? "var(--surface-raised)" : "var(--surface-card)",
          border: "var(--border-thin) solid var(--border-soft)",
          borderTop: accent ? "3px solid var(--brand)" : "var(--border-thin) solid var(--border-soft)",
          borderRadius: "var(--radius-sm)",
          boxShadow: raised ? "var(--shadow-md)" : "var(--shadow-none)",
          padding: "var(--space-5)",
          color: "var(--text-body)",
          ...style
        },
        ...rest
      },
      children
    );
  }
  return __toCommonJS(Card_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "componentes/content/Card.jsx", error: String((e && e.message) || e) }); }

// componentes/content/MobileCarousel.jsx
try { (() => {
var __mod = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // componentes/content/MobileCarousel.jsx
  var MobileCarousel_exports = {};
  __export(MobileCarousel_exports, {
    MobileCarousel: () => MobileCarousel,
    default: () => MobileCarousel_default
  });
  var import_react = __toESM(require_react());
  var KEYFRAMES_ID = "nfcd-mobile-carousel-keyframes";
  var KEYFRAMES = `
@keyframes nfcd-pulse-invite { 0%,100% { opacity:.6; transform:translateY(-50%) scale(1); } 50% { opacity:1; transform:translateY(-50%) scale(1.12); } }
@keyframes nfcd-ripple-wave { 0% { transform:translate(-50%,-50%) scale(1); opacity:.55; } 100% { transform:translate(-50%,-50%) scale(3); opacity:0; } }
.nfcd-dot--active { position:relative; }
.nfcd-dot--active::before, .nfcd-dot--active::after { content:""; position:absolute; top:50%; left:50%; width:8px; height:8px; border-radius:50%; background:var(--brand); opacity:0; animation:nfcd-ripple-wave 1.6s ease-out infinite; animation-fill-mode:backwards; }
.nfcd-dot--active::after { animation-delay:.8s; }
`;
  function ensureKeyframes() {
    if (typeof document === "undefined" || document.getElementById(KEYFRAMES_ID)) return;
    const style = document.createElement("style");
    style.id = KEYFRAMES_ID;
    style.textContent = KEYFRAMES;
    document.head.appendChild(style);
  }
  function MobileCarousel({
    items = [],
    onSlideChange = () => {
    },
    showDots = true,
    showArrows = true,
    autoPlay = false,
    autoPlayInterval = 5e3,
    aspectRatio = "1080 / 1350",
    style,
    children
  }) {
    const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
    const scrollContainerRef = (0, import_react.useRef)(null);
    const autoPlayTimerRef = (0, import_react.useRef)(null);
    const isProgrammaticScrollRef = (0, import_react.useRef)(false);
    const programmaticScrollTimeoutRef = (0, import_react.useRef)(null);
    (0, import_react.useEffect)(() => {
      ensureKeyframes();
    }, []);
    const slideCount = items.length || import_react.default.Children.count(children);
    const scrollToSlide = (index) => {
      var _a;
      const container = scrollContainerRef.current;
      if (!container) return;
      const slideWidth = ((_a = container.querySelector("[data-slide]")) == null ? void 0 : _a.offsetWidth) || 0;
      if (slideWidth > 0) {
        isProgrammaticScrollRef.current = true;
        clearTimeout(programmaticScrollTimeoutRef.current);
        container.scrollLeft = slideWidth * index;
        setCurrentIndex(index);
        onSlideChange(index);
        const clearFlag = () => {
          isProgrammaticScrollRef.current = false;
        };
        if ("onscrollend" in container) {
          container.addEventListener("scrollend", clearFlag, { once: true });
        } else {
          programmaticScrollTimeoutRef.current = setTimeout(clearFlag, 500);
        }
      }
    };
    const handlePrev = () => scrollToSlide((currentIndex - 1 + slideCount) % slideCount);
    const handleNext = () => scrollToSlide((currentIndex + 1) % slideCount);
    (0, import_react.useEffect)(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const handleScroll = () => {
        var _a;
        if (isProgrammaticScrollRef.current) return;
        const slideWidth = ((_a = container.querySelector("[data-slide]")) == null ? void 0 : _a.offsetWidth) || 0;
        if (slideWidth > 0) {
          const index = Math.round(container.scrollLeft / slideWidth);
          if (index !== currentIndex && index < slideCount) {
            setCurrentIndex(index);
            onSlideChange(index);
          }
        }
      };
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
        clearTimeout(programmaticScrollTimeoutRef.current);
      };
    }, [currentIndex, slideCount, onSlideChange]);
    (0, import_react.useEffect)(() => {
      if (!autoPlay) return;
      autoPlayTimerRef.current = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(autoPlayTimerRef.current);
    }, [autoPlay, autoPlayInterval, currentIndex]);
    const arrowBase = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "none",
      background: "var(--surface-ink)",
      color: "var(--text-on-ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 2,
      animation: "nfcd-pulse-invite 1.8s ease-in-out infinite"
    };
    const slides = items.length > 0 ? items.map((item, idx) => /* @__PURE__ */ import_react.default.createElement("div", { key: idx, "data-slide": true, role: "group", "aria-label": `Slide ${idx + 1} of ${slideCount}`, style: { flex: "0 0 100%", width: "100%", height: "100%", scrollSnapAlign: "start" } }, item)) : import_react.default.Children.map(children, (child, idx) => /* @__PURE__ */ import_react.default.createElement("div", { key: idx, "data-slide": true, role: "group", "aria-label": `Slide ${idx + 1} of ${slideCount}`, style: { flex: "0 0 100%", width: "100%", height: "100%", scrollSnapAlign: "start" } }, child));
    return /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        "data-carousel": true,
        style: {
          position: "relative",
          width: "100%",
          aspectRatio,
          borderRadius: "var(--radius-sm)",
          overflow: "hidden",
          background: "var(--surface-sunk)",
          ...style
        }
      },
      /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          ref: scrollContainerRef,
          role: "region",
          "aria-label": "Carousel",
          style: {
            display: "flex",
            width: "100%",
            height: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            scrollbarWidth: "none"
          }
        },
        slides
      ),
      showArrows && slideCount > 1 && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("button", { type: "button", onClick: handlePrev, "aria-label": "Slide anterior", style: { ...arrowBase, left: "-16px" } }, /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2" }, /* @__PURE__ */ import_react.default.createElement("polyline", { points: "15 18 9 12 15 6" }))), /* @__PURE__ */ import_react.default.createElement("button", { type: "button", onClick: handleNext, "aria-label": "Siguiente slide", style: { ...arrowBase, right: "-16px" } }, /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2" }, /* @__PURE__ */ import_react.default.createElement("polyline", { points: "9 18 15 12 9 6" })))),
      showDots && slideCount > 1 && /* @__PURE__ */ import_react.default.createElement("div", { role: "tablist", style: { position: "absolute", bottom: "16px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px", zIndex: 2 } }, Array.from({ length: slideCount }).map((_, idx) => /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          key: idx,
          type: "button",
          role: "tab",
          "aria-label": `Ir al slide ${idx + 1}`,
          "aria-selected": idx === currentIndex,
          onClick: () => scrollToSlide(idx),
          className: idx === currentIndex ? "nfcd-dot--active" : void 0,
          style: {
            width: "8px",
            height: "8px",
            padding: 0,
            border: "none",
            borderRadius: "50%",
            background: idx === currentIndex ? "var(--brand)" : "var(--border-strong)",
            opacity: idx === currentIndex ? 1 : 0.35,
            cursor: "pointer"
          }
        }
      )))
    );
  }
  var MobileCarousel_default = MobileCarousel;
  return __toCommonJS(MobileCarousel_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "componentes/content/MobileCarousel.jsx", error: String((e && e.message) || e) }); }

// componentes/content/Tag.jsx
try { (() => {
var __mod = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // componentes/content/Tag.jsx
  var Tag_exports = {};
  __export(Tag_exports, {
    Tag: () => Tag
  });
  var import_react = __toESM(require_react());
  function Tag({ children, tone = "wine", style, ...rest }) {
    const tones = {
      wine: { background: "var(--chip-wine-bg)", color: "var(--chip-wine-text)", border: "1px solid var(--chip-wine-line)" },
      ink: { background: "var(--chip-ink-bg)", color: "var(--chip-ink-text)", border: "1px solid var(--chip-ink-line)" },
      sage: { background: "var(--chip-sage-bg)", color: "var(--chip-sage-text)", border: "1px solid var(--chip-sage-line)" }
    };
    return /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          fontFamily: "var(--font-label)",
          fontSize: "var(--font-size-2xs)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "var(--space-1) var(--space-3)",
          borderRadius: "var(--radius-pill)",
          ...tones[tone],
          ...style
        },
        ...rest
      },
      children
    );
  }
  return __toCommonJS(Tag_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "componentes/content/Tag.jsx", error: String((e && e.message) || e) }); }

// componentes/core/Button.jsx
try { (() => {
var __mod = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // componentes/core/Button.jsx
  var Button_exports = {};
  __export(Button_exports, {
    Button: () => Button
  });
  var import_react = __toESM(require_react());
  function Button({
    children,
    variant = "solid",
    size = "md",
    disabled = false,
    type = "button",
    href,
    onClick,
    style,
    ...rest
  }) {
    const sizes = {
      sm: { fontSize: "var(--font-size-2xs)", padding: "7px 14px", letterSpacing: "0.14em" },
      md: { fontSize: "var(--font-size-xs)", padding: "11px 22px", letterSpacing: "0.16em" },
      lg: { fontSize: "var(--font-size-sm)", padding: "15px 30px", letterSpacing: "0.18em" }
    };
    const base = {
      fontFamily: "var(--font-label)",
      textTransform: "uppercase",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      border: "var(--border-med) solid transparent",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur-base) var(--ease-quiet), color var(--dur-base) var(--ease-quiet), border-color var(--dur-base) var(--ease-quiet)",
      textDecoration: "none",
      whiteSpace: "nowrap",
      ...sizes[size]
    };
    const variants = {
      solid: { background: "var(--brand)", color: "var(--text-on-wine)", borderColor: "var(--brand)" },
      outline: { background: "transparent", color: "var(--text-strong)", borderColor: "var(--border-strong)" },
      ghost: { background: "transparent", color: "var(--text-body)", borderColor: "transparent" },
      link: {
        background: "transparent",
        color: "var(--text-accent)",
        borderColor: "transparent",
        borderRadius: 0,
        padding: "2px 0",
        borderBottom: "var(--border-med) solid var(--text-accent)"
      }
    };
    const [hover, setHover] = import_react.default.useState(false);
    const hoverStyles = !disabled && hover ? {
      solid: { background: "var(--brand-hover)", borderColor: "var(--brand-hover)" },
      outline: { background: "var(--text-strong)", color: "var(--surface-page)" },
      ghost: { background: "var(--surface-raised)" },
      link: { color: "var(--text-accent-hover)", borderColor: "var(--brand)" }
    }[variant] : {};
    const Tag = href ? "a" : "button";
    const tagProps = href ? { href } : { type, disabled };
    return /* @__PURE__ */ import_react.default.createElement(
      Tag,
      {
        ...tagProps,
        onClick: disabled ? void 0 : onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: { ...base, ...variants[variant], ...hoverStyles, ...style },
        ...rest
      },
      children
    );
  }
  return __toCommonJS(Button_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "componentes/core/Button.jsx", error: String((e && e.message) || e) }); }

// componentes/core/Eyebrow.jsx
try { (() => {
var __mod = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // componentes/core/Eyebrow.jsx
  var Eyebrow_exports = {};
  __export(Eyebrow_exports, {
    Eyebrow: () => Eyebrow
  });
  var import_react = __toESM(require_react());
  function Eyebrow({ children, tone = "wine", as = "div", style, ...rest }) {
    const tones = {
      wine: "var(--text-accent)",
      ink: "var(--text-body)",
      muted: "var(--text-muted)",
      onInk: "var(--text-on-ink-muted)"
    };
    const Tag = as;
    return /* @__PURE__ */ import_react.default.createElement(
      Tag,
      {
        style: {
          fontFamily: "var(--font-label)",
          fontSize: "var(--font-size-xs)",
          fontWeight: "var(--weight-bold)",
          letterSpacing: "var(--tracking-wordmark)",
          textTransform: "uppercase",
          color: tones[tone] || tones.wine,
          ...style
        },
        ...rest
      },
      children
    );
  }
  return __toCommonJS(Eyebrow_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "componentes/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// componentes/core/Rule.jsx
try { (() => {
var __mod = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // componentes/core/Rule.jsx
  var Rule_exports = {};
  __export(Rule_exports, {
    Rule: () => Rule
  });
  var import_react = __toESM(require_react());
  function Rule({ variant = "tick", vertical = false, tone = "ink", style, ...rest }) {
    const color = tone === "wine" ? "var(--brand)" : tone === "faint" ? "var(--border-hair)" : "var(--rule-ink)";
    if (vertical) {
      return /* @__PURE__ */ import_react.default.createElement("span", { role: "separator", style: { display: "inline-block", width: "1px", alignSelf: "stretch", background: "var(--border-soft)", ...style }, ...rest });
    }
    const variants = {
      tick: { width: "48px", height: "2px", background: color },
      full: { width: "100%", height: "1px", background: "var(--border-hair)" },
      strong: { width: "100%", height: "2px", background: color }
    };
    return /* @__PURE__ */ import_react.default.createElement("hr", { style: { border: 0, margin: 0, ...variants[variant], ...style }, ...rest });
  }
  return __toCommonJS(Rule_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "componentes/core/Rule.jsx", error: String((e && e.message) || e) }); }

// componentes/forms/Field.jsx
try { (() => {
var __mod = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // componentes/forms/Field.jsx
  var Field_exports = {};
  __export(Field_exports, {
    Field: () => Field
  });
  var import_react = __toESM(require_react());
  function Field({
    label,
    hint,
    value,
    onChange,
    placeholder,
    type = "text",
    multiline = false,
    rows = 3,
    id,
    style,
    ...rest
  }) {
    const [focus, setFocus] = import_react.default.useState(false);
    const fieldId = id || (label ? "f-" + String(label).toLowerCase().replace(/\s+/g, "-") : void 0);
    const control = {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: "var(--font-size-md)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: "var(--border-thin) solid " + (focus ? "var(--focus-ring)" : "var(--border-soft)"),
      borderRadius: "var(--radius-sm)",
      padding: "10px 12px",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px var(--brand-tint)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-quiet), box-shadow var(--dur-fast) var(--ease-quiet)",
      resize: multiline ? "vertical" : void 0
    };
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "6px", ...style } }, label && /* @__PURE__ */ import_react.default.createElement("label", { htmlFor: fieldId, style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--font-size-2xs)",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    } }, label), multiline ? /* @__PURE__ */ import_react.default.createElement(
      "textarea",
      {
        id: fieldId,
        rows,
        value,
        onChange,
        placeholder,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: control,
        ...rest
      }
    ) : /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        id: fieldId,
        type,
        value,
        onChange,
        placeholder,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: control,
        ...rest
      }
    ), hint && /* @__PURE__ */ import_react.default.createElement("span", { style: { fontFamily: "var(--font-label)", fontSize: "var(--font-size-2xs)", color: "var(--text-faint)" } }, hint));
  }
  return __toCommonJS(Field_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "componentes/forms/Field.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MobileCarousel = __ds_scope.MobileCarousel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Field = __ds_scope.Field;

// kits-ui/website/AboutBlock.jsx
try { (() => {
const { Eyebrow, Rule, Button } = window.NFCDDesignSystem_1d3b67;
function AboutBlock() {
  return /* @__PURE__ */ React.createElement("section", { style: { maxWidth: 1280, margin: "0 auto", padding: "76px 48px", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 52, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", position: "relative" } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "nfcd-logo-light",
      src: "../../recursos/logos/nfcd_isologov1_color_fondotrasparente.png",
      alt: "Naturaleza de la Fuerza",
      style: { maxWidth: "100%", maxHeight: 380 }
    }
  ), /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "nfcd-logo-dark",
      src: "../../recursos/logos/nfcd_isologov1_blanco_fondotrasparente.png",
      alt: "Naturaleza de la Fuerza",
      style: { maxWidth: "100%", maxHeight: 380, position: "absolute", inset: 0, margin: "auto" }
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, null, "La pr\xE1ctica"), /* @__PURE__ */ React.createElement("div", { style: { height: 12 } }), /* @__PURE__ */ React.createElement(Rule, { tone: "wine" }), /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", fontSize: "var(--font-size-2xl)", lineHeight: "var(--leading-snug)", color: "var(--text-strong)", margin: "20px 0 0" } }, "Hueso y vuelo: el cuerpo como campo de conocimiento"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-body)", fontSize: "var(--font-size-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: "18px 0 0", maxWidth: "58ch" } }, "La danza no ilustra una idea: la produce. Cada pr\xE1ctica abre el cuerpo a las fuerzas que lo atraviesan, y en ese suceso aparece un saber que no pasa primero por las palabras. Dirigido por ", /* @__PURE__ */ React.createElement("strong", null, "Roxana Galand"), ", el sistema tiene su primera sede en Campo Arroyo del Medio, Bariloche, Patagonia."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 28 } }, /* @__PURE__ */ React.createElement(Button, { variant: "solid" }, "Conocer la investigaci\xF3n"))));
}
window.AboutBlock = AboutBlock;

window.AboutBlock = AboutBlock;
})(); } catch (e) { __ds_ns.__errors.push({ path: "kits-ui/website/AboutBlock.jsx", error: String((e && e.message) || e) }); }

// kits-ui/website/EncuentrosGrid.jsx
try { (() => {
const { Card, Tag, Badge, Eyebrow, Button } = window.NFCDDesignSystem_1d3b67;
const ENCUENTROS = [
  {
    season: "Oto\xF1o 2026",
    title: "El cuerpo que escucha",
    desc: "Tres encuentros de pr\xE1ctica som\xE1tica y danza en contacto con el paisaje del Campo.",
    tags: ["Som\xE1tica", "Naturaleza"],
    format: "Presencial",
    hours: "12 h"
  },
  {
    season: "Oto\xF1o 2026",
    title: "Fuerzas y vuelo",
    desc: "Estudio del peso, el impulso y la transformaci\xF3n del gesto a partir del registro anat\xF3mico.",
    tags: ["Danza", "Anatom\xEDa"],
    format: "Presencial",
    hours: "18 h"
  },
  {
    season: "Invierno 2026",
    title: "Conciencia planetaria",
    desc: "Seminario de investigaci\xF3n sobre cuerpo, fuerza y mundo. Lecturas, pr\xE1ctica y escritura.",
    tags: ["Investigaci\xF3n"],
    format: "Online",
    hours: "8 h"
  }
];
function EncuentrosGrid() {
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--surface-raised)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "64px 48px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, null, "Pr\xF3ximos encuentros"), /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", fontSize: "var(--font-size-2xl)", color: "var(--text-strong)", margin: "10px 0 0" } }, "Programa 2026")), /* @__PURE__ */ React.createElement(Button, { variant: "link", href: "#" }, "Calendario completo")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 } }, ENCUENTROS.map((e) => /* @__PURE__ */ React.createElement(Card, { key: e.title, accent: true, style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Badge, { tone: e.format === "Online" ? "sage" : "ink" }, e.format), /* @__PURE__ */ React.createElement(Badge, null, e.hours)), /* @__PURE__ */ React.createElement(Eyebrow, { tone: "muted" }, e.season), /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", fontSize: "var(--font-size-xl)", color: "var(--text-strong)", margin: "8px 0 8px" } }, e.title), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-body)", fontSize: "var(--font-size-sm)", lineHeight: "var(--leading-normal)", color: "var(--text-body)", margin: 0, flex: 1 } }, e.desc), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, margin: "16px 0" } }, e.tags.map((t, i) => /* @__PURE__ */ React.createElement(Tag, { key: t, tone: i === 1 ? "sage" : "wine" }, t))), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm" }, "Ver ficha"))))));
}
window.EncuentrosGrid = EncuentrosGrid;

window.EncuentrosGrid = EncuentrosGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "kits-ui/website/EncuentrosGrid.jsx", error: String((e && e.message) || e) }); }

// kits-ui/website/Hero.jsx
try { (() => {
const { Button, Eyebrow, Rule } = window.NFCDDesignSystem_1d3b67;
function Hero() {
  return /* @__PURE__ */ React.createElement("section", { style: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    alignItems: "center",
    gap: 40,
    padding: "76px 48px 64px",
    maxWidth: 1280,
    margin: "0 auto"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, null, "Sistema de pr\xE1cticas e investigaci\xF3n"), /* @__PURE__ */ React.createElement("div", { style: { height: 14 } }), /* @__PURE__ */ React.createElement(Rule, { tone: "wine" }), /* @__PURE__ */ React.createElement("h1", { style: {
    fontFamily: "var(--font-title)",
    fontWeight: "var(--weight-bold)",
    fontSize: "var(--font-size-5xl)",
    lineHeight: 0.92,
    letterSpacing: "var(--tracking-display)",
    textTransform: "uppercase",
    color: "var(--text-strong)",
    margin: "22px 0 0"
  } }, "Naturaleza", /* @__PURE__ */ React.createElement("br", null), "de la fuerza"), /* @__PURE__ */ React.createElement("p", { style: {
    fontFamily: "var(--font-body)",
    fontSize: "var(--font-size-lg)",
    lineHeight: "var(--leading-normal)",
    color: "var(--text-body)",
    maxWidth: "42ch",
    margin: "22px 0 0"
  } }, "Una pr\xE1ctica que se involucra en los sucesos del cuerpo, las fuerzas y la danza como campos de acceso al conocimiento \u2014 hacia una conciencia planetaria."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, marginTop: 30 } }, /* @__PURE__ */ React.createElement(Button, { variant: "solid", size: "lg" }, "Ver encuentros"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "lg" }, "La investigaci\xF3n"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "../../recursos/logos/nfcd_logo_alpha_light.png",
      alt: "Costillar y mariposa",
      style: { maxWidth: "100%", maxHeight: 460, mixBlendMode: "var(--img-graphite-blend)" }
    }
  )));
}
window.Hero = Hero;

window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "kits-ui/website/Hero.jsx", error: String((e && e.message) || e) }); }

// kits-ui/website/SiteFooter.jsx
try { (() => {
const { Eyebrow, Field, Button } = window.NFCDDesignSystem_1d3b67;
function SiteFooter() {
  return /* @__PURE__ */ React.createElement("footer", { style: { background: "var(--surface-ink)", color: "var(--text-on-ink)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "64px 48px 40px", display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 48 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", { src: "../../recursos/logos/nfcd_isologov2_blanco_fondotrasparente.png", alt: "NFCD", style: { height: 64, marginBottom: 18 } }), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-body)", fontSize: "var(--font-size-sm)", lineHeight: "var(--leading-normal)", color: "var(--text-on-ink-muted)", maxWidth: "34ch", margin: 0 } }, "Naturaleza de la fuerza en el cuerpo y la danza. Pr\xE1cticas e investigaci\xF3n hacia una conciencia planetaria.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, { tone: "onInk" }, "Sede"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-label)", fontSize: "var(--font-size-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-on-ink-muted)", marginTop: 14 } }, "Campo Arroyo del Medio", /* @__PURE__ */ React.createElement("br", null), "Bariloche \xB7 Patagonia", /* @__PURE__ */ React.createElement("br", null), "Argentina"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(Eyebrow, { tone: "onInk" }, "Direcci\xF3n"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-label)", fontSize: "var(--font-size-sm)", color: "var(--text-on-ink-muted)", marginTop: 12 } }, "Roxana Galand"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Eyebrow, { tone: "onInk" }, "Bolet\xEDn"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-body)", fontSize: "var(--font-size-sm)", color: "var(--text-on-ink-muted)", margin: "12px 0 14px" } }, "Encuentros, publicaciones y notas del Campo."), /* @__PURE__ */ React.createElement(Field, { placeholder: "tu@correo.com", type: "email" }), /* @__PURE__ */ React.createElement("div", { style: { height: 12 } }), /* @__PURE__ */ React.createElement(Button, { variant: "solid", size: "sm" }, "Suscribirme"))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid rgba(255,255,255,0.12)", padding: "20px 48px", maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-label)", fontSize: "var(--font-size-2xs)", letterSpacing: "0.1em", color: "var(--text-on-ink-faint)" } }, "\xA9 2026 NFCD"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-label)", fontSize: "var(--font-size-2xs)", letterSpacing: "0.1em", color: "var(--text-on-ink-faint)" } }, "Instagram \xB7 Contacto")));
}
window.SiteFooter = SiteFooter;

window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "kits-ui/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// kits-ui/website/SiteHeader.jsx
try { (() => {
const { Button, Eyebrow } = window.NFCDDesignSystem_1d3b67;
function SiteHeader({ onNav }) {
  const links = ["Encuentros", "Investigaci\xF3n", "Publicaciones", "Sobre"];
  return /* @__PURE__ */ React.createElement("header", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 48px",
    borderBottom: "1px solid var(--border-soft)",
    background: "var(--surface-page)",
    position: "sticky",
    top: 0,
    zIndex: 10
  } }, /* @__PURE__ */ React.createElement("a", { href: "#", onClick: (e) => {
    e.preventDefault();
    onNav && onNav("home");
  }, style: { display: "flex", alignItems: "center", position: "relative", height: 46 } }, /* @__PURE__ */ React.createElement("img", { className: "nfcd-logo-light", src: "../../recursos/logos/nfcd_isologov2_color_fondotrasparente.png", alt: "NFCD", style: { height: 46 } }), /* @__PURE__ */ React.createElement("img", { className: "nfcd-logo-dark", src: "../../recursos/logos/nfcd_isologov2_blanco_fondotrasparente.png", alt: "NFCD", style: { height: 46 } })), /* @__PURE__ */ React.createElement("nav", { style: { display: "flex", alignItems: "center", gap: 30 } }, links.map((l) => /* @__PURE__ */ React.createElement("a", { key: l, href: "#", onClick: (e) => e.preventDefault(), style: {
    fontFamily: "var(--font-label)",
    fontSize: "var(--font-size-xs)",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--text-body)",
    textDecoration: "none"
  } }, l)), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "solid" }, "Inscribirme")));
}
window.SiteHeader = SiteHeader;

window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "kits-ui/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// listmonk/listmonk_public_es.js
try { (() => {
/* ============================================================
   NFCD · Listmonk — Español para PÁGINAS PÚBLICAS
   (baja, gestión de suscripción, confirmaciones)
   Pegar en: Settings → Appearance → Public → Custom JavaScript
   Luego: Save.
   ============================================================ */
(function () {
  // Inglés (tal como aparece) → Español (cálido y simple)
  var MAP = {
    "Unsubscribe": "Darse de baja",
    "Do you want to unsubscribe from this mailing list?":
      "¿Querés dejar de recibir nuestros correos?",
    "Unsubscribe from all future e-mails.":
      "No deseo recibir más correos de Naturaleza de la Fuerza.",
    "Manage preferences": "Gestionar mis preferencias",
    "Privacy and data": "Privacidad y datos",
    "Export your data": "Exportar mis datos",
    "A copy of your data will be e-mailed to you.":
      "Recibirás una copia de tus datos por correo.",
    "Wipe your data": "Borrar mis datos",
    "Delete all your subscriptions and related data permanently.":
      "Eliminar todas tus suscripciones y datos de forma permanente.",
    "Continue": "Continuar",
    "Confirm": "Confirmar",
    "Subscribe": "Suscribirme",
    "Subscription": "Suscripción",
    "Your subscription has been confirmed.": "¡Tu suscripción fue confirmada!",
    "You have been unsubscribed.": "Listo, dejaste de recibir nuestros correos.",
    "You will no longer receive e-mails from this list.":
      "Ya no recibirás más correos de esta lista.",
    "Sorry, something went wrong.": "Lo sentimos, algo salió mal.",
    "Email": "Correo",
    "Name": "Nombre"
  };

  function translate() {
    // 1) Nodos de texto
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var t = node.nodeValue.trim();
      if (t && MAP[t]) node.nodeValue = node.nodeValue.replace(t, MAP[t]);
    });
    // 2) Botones e inputs
    document.querySelectorAll("button, input[type=submit], input[type=button]").forEach(function (b) {
      var t = (b.value || b.textContent || "").trim();
      if (MAP[t]) { if (b.value) b.value = MAP[t]; else b.textContent = MAP[t]; }
    });
    // 3) Título de la pestaña
    if (MAP[document.title.trim()]) document.title = MAP[document.title.trim()];
    document.documentElement.lang = "es";
  }

  if (document.readyState !== "loading") translate();
  else document.addEventListener("DOMContentLoaded", translate);
})();

})(); } catch (e) { __ds_ns.__errors.push({ path: "listmonk/listmonk_public_es.js", error: String((e && e.message) || e) }); }

})();
