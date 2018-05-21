import { parseToHsl, toColorString } from 'polished';

const darkenOrLighten = (color) => {
  const hsl = parseToHsl(color);
  if (hsl.lightness > 0.5) {
    hsl.lightness -= 0.1;
    return toColorString(hsl);
  } else if (hsl.lightness < 0.5) {
    hsl.lightness += 0.1;
    return toColorString(hsl);
  }
  hsl.lightness -= 0.1;
  return toColorString(hsl);
};

export default darkenOrLighten;
