import React, { useState } from 'react';
import { factorial, isPrime, fibonacci } from '../utils/mathFunctions';

export function MathDemo() {
  const [factorialNum, setFactorialNum] = useState(5);
  const [primeNum, setPrimeNum] = useState(17);
  const [fibTerms, setFibTerms] = useState(10);

  const getFactorial = () => {
    try {
      return factorial(factorialNum);
    } catch (error) {
      return 'Error: ' + (error as Error).message;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">Mathematical Functions</h2>
      
      <div className="space-y-6">
        {/* Factorial */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Factorial Calculator:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={factorialNum}
              onChange={(e) => setFactorialNum(parseInt(e.target.value) || 0)}
              min="0"
              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span>! = {getFactorial()}</span>
          </div>
        </div>

        {/* Prime Check */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prime Number Check:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={primeNum}
              onChange={(e) => setPrimeNum(parseInt(e.target.value) || 1)}
              min="1"
              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span>is {isPrime(primeNum) ? 'prime' : 'not prime'}</span>
          </div>
        </div>

        {/* Fibonacci */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fibonacci Sequence:
          </label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span>First</span>
              <input
                type="number"
                value={fibTerms}
                onChange={(e) => setFibTerms(parseInt(e.target.value) || 1)}
                min="1"
                max="20"
                className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span>terms:</span>
            </div>
            <div className="p-3 bg-gray-50 rounded text-sm">
              [{fibonacci(fibTerms).join(', ')}]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}