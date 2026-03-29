import { type ShadowsType } from "./ShadowsType";

/**
 * Generate 25 shadows based on a base shadow string:
 * index 0 = "none", index 1 = the exact base,
 * then index 2–24 are derived with increasing “strength”.
 */
export default function generateBoxShadows(base: string): ShadowsType {
  const result: string[] = ["none"];
  result.push(base); // index 1 = base

  // extract color from the base shadow (assume last token is color)
  const match = base.match(/(hsl\(.*\)|rgba?\(.*\)|#[0-9a-fA-F]+)/);
  const color = match ? match[1] : "rgba(0,0,0,0.1)";

  for (let i = 2; i < 25; i++) {
    const blur = 2 + i; // increase blur radius
    const y = 1 + i * 0.5; // increase Y offset
    const spread = Math.max(i - 10, 0); // small spread after mid levels
    const shadow = `0 ${y}px ${blur}px ${spread}px ${color}`;
    result.push(shadow);
  }

  return result as ShadowsType;
}
