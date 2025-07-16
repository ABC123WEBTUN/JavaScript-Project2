// Array Functions

/**
 * Finds the maximum value in an array of numbers
 */
export function findMaximum(numbers: number[]): number {
  if (numbers.length === 0) throw new Error('Array cannot be empty');
  return Math.max(...numbers);
}

/**
 * Finds the minimum value in an array of numbers
 */
export function findMinimum(numbers: number[]): number {
  if (numbers.length === 0) throw new Error('Array cannot be empty');
  return Math.min(...numbers);
}

/**
 * Calculates the sum of all elements in an array
 */
export function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Filters out elements from an array based on a given condition
 */
export function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter(condition);
}