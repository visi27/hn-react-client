/* eslint-disable no-param-reassign */

export const transitionFromAuto = (el, endHeight) => {
  el.style.height = getComputedStyle(el).height;
  // Force repaint
  // eslint-disable-next-line no-unused-expressions
  el.offsetHeight;
  el.style.height = `${endHeight}px`;
  // el.style.overflow = 'hidden'
};

export const transitionToAuto = (el) => {
  const prevHeight = el.style.height;
  el.style.height = 'auto';
  const endHeight = getComputedStyle(el).height;
  el.style.height = prevHeight;
  // Force repaint
  // eslint-disable-next-line no-unused-expressions
  el.offsetHeight;
  el.style.height = endHeight;
};

export const wasClicked = (event, element) => {
  const rect = element.getBoundingClientRect();
  const minX = rect.left + element.clientLeft;
  const x = event.clientX;
  const minY = rect.top + element.clientTop;
  const y = event.clientY;
  if (x < minX || x >= minX + element.clientWidth) {
    return false;
  }
  if (y < minY || y >= minY + element.clientHeight) {
    return false;
  }
  return true;
};

export const calcTextWidth = (text, size = '16px', family = 'sans-serif') => {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  ctx.font = `${size} ${family}`;
  return ctx.measureText(text).width;
};
