"use client";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: string;
}

interface Conversation {
  id: string;
  name: string;
  profileeImage: string; // Utilisation de profileeImage
  messages: Message[];
}

type Client = {
  profileeImage: string; // Utilisation de profileeImage
};

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "1",
      name: "Fanta fofana",
      profileeImage: "/profil.jpg", // Utilisation de profileeImage
      messages: [
        {
          id: "1",
          text: "Bonjour, j'aimerai qu'on discute de la voiture que j'ai reservé",
          sender: "other",
          timestamp: "10:00 AM",
        },
        {
          id: "2",
          text: "Bonjour comment allez-vous?",
          sender: "user",
          timestamp: "10:05 AM",
        },
      ],
    },
    {
      id: "2",
      name: "Imran Toure",
      profileeImage: "/client.jpg", // Utilisation de profileeImage
      messages: [
        {
          id: "1",
          text: "Bonjour, j'aimerai qu'on discute de la voiture que j'ai reservé",
          sender: "other",
          timestamp: "11:00 AM",
        },
      ],
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [input, setInput] = useState("");

  const openConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSend = () => {
    if (!selectedConversation || input.trim() === "") return;

    const newMessage: Message = {
      id: `${Date.now()}`,
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === selectedConversation.id
          ? { ...conv, messages: [...conv.messages, newMessage] }
          : conv
      )
    );

    setInput("");
  };

  return (
    <div className="bg-gray-100 flex h-screen overflow-hidden font-titre mt-6">
      {/* Liste des conversations */}
      <div className="w-1/3 bg-white border-r border-gray-300 p-4 flex flex-col h-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Messages</h2>
        <ScrollArea className="flex-grow overflow-auto">
          <div className="space-y-4">
            {conversations.map((conversation) => {
              const lastMessage = conversation.messages[conversation.messages.length - 1];

              return (
                <div
                  key={conversation.id}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                    selectedConversation?.id === conversation.id ? "bg-orange-100" : "hover:bg-gray-100"
                  }`}
                  onClick={() => openConversation(conversation)}
                >
                  <img
                    src={conversation.profileeImage} // Utilisation de profileeImage ici
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-gray-900">{conversation.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{lastMessage?.text || "Aucun message"}</p>
                  </div>
                  <span className="text-xs text-gray-400">{lastMessage?.timestamp || ""}</span>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Zone de discussion */}
      <div className="w-2/3 flex flex-col h-full">
        {selectedConversation ? (
          <>
            {/* Header de la conversation */}
            <div className="bg-orange-500 text-white px-4 py-4 flex items-center shadow">
              <button
                onClick={() => setSelectedConversation(null)}
                className="text-white font-bold mr-4"
              >
                ← Retour
              </button>
              <img
                src={selectedConversation.profileeImage} // Utilisation de profileeImage ici
                alt={selectedConversation.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <h2 className="text-lg font-semibold">{selectedConversation.name}</h2>
            </div>

            {/* Liste des messages avec scroll indépendant */}
            <ScrollArea className="flex-grow overflow-auto p-4 space-y-4">
              {selectedConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                      message.sender === "user" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs text-gray-500 block mt-1 text-right">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </ScrollArea>

            {/* Zone de saisie */}
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
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Sélectionnez une conversation pour commencer à discuter.
          </div>
        )}
      </div>
    </div>
  );
}
