"use client";
import React from "react";
import Image from "next/image";
import { BellIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <div className="fixed top-0 left-64 right-0 flex items-center justify-between w-[calc(98%-200px)] bg-gray-50 px-4 md:px-6 h-16">
      {/* Barre de recherche (à gauche) */}
      <div className="flex items-center">
        <div className="relative w-64 md:w-96">
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 py-2 rounded-lg border border-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FD6A00] "
          />
        </div>
      </div>

      {/* Contenu droit : Notifications et photo de profil */}
      <div className="flex items-center space-x-4">
        {/* Icône de notification */}
        <button className="relative">
          <BellIcon className="w-6 h-6 text-gray-600 hover:text-black" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600"></span>
        </button>

        {/* Photo de profil cliquable */}
        <button
          onClick={() => console.log("Profil cliqué")}
          className="w-10 h-10 overflow-hidden rounded-full border border-gray-300 focus:outline-none"
        >
          <Image
            src="/monprofil.png" // Remplacez par le chemin de l'image ou un lien dynamique
            alt="Photo de profil"
            width={40}
            height={40}
            className="object-cover"
          />
        </button>
      </div>
    </div>
  );
}
