export function findMaxNumber(arr: number[]): number {
  let top = 0;
  for (let i = 0; i < arr.length; i++) {
    if (top < arr[i]) {
      top = arr[i]
    }
  } return top;
}


findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10
findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // 10
findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6]); // 10