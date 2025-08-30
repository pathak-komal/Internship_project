import React from "react";

export default function LanguageSelector({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold mb-4">
        🌐 Choose Language / भाषा चुनें
      </h2>
      <div className="flex gap-4">
        <button
          onClick={() => onSelect("en")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          English
        </button>
        <button
          onClick={() => onSelect("hi")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg"
        >
          हिंदी
        </button>
      </div>
    </div>
  );
}
