"use client";
import React from 'react';

// Dummy data (the same as in the Parking page)
const availableCars = [
  { id: 1, name: 'Kia Sportage', price: '10,000 €', image: '/kia.png' },
  { id: 2, name: 'Mercedes Benz', price: '12,000 €', image: '/mercedesbenz.jpg' },
  { id: 3, name: 'Toyota Prius', price: '14,500 €', image: '/toyota1.png' },
  // Add more cars if needed
];

export default function AvailableCarsPage() {
  return (
    <div className="bg-gray-50 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-4 text-center">Toutes les Voitures Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableCars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg p-4 shadow">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{car.name}</h2>
            <p className="text-sm text-gray-600">{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
67890-55