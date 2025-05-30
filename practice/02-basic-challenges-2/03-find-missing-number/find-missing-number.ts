export function findMissingNumber(arr: number[]): number | undefined {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((num, sum) => num + sum);
  const missing = sum - arrSum;
  return missing;
}
