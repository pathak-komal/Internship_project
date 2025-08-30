import React, { useState } from 'react';

export default function FarmerForm({ language, onSubmit }) {
  const [form, setForm] = useState({
    state: '',
    district: '',
    region: '',
    farmSize: '',
    crop: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const labels = {
    en: {
      title: "Enter Farm Details",
      state: "State",
      district: "District",
      region: "Region/Village",
      farmSize: "Farm Size (acres/hectares)",
      crop: "Crop",
      submit: "Get Results"
    },
    hi: {
      title: "खेती की जानकारी भरें",
      state: "राज्य",
      district: "जिला",
      region: "क्षेत्र/गाँव",
      farmSize: "खेती का आकार (एकड़/हेक्टेयर)",
      crop: "फसल",
      submit: "परिणाम देखें"
    }
  };

  const t = labels[language];

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <form 
        className="bg-white p-6 rounded-2xl shadow w-full max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">{t.title}</h2>

        <input type="text" name="state" placeholder={t.state} value={form.state} onChange={handleChange} className="w-full p-2 border rounded-xl" required />
        <input type="text" name="district" placeholder={t.district} value={form.district} onChange={handleChange} className="w-full p-2 border rounded-xl" required />
        <input type="text" name="region" placeholder={t.region} value={form.region} onChange={handleChange} className="w-full p-2 border rounded-xl" />
        <input type="text" name="farmSize" placeholder={t.farmSize} value={form.farmSize} onChange={handleChange} className="w-full p-2 border rounded-xl" required />
        <input type="text" name="crop" placeholder={t.crop} value={form.crop} onChange={handleChange} className="w-full p-2 border rounded-xl" required />

        <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700">
          {t.submit}
        </button>
      </form>
    </div>
  );
}
