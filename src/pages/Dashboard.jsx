import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
  { month: 'Jan', price: 50 },
  { month: 'Feb', price: 55 },
  { month: 'Mar', price: 52 },
  { month: 'Apr', price: 60 },
  { month: 'May', price: 58 },
]

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Farmer Dashboard</h1>
      <p className="mt-2">Example crop price trend</p>
      <LineChart width={400} height={250} data={data}>
        <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  )
}