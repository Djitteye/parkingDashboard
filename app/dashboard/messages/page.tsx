"use client"; // Indique que ce fichier est un composant côté client
import React, { useState } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour, comment puis-je vous aider aujourd'hui ?",
      sender: "other",
      timestamp: "10:00 AM",
    },
    {
      id: "2",
      text: "J'ai besoin d'informations sur vos services.",
      sender: "user",
      timestamp: "10:05 AM",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage: Message = {
      id: `${Date.now()}`,
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-orange-500 text-white px-4 py-4 flex justify-between items-center shadow">
        <h1 className="text-lg font-semibold">Messages</h1>
        <button className="bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
          Nouveau message
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                message.sender === "user"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <span className="text-xs text-gray-500 block mt-1 text-right">
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-gray-300">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez un message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
          />
          <button
            onClick={handleSend}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
