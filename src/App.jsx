import React, { useState } from "react";
import "./i18n/i18n";
import LanguageSelector from "./components/LanguageSelector";
import FarmerForm from "./components/FarmerForm";
import Results from "./components/Results";

export default function App() {
  const [language, setLanguage] = useState(null);
  const [farmerDetails, setFarmerDetails] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mt-8 text-green-700 mb-6">
        🌱 Smart Agri Advisor
      </h1>

      {!language && <LanguageSelector onSelect={setLanguage} />}

      {language && !farmerDetails && (
        <FarmerForm language={language} onSubmit={setFarmerDetails} />
      )}

      {language && farmerDetails && (
        <Results
          language={language}
          farmerDetails={farmerDetails}
          onReset={() => {
            setLanguage(null);
            setFarmerDetails(null);
          }}
        />
      )}
    </div>
  );
}
