export function invertRGB(rgb: number[]) {
  const copy = [...rgb];
  copy[0] = 255 - rgb[0];
  copy[1] = 255 - rgb[1];
  copy[2] = 255 - rgb[2];

  return copy;
}
