"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

const voitures = [
  { id: 1, nom: "Toyota Land cruiser", image: "/v8.png", date: "12 Jan 2025" },
  { id: 2, nom: "KIA EV6-2022", image: "/kia.png", date: "15 Jan 2025" },
  { id: 3, nom: "Mercedes gla", image: "/mercedesgla.jpg", date: "20 Jan 2025" },
  { id: 4, nom: "Mercedes gla", image: "/mercedesgla.jpg", date: "22 Jan 2025" },
  { id: 5, nom: "Toyota prado", image: "/toyota1.png", date: "25 Jan 2025" },
  { id: 6, nom: "Toyota Land cruiser", image: "/v8.png", date: "28 Jan 2025" },
];

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Utilisation de ?. pour éviter les erreurs si aucun fichier n'est sélectionné
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  

  return (
    <div className="p-6 font-titre mt-6">
      {!showForm ? (
        <>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-bold">Voitures Disponibles</h1>
            <Button 
              className="bg-[#FD6A00] text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-[#e65c00]"
              onClick={() => setShowForm(true)}
            >
              Ajouter une voiture
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {voitures.map((voiture) => (
              <div
                key={voiture.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={voiture.image}
                  alt={voiture.nom}
                  className="w-full h-100 object-cover rounded-md mb-3"
                />
                <h2 className="text-sm font-semibold mb-2">{voiture.nom}</h2>
                <p className="text-xs text-gray-500 mb-2">Ajouté le {voiture.date}</p>
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-col items-center cursor-pointer">
                    <Pencil className="text-[#FD6A00]" size={16} />
                    <span className="text-xs text-[#FD6A00]">Modifier</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <Trash className="text-[#FD6A00]" size={16} />
                    <span className="text-xs text-[#FD6A00]">Retirer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-lg font-bold mb-6 text-center">Ajouter une voiture</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Marque</label>
              <input type="text" className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-[#FD6A00]" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Modèle</label>
              <input type="text" className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-[#FD6A00]" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">État</label>
              <select className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-[#FD6A00] ">
                <option value="neuf bg-" className="">Neuf</option>
                <option value="occasion" className="">Occasion</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Capacité du réservoir</label>
              <input type="text" className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-[#FD6A00]" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Équipements</label>
              <textarea className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-[#FD6A00]" rows={3}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <input type="file" className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-[#FD6A00]" accept="image/*" onChange={handleImageChange} />
              {selectedImage && <img src={selectedImage} alt="Prévisualisation" className="mt-3 w-full h-40 object-cover rounded-md border shadow-md" />}
            </div>
            <div className="flex justify-between">
              <Button 
                className="bg-gray-500 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
                onClick={() => setShowForm(false)}
              >
                Annuler
              </Button>
              <Button className="bg-[#FD6A00] text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-[#e65c00]">Ajouter</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
