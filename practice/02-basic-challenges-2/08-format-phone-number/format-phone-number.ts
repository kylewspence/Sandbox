export function formatPhoneNumber(numbers: number[]): string {
  const areaCode = numbers.slice(0, 3).join('');
  const firstThree = numbers.slice(3, 6).join('');
  const lastFour = numbers.slice(6, 10).join('');
  const phoneNumber = `(${areaCode}) ${firstThree}-${lastFour}`;
  return phoneNumber;
}
