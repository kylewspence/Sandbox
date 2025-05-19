export function isPalindrome(str: string): boolean {
  console.log('running');
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(formattedStr);
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
}

console.log(isPalindrome('abc\\123'));
