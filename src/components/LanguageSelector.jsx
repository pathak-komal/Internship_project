import React from 'react';

export default function LanguageSelector({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h1 className="text-2xl font-bold mb-6">Choose Language / भाषा चुनें</h1>
      <div className="flex gap-4">
        <button 
          className="px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
          onClick={() => onSelect('en')}
        >
          English
        </button>
        <button 
          className="px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
          onClick={() => onSelect('hi')}
        >
          हिंदी
        </button>
      </div>
    </div>
  );
}
