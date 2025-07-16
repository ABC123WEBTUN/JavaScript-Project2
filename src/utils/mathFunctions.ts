// Mathematical Functions

/**
 * Calculates the factorial of a given number
 */
export function factorial(n: number): number {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

/**
 * Checks if a number is prime
 */
export function isPrime(num: number): boolean {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * Generates the Fibonacci sequence up to a given number of terms
 */
export function fibonacci(terms: number): number[] {
  if (terms <= 0) return [];
  if (terms === 1) return [0];
  if (terms === 2) return [0, 1];
  
  const sequence = [0, 1];
  for (let i = 2; i < terms; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}