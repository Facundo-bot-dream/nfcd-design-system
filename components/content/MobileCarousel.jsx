import React, { useState, useEffect, useRef } from 'react';

/**
 * MobileCarousel
 *
 * Carousel reutilizable para vistas móviles con scroll-snap.
 * - Aspect ratio IG 4:5 (1080/1350) responsive
 * - Scroll-snap-type: x mandatory
 * - Flechas prev/next con pulso infinito
 * - Dots de progreso con ripple expansivo
 * - Tipografía responsive (mobile first)
 */

export function MobileCarousel({
  items = [],
  onSlideChange = () => {},
  showDots = true,
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  children
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  const slideCount = items.length || React.Children.count(children);

  // Scroll to slide by index
  const scrollToSlide = (index) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const slideWidth = container.querySelector('[data-slide]')?.offsetWidth || 0;

    if (slideWidth > 0) {
      container.scrollLeft = slideWidth * index;
      setCurrentIndex(index);
      onSlideChange(index);
    }
  };

  // Arrow handlers
  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + slideCount) % slideCount;
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % slideCount;
    scrollToSlide(newIndex);
  };

  // Detect scroll position (fallback for snap detection)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideWidth = container.querySelector('[data-slide]')?.offsetWidth || 0;
      if (slideWidth > 0) {
        const index = Math.round(container.scrollLeft / slideWidth);
        if (index !== currentIndex && index < slideCount) {
          setCurrentIndex(index);
          onSlideChange(index);
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, slideCount, onSlideChange]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;

    autoPlayTimerRef.current = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(autoPlayTimerRef.current);
  }, [autoPlay, autoPlayInterval, currentIndex]);

  return (
    <div className="mobile-carousel" data-carousel>
      {/* Scroll container */}
      <div
        className="mobile-carousel__viewport"
        ref={scrollContainerRef}
        role="region"
        aria-label="Carousel"
      >
        {items.length > 0 ? (
          items.map((item, idx) => (
            <div
              key={idx}
              className="mobile-carousel__slide"
              data-slide
              role="group"
              aria-label={`Slide ${idx + 1} of ${slideCount}`}
            >
              {item}
            </div>
          ))
        ) : (
          React.Children.map(children, (child, idx) => (
            <div
              key={idx}
              className="mobile-carousel__slide"
              data-slide
              role="group"
              aria-label={`Slide ${idx + 1} of ${slideCount}`}
            >
              {child}
            </div>
          ))
        )}
      </div>

      {/* Arrow buttons */}
      {showArrows && (
        <>
          <button
            className="mobile-carousel__arrow mobile-carousel__arrow--prev"
            onClick={handlePrev}
            aria-label="Previous slide"
            type="button"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="mobile-carousel__arrow mobile-carousel__arrow--next"
            onClick={handleNext}
            aria-label="Next slide"
            type="button"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Progress dots */}
      {showDots && (
        <div className="mobile-carousel__dots" role="tablist">
          {Array.from({ length: slideCount }).map((_, idx) => (
            <button
              key={idx}
              className={`mobile-carousel__dot ${idx === currentIndex ? 'mobile-carousel__dot--active' : ''}`}
              onClick={() => scrollToSlide(idx)}
              role="tab"
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={idx === currentIndex}
              type="button"
              data-ripple
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileCarousel;
