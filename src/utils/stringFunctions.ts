// String Manipulation Functions

/**
 * Reverses a given string
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Counts the number of characters in a string
 */
export function countCharacters(str: string): number {
  return str.length;
}

/**
 * Capitalizes the first letter of each word in a sentence
 */
export function capitalizeWords(sentence: string): string {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}