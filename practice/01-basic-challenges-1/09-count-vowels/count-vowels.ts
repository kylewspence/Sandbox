// export function countVowels(str: string): number {
//   const formattedStr = str.toLowerCase();
//   let count = 0
//   const vowels = ['a','e','i','o','u']
//   console.log(formattedStr)
//   for (let i = 0; i < formattedStr.length; i++){
//     vowels.forEach((e) => {
//      if (e === formattedStr[i]){
//       count++
//      }
//   })
// }
// return count
// }

export function countVowels(str: string): number {
  const matches = str.match(/[aeiou]/gi);
  const count = matches ? matches.length : 0;
  return count;
}

console.log(countVowels('whAt If thE string is like this'));

// Take string, split into array, loop through array checking for matches against a vowels. Count the positive returns.
