import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import FarmerForm from './components/FarmerForm';
import Results from './components/Results';

function App() {
  const [language, setLanguage] = useState(null);
  const [details, setDetails] = useState(null);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
  };

  const handleFormSubmit = (formData) => {
    setDetails(formData);
  };

  const handleReset = () => {
    setLanguage(null);
    setDetails(null);
  };

  if (!language) {
    return <LanguageSelector onSelect={handleLanguageSelect} />;
  }

  if (!details) {
    return <FarmerForm language={language} onSubmit={handleFormSubmit} />;
  }

  return <Results language={language} details={details} onReset={handleReset} />;
}

export default App;
