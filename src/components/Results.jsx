import React from "react";
import { Gift, IndianRupee, MapPin } from "lucide-react";

const mockPrice = "₹ 1500 / quintal";
const schemes = [
  { en: "PM-Kisan Yojana", hi: "प्रधानमंत्री किसान योजना" },
  { en: "Soil Health Card", hi: "मृदा स्वास्थ्य कार्ड योजना" },
];

export default function Results({ language, farmerDetails, onReset }) {
  if (!farmerDetails) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto mt-4 space-y-4">
      <h2 className="text-xl font-bold mb-2">
        {language === "en" ? "Results" : "परिणाम"}
      </h2>

      <div className="space-y-2">
        <h3 className="font-semibold">
          {language === "en" ? "Farmer Details" : "किसान विवरण"}
        </h3>
        {Object.entries(farmerDetails).map(([key, value]) => (
          <p key={key} className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>

      <p className="flex items-center gap-2">
        <IndianRupee className="w-4 h-4 text-green-600" />
        <strong>
          {language === "en" ? "Predicted Price:" : "अनुमानित मूल्य:"}
        </strong>{" "}
        {mockPrice}
      </p>

      <div>
        <h3 className="font-semibold">
          {language === "en" ? "Applicable Schemes" : "लागू योजनाएँ"}
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          {schemes.map((s, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-green-600" />
              {s[language]}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onReset}
        className="mt-4 w-full py-2 bg-green-600 text-white rounded-lg"
      >
        {language === "en" ? "Start Over" : "फिर से शुरू करें"}
      </button>
    </div>
  );
}
