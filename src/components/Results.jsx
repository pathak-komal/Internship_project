import React from 'react';

export default function Results({ language, details, onReset }) {
  const labels = {
    en: {
      title: "Your Results",
      price: "Predicted Price",
      schemes: "Eligible Schemes",
      reset: "Start Over"
    },
    hi: {
      title: "आपके परिणाम",
      price: "अनुमानित मूल्य",
      schemes: "उपयुक्त योजनाएँ",
      reset: "फिर से शुरू करें"
    }
  };

  const t = labels[language];

  // Mock predicted price & schemes
  const mockPrice = "₹" + (2000 + Math.floor(Math.random() * 1000)) + " / quintal";
  const mockSchemes = [
    "PM-Kisan Samman Nidhi",
    "Soil Health Card Scheme",
    "Pradhan Mantri Fasal Bima Yojana"
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">{t.title}</h2>

        <p><strong>{t.price}:</strong> {mockPrice}</p>

        <div>
          <strong>{t.schemes}:</strong>
          <ul className="list-disc list-inside">
            {mockSchemes.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        <button 
          onClick={onReset}
          className="w-full py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 mt-4"
        >
          {t.reset}
        </button>
      </div>
    </div>
  );
}
