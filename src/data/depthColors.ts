const depthColors = [
  '#1c2e25', // Level 0 - Deep evergreen
  '#2e4736', // Level 1 - Pine green
  '#426750', // Level 2 - Moss
  '#5b8768', // Level 3 - Light forest green
  '#78a584', // Level 4 - Sage
]

function getDepthColor(depth: number): string {
  const base = depthColors[depth % depthColors.length]
  const lighten = Math.floor(depth / depthColors.length) * 10 // percent
  return applyLightness(base, lighten)
}

function applyLightness(hex: string, percent: number): string {
  const num = parseInt(hex.slice(1), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = (num >> 8 & 0x00FF) + amt
  const B = (num & 0x0000FF) + amt
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R > 255 ? 255 : R * 65536 : 0) + (G < 255 ? G < 1 ? 0 : G > 255 ? 255 : G * 256 : 0) + (B < 255 ? B < 1 ? 0 : B > 255 ? 255 : B : 0)).toString(16).slice(1)
}

export { getDepthColor }
