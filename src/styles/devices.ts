export const sizes = {
  mobile: 600,
  desktop: 1024,
};

export const isMobile = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia(`screen and (max-width: ${sizes.mobile}px)`).matches;
  }

  return false;
};
export const isDesktop = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia(`screen and (min-width: ${sizes.desktop}px)`).matches;
  }

  return false;
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};
