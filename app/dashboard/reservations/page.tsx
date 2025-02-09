"use client";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

interface Reservation {
  id: string;
  carModel: string;
  price: number;
  clientName: string;
  reservationDate: string;
  carImage: string;
}

const reservationsData: Reservation[] = [
  {
    id: "1",
    carModel: "Toyota Camry",
    price: 30000,
    clientName: "Fanta Fofana",
    reservationDate: "2025-01-28",
    carImage: "/rouge.jpg",
  },
  {
    id: "2",
    carModel: "BMW X5",
    price: 55000,
    clientName: "Imran Toure",
    reservationDate: "2025-01-25",
    carImage: "/toyota1.png",
  },
  {
    id: "3",
    carModel: "Honda Accord",
    price: 28000,
    clientName: "Moussa Keita",
    reservationDate: "2025-01-20",
    carImage: "/mercedesbenz.jpg",
  },
  {
    id: "4",
    carModel: "Mercedes Benz C-Class",
    price: 45000,
    clientName: "Aminata Diakite",
    reservationDate: "2025-01-15",
    carImage: "/mercedesgla.jpg",
  },
  {
    id: "5",
    carModel: "audi-q7",
    price: 65000,
    clientName: "Mohamed Sidibe",
    reservationDate: "2025-01-10",
    carImage: "/audi.jpeg",
  },
  {
    id: "6",
    carModel: "Ford Mustang",
    price: 40000,
    clientName: "Salimata Traore",
    reservationDate: "2025-01-05",
    carImage: "/kia.png",
  },
];

export default function Page() {
  const [reservations, setReservations] = useState(reservationsData);

  const handleRemove = (id: string) => {
    // Filtrer les réservations pour retirer celle avec l'id donné
    const updatedReservations = reservations.filter((reservation) => reservation.id !== id);
    setReservations(updatedReservations);
  };

  return (
    <div className="bg-gray-100 p-4 font-titre mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Voitures Réservées</h2>
      <div className="grid grid-cols-3 gap-4">
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="bg-white p-4 rounded-lg shadow-md overflow-hidden relative"
          >
            <img
              src={reservation.carImage}
              alt={reservation.carModel}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">{reservation.carModel}</h3>
              <p className="text-sm text-gray-500">Prix: FCFA{reservation.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500">Réservé par: {reservation.clientName}</p>
              <p className="text-sm text-gray-500">Date: {new Date(reservation.reservationDate).toLocaleDateString()}</p>
            </div>
            {/* Bouton Retirer */}
            <button
              onClick={() => handleRemove(reservation.id)}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
