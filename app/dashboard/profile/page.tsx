"use client"; 
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Ajouter des icônes

// Définir un type pour le client
type Client = {
  id: string;
  username: string;  // Changer de firstName et lastName à username
  email: string;
  phone: string;
  city: string;
  profileImage: string;
};

const clients: Client[] = [
  {
    id: '1',
    username: 'keita business auto',  // Un seul champ pour le nom
    email: 'keitaauto@example.com',
    phone: '+22391262753',
    city: 'Bamako',
    profileImage: '/monprofil.png',
  },
  // Ajoutez d'autres clients ici
];

export default function ProfilePage() {
  const [client, setClient] = useState<Client>(clients[0]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Logic to save changes (e.g., update Firestore or backend)
    console.log('Profile updated:', client);
  };

  return (
    <div className="bg-gray-50 p-4 min-h-screen flex flex-col items-center font-titre">
      {/* Section photo de profil et nom */}
      <div className="text-center mb-8">
        <img
          src={client.profileImage}
          alt={client.username}  // Utilisation de username
          className="w-32 h-32 rounded-full object-cover mx-auto mb-2"
        />
        <h1 className="text-xl font-bold">{client.username}</h1>  {/* Affichage du nom d'utilisateur */}
      </div>

      {/* Container avec informations client à gauche */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <h3 className="text-sm text-gray-500">Email</h3>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                name="email"
                value={client.email}
                onChange={handleInputChange}
                className="text-sm font-semibold w-full"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm text-gray-500">Téléphone</h3>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-500" />
              <input
                type="text"
                name="phone"
                value={client.phone}
                onChange={handleInputChange}
                className="text-sm font-semibold w-full"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm text-gray-500">Ville</h3>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <input
                type="text"
                name="city"
                value={client.city}
                onChange={handleInputChange}
                className="text-sm font-semibold w-full"
              />
            </div>
          </div>
        </div>

        {/* Button to save changes */}
        <div className="text-center mt-6">
          <button
            onClick={handleSaveChanges}
            className="bg-[#FD6A00] text-white py-2 px-4 rounded-lg"
          >
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
}
