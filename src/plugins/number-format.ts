export const numberFormat = (num: number): string => {
  return (Math.floor(100 * num) / 100).toString();
};
