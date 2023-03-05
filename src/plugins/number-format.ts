export const numberFormat = (num: number): string => {
  return num ? (Math.floor(100 * num) / 100).toString() : "0";
};
