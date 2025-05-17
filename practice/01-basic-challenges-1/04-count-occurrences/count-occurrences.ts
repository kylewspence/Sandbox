export function countOccurrences(str: string, char: string): number {
  return str.split(char).length - 1;
}
