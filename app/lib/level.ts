export function getLevelInfo(xp: number) {
  const baseXP = 100;

  let level = 1;
  let required = baseXP;

  while (xp >= required) {
    level++;
    required += Math.floor(baseXP * level * 0.6);
  }

  const prevRequired =
    required - Math.floor(baseXP * level * 0.6);

  const currentXP = xp - prevRequired;
  const neededXP = required - prevRequired;

  const progress = Math.min(
    100,
    Math.round((currentXP / neededXP) * 100)
  );

  return {
    level,
    progress,
    currentXP,
    neededXP,
  };
}