import React, { useState } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Ask me about crops, prices, or schemes.' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input) return
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: 'This is a demo answer.' }])
    setInput('')
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Chat Assistant</h1>
      <div className="border p-4 h-64 overflow-y-auto bg-white mt-2">
        {messages.map((m, i) => (
          <div key={i} className={m.sender === 'bot' ? 'text-green-600' : 'text-gray-800'}>{m.sender}: {m.text}</div>
        ))}
      </div>
      <div className="flex mt-2">
        <input className="border p-2 flex-grow" value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={sendMessage} className="bg-green-600 text-white px-4 py-2">Send</button>
      </div>
    </div>
  )
}