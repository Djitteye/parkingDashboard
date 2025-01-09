"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa"; // Import des icônes

interface Car {
  id: string;
  image: string;
  name: string;
  state?: string; // Optionnel (exemple : "Disponible", "Réservée")
  price?: string; // Optionnel
  details?: string; // Optionnel
}

const initialCarsAvailable: Car[] = [
  { id: "1", image: "/rouge.jpg", name: "Voiture Rouge", state: "Disponible", price: "15,000 €" },
  { id: "2", image: "/kia.png", name: "Kia Sportage", state: "Disponible", price: "20,000 €" },
  { id: "3", image: "/toyota1.png", name: "Toyota Corolla", state: "Disponible", price: "18,500 €" },
  { id: "4", image: "/audi.jpeg", name: "Audi A4", state: "Disponible", price: "17,000 €" },
  { id: "5", image: "/mercedesgla.jpg", name: "Mercedes GLA", state: "Disponible", price: "19,000 €" },
];

const initialCarsReserved: Car[] = [
  { id: "1", image: "/audi.jpeg", name: "Audi A4", state: "Réservée", price: "17,000 €" },
  { id: "2", image: "/mercedesgla.jpg", name: "Mercedes GLA", state: "Réservée", price: "19,000 €" },
  { id: "3", image: "/v8.png", name: "Toyota Land Cruiser", state: "Réservée", price: "22,000 €" },
  { id: "4", image: "/kia.png", name: "Kia Sportage", state: "Réservée", price: "20,000 €" },
  { id: "5", image: "/toyota1.png", name: "Toyota Corolla", state: "Réservée", price: "18,500 €" },
];

export default function ParkingPage() {
  const [carsAvailable, setCarsAvailable] = useState<Car[]>(initialCarsAvailable);
  const [carsReserved, setCarsReserved] = useState<Car[]>(initialCarsReserved);
  const [visibleAvailableIndex, setVisibleAvailableIndex] = useState(0);
  const [visibleReservedIndex, setVisibleReservedIndex] = useState(0);
  const [showAddCarForm, setShowAddCarForm] = useState(false);
  const [newCar, setNewCar] = useState({
    name: "",
    state: "",
    image: "",
    price: "",
  });

  const handleNext = (type: string) => {
    if (type === "Disponibles") {
      setVisibleAvailableIndex((prev) => Math.min(prev + 1, carsAvailable.length - 3));
    } else {
      setVisibleReservedIndex((prev) => Math.min(prev + 1, carsReserved.length - 3));
    }
  };

  const handlePrev = (type: string) => {
    if (type === "Disponibles") {
      setVisibleAvailableIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setVisibleReservedIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleAddCar = () => {
    if (newCar.name && newCar.image && newCar.price) {
      const newCarData: Car = {
        id: String(Date.now()),
        image: newCar.image,
        name: newCar.name,
        state: "Disponible",
        price: newCar.price,
      };
      setCarsAvailable((prevCars) => [...prevCars, newCarData]);
      setNewCar({ name: "", state: "", image: "", price: "" });
      setShowAddCarForm(false);
      alert("La voiture a été ajoutée avec succès !"); // Confirmation utilisateur
    }
  };
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewCar((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col pt-10 w-full">
      <div className="flex-1 flex flex-col justify-start ml-0 mt-4 px-4 space-y-6 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 w-full">
          <h1 className="text-2xl font-bold">Mon Parking</h1>  
          <button
            onClick={() => setShowAddCarForm(!showAddCarForm)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaPlus className="mr-2" />
            Ajouter une voiture
          </button>
        </div>

        {/* Add Car Form */}
        {showAddCarForm && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <input
              type="text"
              placeholder="Nom"
              value={newCar.name}
              onChange={(e) => setNewCar((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
            />
            <select
              value={newCar.state}
              onChange={(e) => setNewCar((prev) => ({ ...prev, state: e.target.value }))}
              className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
            >
              <option value="">État</option>
              <option value="Neuf">Neuf</option>
              <option value="Occasion">Occasion</option>
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mb-4"
            />
            <input
              type="text"
              placeholder="Prix"
              value={newCar.price}
              onChange={(e) => setNewCar((prev) => ({ ...prev, price: e.target.value }))}
              className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleAddCar}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Ajouter
            </button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 w-full">
  {/* Available Cars */}
  <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4">
    <h2 className="text-xl font-semibold mb-4">Disponibles</h2>
    <div className="relative">
      <button
        onClick={() => handlePrev("Disponibles")}
        disabled={visibleAvailableIndex === 0}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2"
      >
        <FaArrowLeft />
      </button>
      <div className="flex space-x-4 overflow-hidden">
        {carsAvailable.slice(visibleAvailableIndex, visibleAvailableIndex + 3).map((car) => (
          <div
            key={car.id}
            className="min-w-[200px] border border-gray-300 rounded-lg p-3 shadow-sm bg-white"
          >
            <img
              src={car.image}
              alt="Car"
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <p className="text-lg font-bold text-gray-700">{car.name}</p>
            <p className="text-md text-gray-500">{car.state}</p>
            <p className="text-md text-gray-700">{car.price}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => handleNext("Disponibles")}
        disabled={visibleAvailableIndex + 3 >= carsAvailable.length}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2"
      >
        <FaArrowRight />
      </button>
    </div>
    <button
      onClick={() => console.log("Voir tout les voitures disponibles")}
      className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg"
    >
      Voir tout
    </button>
  </div>

  {/* Reserved Cars */}
  <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4">
    <h2 className="text-xl font-semibold mb-4">Réservées</h2>
    <div className="relative">
      <button
        onClick={() => handlePrev("Réservées")}
        disabled={visibleReservedIndex === 0}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2"
      >
        <FaArrowLeft />
      </button>
      <div className="flex space-x-4 overflow-hidden">
        {carsReserved.slice(visibleReservedIndex, visibleReservedIndex + 3).map((car) => (
          <div
            key={car.id}
            className="min-w-[200px] border border-gray-300 rounded-lg p-3 shadow-sm bg-white"
          >
            <img
              src={car.image}
              alt="Car"
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <p className="text-lg font-bold text-gray-700">{car.name}</p>
            <p className="text-md text-gray-500">{car.state}</p>
            <p className="text-md text-gray-700">{car.price}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => console.log("Voir tout les voitures réservées")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2"
      >
        <FaArrowRight />
      </button>
    </div>
    <button
      onClick={() => console.log("Voir tout les voitures réservées")}
      className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg"
    >
      Voir tout
    </button>
  </div>
</div>

      </div>
    </div>
  );
}
