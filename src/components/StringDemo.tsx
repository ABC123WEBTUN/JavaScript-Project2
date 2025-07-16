import React, { useState } from 'react';
import { reverseString, countCharacters, capitalizeWords } from '../utils/stringFunctions';

export function StringDemo() {
  const [inputString, setInputString] = useState('hello world');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">String Functions</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Input String:
        </label>
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a string..."
        />
      </div>

      <div className="space-y-3">
        <div className="p-3 bg-gray-50 rounded">
          <strong>Reverse String:</strong> "{reverseString(inputString)}"
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <strong>Character Count:</strong> {countCharacters(inputString)}
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <strong>Capitalize Words:</strong> "{capitalizeWords(inputString)}"
        </div>
      </div>
    </div>
  );
}