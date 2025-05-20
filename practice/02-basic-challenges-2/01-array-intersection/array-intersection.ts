// export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
//   const newArr: unknown[] = [];
//   for (let i = 0; i < arr1.length; i++) {
//     arr1.forEach((e) => {
//       if (e === arr2[i]) {
//         newArr.push(e);
//         console.log(newArr)
//       }
//     });
//   }
//   return newArr;
// }

console.log('final log', arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
  const intersection: unknown[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
      console.log(intersection);
    }
  }

  return intersection;
}
