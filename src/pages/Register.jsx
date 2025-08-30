import React, { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ name: '', crop: '', state: '' })

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Farmer Registration</h1>
      <form className="mt-4 space-y-2">
        <input className="border p-2 w-full" placeholder="Name"
          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Crop"
          value={form.crop} onChange={e => setForm({ ...form, crop: e.target.value })} />
        <input className="border p-2 w-full" placeholder="State"
          value={form.state} onChange={e => setForm({ ...form, state: e.target.value })} />
        <button type="button" className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}