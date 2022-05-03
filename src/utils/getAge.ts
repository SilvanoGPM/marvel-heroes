export function getAge(date: Date) {
  return new Date().getFullYear() - date.getFullYear();
}
