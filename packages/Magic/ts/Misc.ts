export const getRandomIndex = (items: any[]) =>
  Math.floor(Math.random() * items.length);

export const getRandomItem = <T>(
  items: T[],
  isConsumable: boolean
): T | undefined => {
  const randomIndex = getRandomIndex(items);
  return isConsumable ? items.splice(randomIndex, 1)[0] : items[randomIndex];
};
