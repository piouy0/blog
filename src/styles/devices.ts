export const breakpoints = {
  xs: 600,
  sm: 768,
  md: 1024,
  lg: 1376,
  xl: 1920,
};

export const devices = {
  mobile: `@media screen and (max-width: ${breakpoints.xs}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.md}px)`,
  desktop: `@media screen and (min-width: ${breakpoints.md}px)`,
  largeDesktop: `@media screen and (min-width: ${breakpoints.lg}px)`,
  extraLargeDesktop: `@media screen and (min-width: ${breakpoints.xl}px)`,
};

export const isMobile = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia(`screen and (max-width: ${breakpoints.xs}px)`).matches;
  }

  return false;
};

export const isDesktop = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia(`screen and (min-width: ${breakpoints.md}px)`).matches;
  }

  return false;
};
