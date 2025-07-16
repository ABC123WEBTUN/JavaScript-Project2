import React from 'react';
import { StringDemo } from './components/StringDemo';
import { ArrayDemo } from './components/ArrayDemo';
import { MathDemo } from './components/MathDemo';
import { Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="text-blue-600" size={32} />
            <h1 className="text-4xl font-bold text-gray-800">JavaScript Functions Showcase</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Interactive demonstrations of string manipulation, array operations, and mathematical functions
          </p>
        </header>

        <div className="space-y-8">
          <StringDemo />
          <ArrayDemo />
          <MathDemo />
        </div>

        <footer className="text-center mt-12 text-gray-500">
          <p>All functions are implemented with proper error handling and TypeScript support</p>
        </footer>
      </div>
    </div>
  );
}

export default App;