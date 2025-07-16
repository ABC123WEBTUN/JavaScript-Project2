import React, { useState } from 'react';
import { findMaximum, findMinimum, sumArray, filterArray } from '../utils/arrayFunctions';

export function ArrayDemo() {
  const [numbers, setNumbers] = useState([1, 5, 3, 9, 2, 8, 4]);
  const [numberInput, setNumberInput] = useState('');
  const [filterCondition, setFilterCondition] = useState('greater than 5');

  const addNumber = () => {
    const num = parseInt(numberInput);
    if (!isNaN(num)) {
      setNumbers([...numbers, num]);
      setNumberInput('');
    }
  };

  const getFilteredArray = () => {
    switch (filterCondition) {
      case 'greater than 5':
        return filterArray(numbers, (n) => n > 5);
      case 'even numbers':
        return filterArray(numbers, (n) => n % 2 === 0);
      case 'less than 10':
        return filterArray(numbers, (n) => n < 10);
      default:
        return numbers;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Array Functions</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Array: [{numbers.join(', ')}]
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Add a number..."
          />
          <button
            onClick={addNumber}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-3 bg-gray-50 rounded">
          <strong>Maximum:</strong> {numbers.length > 0 ? findMaximum(numbers) : 'N/A'}
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <strong>Minimum:</strong> {numbers.length > 0 ? findMinimum(numbers) : 'N/A'}
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <strong>Sum:</strong> {sumArray(numbers)}
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <div className="mb-2">
            <strong>Filter Array:</strong>
            <select
              value={filterCondition}
              onChange={(e) => setFilterCondition(e.target.value)}
              className="ml-2 px-2 py-1 border border-gray-300 rounded"
            >
              <option value="greater than 5">Greater than 5</option>
              <option value="even numbers">Even numbers</option>
              <option value="less than 10">Less than 10</option>
            </select>
          </div>
          <div>Result: [{getFilteredArray().join(', ')}]</div>
        </div>
      </div>
    </div>
  );
}