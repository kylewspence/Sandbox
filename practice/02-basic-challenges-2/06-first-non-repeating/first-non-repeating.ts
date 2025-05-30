export function findFirstNonRepeatingCharacter(
  str: string
): string | undefined {
  const charCount: Record<string, number> = {};

  for (const char of str) {
    charCount[char] = (charCount[char] ?? 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return undefined;
}
