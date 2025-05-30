export function findMissingNumber(arr: number[]): number | undefined {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((num, sum) => num + sum);
  const missing = sum - arrSum;
  return missing;
}

// Calculate the sum of the numbers from 1 to n (inclusive). The formula for this is n * (n + 1) / 2, where n is the length of the array plus 1.
// Calculate the sum of the numbers in the array.
// Subtract the sum of the numbers in the array from the sum of the numbers from 1 to n (inclusive). The difference is the missing number.
// You could use a for loop or the reduce method to calculate the sum of the numbers in the array. We will be focusing on methods like reduce in the next section, but both solutions are included here.
