export function reverseString(str: string): string {
  let newWord = ''
  for (let i = str.length - 1; i >= 0; i--){
    const char = str[i]
    newWord += char 
  }
  return newWord
}


// export function reverseString(str: string): string {
//   return str.split('').reverse().join('');
// }

// Take a string.
// Loop through it backwards
// += each letter to my variable in the backwards order.