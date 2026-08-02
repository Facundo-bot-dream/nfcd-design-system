import * as React from "react";

/**
 * Swipeable slide viewport with scroll-snap, pulsing edge arrows and a
 * ripple-dot progress indicator. IG 4:5 aspect ratio by default.
 */
export interface MobileCarouselProps {
  /** Slide contents. Alternative to `children`. */
  items?: React.ReactNode[];
  /** Slides as children, alternative to `items`. */
  children?: React.ReactNode;
  /** Called with the new index whenever the active slide changes. */
  onSlideChange?: (index: number) => void;
  /** Show the progress dots. @default true */
  showDots?: boolean;
  /** Show the prev/next edge arrows. @default true */
  showArrows?: boolean;
  /** Advance slides automatically. @default false */
  autoPlay?: boolean;
  /** Auto-play interval in ms. @default 5000 */
  autoPlayInterval?: number;
  /** CSS aspect-ratio of the carousel frame. @default "1080 / 1350" (IG 4:5) */
  aspectRatio?: string;
  style?: React.CSSProperties;
}

/** Swipeable slide viewport with scroll-snap, pulsing arrows and ripple dots. */
export function MobileCarousel(props: MobileCarouselProps): JSX.Element;
