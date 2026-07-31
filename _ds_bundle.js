/* @nfcd-ds-bundle namespace=NFCDDesignSystem_1d3b67 generated=2026-07-31T13:44:19.681Z */
/* No editar a mano — regenerar con `node _compile.js`. */
(() => {
const __ds_ns = (window.NFCDDesignSystem_1d3b67 = window.NFCDDesignSystem_1d3b67 || {});
const __ds_scope = {};
__ds_ns.__errors = __ds_ns.__errors || [];

// components/content/Badge.jsx
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

  // components/content/Badge.jsx
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
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          fontWeight: 700,
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
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

  // components/content/Card.jsx
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
          border: "1px solid var(--border-soft)",
          borderTop: accent ? "3px solid var(--brand)" : "1px solid var(--border-soft)",
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/MobileCarousel.jsx
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

  // components/content/MobileCarousel.jsx
  var MobileCarousel_exports = {};
  __export(MobileCarousel_exports, {
    MobileCarousel: () => MobileCarousel,
    default: () => MobileCarousel_default
  });
  var import_react = __toESM(require_react());
  function MobileCarousel({
    items = [],
    onSlideChange = () => {
    },
    showDots = true,
    showArrows = true,
    autoPlay = false,
    autoPlayInterval = 5e3,
    children
  }) {
    const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
    const scrollContainerRef = (0, import_react.useRef)(null);
    const autoPlayTimerRef = (0, import_react.useRef)(null);
    const slideCount = items.length || import_react.default.Children.count(children);
    const scrollToSlide = (index) => {
      var _a;
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const slideWidth = ((_a = container.querySelector("[data-slide]")) == null ? void 0 : _a.offsetWidth) || 0;
      if (slideWidth > 0) {
        container.scrollLeft = slideWidth * index;
        setCurrentIndex(index);
        onSlideChange(index);
      }
    };
    const handlePrev = () => {
      const newIndex = (currentIndex - 1 + slideCount) % slideCount;
      scrollToSlide(newIndex);
    };
    const handleNext = () => {
      const newIndex = (currentIndex + 1) % slideCount;
      scrollToSlide(newIndex);
    };
    (0, import_react.useEffect)(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const handleScroll = () => {
        var _a;
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
      return () => container.removeEventListener("scroll", handleScroll);
    }, [currentIndex, slideCount, onSlideChange]);
    (0, import_react.useEffect)(() => {
      if (!autoPlay) return;
      autoPlayTimerRef.current = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
      return () => clearInterval(autoPlayTimerRef.current);
    }, [autoPlay, autoPlayInterval, currentIndex]);
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "mobile-carousel", "data-carousel": true }, /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "mobile-carousel__viewport",
        ref: scrollContainerRef,
        role: "region",
        "aria-label": "Carousel"
      },
      items.length > 0 ? items.map((item, idx) => /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          key: idx,
          className: "mobile-carousel__slide",
          "data-slide": true,
          role: "group",
          "aria-label": `Slide ${idx + 1} of ${slideCount}`
        },
        item
      )) : import_react.default.Children.map(children, (child, idx) => /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          key: idx,
          className: "mobile-carousel__slide",
          "data-slide": true,
          role: "group",
          "aria-label": `Slide ${idx + 1} of ${slideCount}`
        },
        child
      ))
    ), showArrows && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        className: "mobile-carousel__arrow mobile-carousel__arrow--prev",
        onClick: handlePrev,
        "aria-label": "Previous slide",
        type: "button"
      },
      /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2" }, /* @__PURE__ */ import_react.default.createElement("polyline", { points: "15 18 9 12 15 6" }))
    ), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        className: "mobile-carousel__arrow mobile-carousel__arrow--next",
        onClick: handleNext,
        "aria-label": "Next slide",
        type: "button"
      },
      /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2" }, /* @__PURE__ */ import_react.default.createElement("polyline", { points: "9 18 15 12 9 6" }))
    )), showDots && /* @__PURE__ */ import_react.default.createElement("div", { className: "mobile-carousel__dots", role: "tablist" }, Array.from({ length: slideCount }).map((_, idx) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: idx,
        className: `mobile-carousel__dot ${idx === currentIndex ? "mobile-carousel__dot--active" : ""}`,
        onClick: () => scrollToSlide(idx),
        role: "tab",
        "aria-label": `Go to slide ${idx + 1}`,
        "aria-selected": idx === currentIndex,
        type: "button",
        "data-ripple": true
      }
    ))));
  }
  var MobileCarousel_default = MobileCarousel;
  return __toCommonJS(MobileCarousel_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MobileCarousel.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
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

  // components/content/Tag.jsx
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
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "4px 12px",
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
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

  // components/core/Button.jsx
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
      sm: { fontSize: "11px", padding: "7px 14px", letterSpacing: "0.14em" },
      md: { fontSize: "12px", padding: "11px 22px", letterSpacing: "0.16em" },
      lg: { fontSize: "13px", padding: "15px 30px", letterSpacing: "0.18em" }
    };
    const base = {
      fontFamily: "var(--font-mono)",
      textTransform: "uppercase",
      fontWeight: 700,
      lineHeight: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      border: "1.5px solid transparent",
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
        borderBottom: "1.5px solid var(--text-accent)"
      }
    };
    const [hover, setHover] = import_react.default.useState(false);
    const hoverStyles = !disabled && hover ? {
      solid: { background: "var(--brand-hover)", borderColor: "var(--brand-hover)" },
      outline: { background: "var(--text-strong)", color: "var(--surface-page)" },
      ghost: { background: "var(--surface-sunk)" },
      link: { color: "var(--brand-press)", borderColor: "var(--brand)" }
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
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

  // components/core/Eyebrow.jsx
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
      onInk: "var(--ink-400)"
    };
    const Tag = as;
    return /* @__PURE__ */ import_react.default.createElement(
      Tag,
      {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.22em",
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
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

  // components/core/Rule.jsx
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
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

  // components/forms/Field.jsx
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
      fontFamily: "var(--font-serif)",
      fontSize: "16px",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: "1px solid " + (focus ? "var(--focus-ring)" : "var(--border-soft)"),
      borderRadius: "var(--radius-sm)",
      padding: "10px 12px",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px var(--brand-tint)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-quiet), box-shadow var(--dur-fast) var(--ease-quiet)",
      resize: multiline ? "vertical" : void 0
    };
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "6px", ...style } }, label && /* @__PURE__ */ import_react.default.createElement("label", { htmlFor: fieldId, style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
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
    ), hint && /* @__PURE__ */ import_react.default.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-faint)" } }, hint));
  }
  return __toCommonJS(Field_exports);
})();

Object.assign(__ds_scope, __mod);
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;
__ds_ns.Card = __ds_scope.Card;
__ds_ns.MobileCarousel = __ds_scope.MobileCarousel;
__ds_ns.Tag = __ds_scope.Tag;
__ds_ns.Button = __ds_scope.Button;
__ds_ns.Eyebrow = __ds_scope.Eyebrow;
__ds_ns.Rule = __ds_scope.Rule;
__ds_ns.Field = __ds_scope.Field;
})();
