"use client";
import React from "react";

export default function AjouterVoiture() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Ajouter une nouvelle voiture</h1>
      {/* Formulaire ou autre contenu */}
      <form className="w-full max-w-md bg-gray-50 border border-gray-200 p-4 rounded-lg">
        <div className="mb-4">
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
            Nom de la voiture
          </label>
          <input
            type="text"
            id="nom"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white rounded-md text-sm font-medium"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
