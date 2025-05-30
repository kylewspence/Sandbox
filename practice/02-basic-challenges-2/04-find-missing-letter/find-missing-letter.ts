export function findMissingLetter(arr: string[]): string | undefined {
  const startCode = arr[0].charCodeAt(0); // number of the first element in the array
  for (let i = 0; i < arr.length; i++) {
    if (String.fromCharCode(startCode + i) !== arr[i]) {
      return String.fromCharCode(startCode + i);
    }
  }
}
