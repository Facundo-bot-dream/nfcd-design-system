import React, { useState, useEffect, useRef } from "react";

const KEYFRAMES_ID = "nfcd-mobile-carousel-keyframes";
const KEYFRAMES = `
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

/**
 * NFCD MobileCarousel — swipeable slide viewport with scroll-snap,
 * pulsing edge arrows and a ripple-dot progress indicator.
 * Inline-styled like every NFCD component; keyframes are injected
 * once into <head> since CSS animations can't be inline.
 */
export function MobileCarousel({
  items = [],
  onSlideChange = () => {},
  showDots = true,
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  aspectRatio = "1080 / 1350",
  style,
  children,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const programmaticScrollTimeoutRef = useRef(null);

  useEffect(() => { ensureKeyframes(); }, []);

  const slideCount = items.length || React.Children.count(children);

  const scrollToSlide = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const slideWidth = container.querySelector("[data-slide]")?.offsetWidth || 0;
    if (slideWidth > 0) {
      isProgrammaticScrollRef.current = true;
      clearTimeout(programmaticScrollTimeoutRef.current);
      container.scrollLeft = slideWidth * index;
      setCurrentIndex(index);
      onSlideChange(index);
      const clearFlag = () => { isProgrammaticScrollRef.current = false; };
      if ("onscrollend" in container) {
        container.addEventListener("scrollend", clearFlag, { once: true });
      } else {
        programmaticScrollTimeoutRef.current = setTimeout(clearFlag, 500);
      }
    }
  };

  const handlePrev = () => scrollToSlide((currentIndex - 1 + slideCount) % slideCount);
  const handleNext = () => scrollToSlide((currentIndex + 1) % slideCount);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return;
      const slideWidth = container.querySelector("[data-slide]")?.offsetWidth || 0;
      if (slideWidth > 0) {
        const index = Math.round(container.scrollLeft / slideWidth);
        if (index !== currentIndex && index < slideCount) {
          setCurrentIndex(index);
          onSlideChange(index);
        }
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => { container.removeEventListener("scroll", handleScroll); clearTimeout(programmaticScrollTimeoutRef.current); };
  }, [currentIndex, slideCount, onSlideChange]);

  useEffect(() => {
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
    animation: "nfcd-pulse-invite 1.8s ease-in-out infinite",
  };

  const slides = items.length > 0
    ? items.map((item, idx) => (
        <div key={idx} data-slide role="group" aria-label={`Slide ${idx + 1} of ${slideCount}`} style={{ flex: "0 0 100%", width: "100%", height: "100%", scrollSnapAlign: "start" }}>
          {item}
        </div>
      ))
    : React.Children.map(children, (child, idx) => (
        <div key={idx} data-slide role="group" aria-label={`Slide ${idx + 1} of ${slideCount}`} style={{ flex: "0 0 100%", width: "100%", height: "100%", scrollSnapAlign: "start" }}>
          {child}
        </div>
      ));

  return (
    <div
      data-carousel
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        background: "var(--surface-sunk)",
        ...style,
      }}
    >
      <div
        ref={scrollContainerRef}
        role="region"
        aria-label="Carousel"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
      >
        {slides}
      </div>

      {showArrows && slideCount > 1 && (
        <React.Fragment>
          <button type="button" onClick={handlePrev} aria-label="Slide anterior" style={{ ...arrowBase, left: "-16px" }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button type="button" onClick={handleNext} aria-label="Siguiente slide" style={{ ...arrowBase, right: "-16px" }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </React.Fragment>
      )}

      {showDots && slideCount > 1 && (
        <div role="tablist" style={{ position: "absolute", bottom: "16px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px", zIndex: 2 }}>
          {Array.from({ length: slideCount }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-label={`Ir al slide ${idx + 1}`}
              aria-selected={idx === currentIndex}
              onClick={() => scrollToSlide(idx)}
              className={idx === currentIndex ? "nfcd-dot--active" : undefined}
              style={{
                width: "8px",
                height: "8px",
                padding: 0,
                border: "none",
                borderRadius: "50%",
                background: idx === currentIndex ? "var(--brand)" : "var(--border-strong)",
                opacity: idx === currentIndex ? 1 : 0.35,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileCarousel;
