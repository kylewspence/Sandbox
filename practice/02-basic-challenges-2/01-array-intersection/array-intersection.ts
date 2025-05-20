export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
  const newArr: unknown[] = [];
  for (let i = 0; i < arr1.length; i++) {
    arr1.forEach((e) => {
      if (e === arr2[i]) {
        newArr.push(e);
      }
    });
  }
  return newArr;
}
