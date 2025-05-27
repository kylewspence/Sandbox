export function displayLikes(names: string[]): string {
  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  return '';
}

// Take array of names, possibly empty, return a string that lists the people who have liked it.
// 4 cases: No one, one name, two names, three names, and 2 names and X others like this.
