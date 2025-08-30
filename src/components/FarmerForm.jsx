import React, { useState } from "react";

export default function FarmerForm({ language, onSubmit }) {
  const [form, setForm] = useState({
    state: "",
    district: "",
    region: "",
    farmSize: "",
    crop: "",
  });

  const labels = {
    en: {
      state: "State",
      district: "District",
      region: "Region/Village",
      farmSize: "Farm Size (acres)",
      crop: "Crop",
      submit: "Submit",
    },
    hi: {
      state: "राज्य",
      district: "जिला",
      region: "क्षेत्र/गाँव",
      farmSize: "खेती का आकार (एकड़)",
      crop: "फसल",
      submit: "सबमिट करें",
    },
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
      {Object.keys(form).map((key) => (
        <div className="mb-4" key={key}>
          <label className="block mb-1 font-medium">
            {labels[language][key]}
          </label>
          <input
            type="text"
            name={key}
            value={form[key]}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>
      ))}
      <button
        onClick={() => onSubmit(form)}
        className="w-full py-2 bg-green-600 text-white rounded-lg"
      >
        {labels[language].submit}
      </button>
    </div>
  );
}
