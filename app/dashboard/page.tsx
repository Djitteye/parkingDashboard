"use client"; // Indique que ce fichier est un composant côté client

import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
  Title,
  ArcElement,
} from "chart.js";
import { FaCar, FaStar, FaDollarSign, FaClipboardList, FaCarSide } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
  Title,
  ArcElement
);

export default function Page() {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Ventes",
        data: [10, 20, 30, 40, 50, 60],
        backgroundColor: "rgba(253, 106, 0, 0.2)",  // Couleur orange sous la ligne
        borderColor: "#FD6A00",  // Couleur de la ligne
        borderWidth: 2,
        fill: true,  // Active le remplissage sous la ligne
        tension: 0.4,  // Option pour ajuster la courbure de la ligne
      },
    ],
  };

  // Nouveau graphique de courbe pour les locations
  const lineRentalData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Locations",
        data: [15, 30, 20, 25, 40, 60],
        backgroundColor: "rgba(253, 106, 0, 0.2)", // Remplissage sous la courbe
        borderColor: "#FD6A00", // Couleur de la courbe
        borderWidth: 2,
        tension: 0.4, // Courbure de la ligne
        fill: true, // Remplir l'espace sous la courbe
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Profits",
        data: [10, 20, 30, 40, 50, 60],
        backgroundColor: "#FD6A00",
        borderColor: "#FD6A00",
        borderWidth: 2,
      },
    ],
  };

  // Top des Marques en Vente avec largeur réduite
  const salesByBrandData = {
    labels: ["Marque A", "Marque B", "Marque C", "Marque D"],
    datasets: [
      {
        label: "Top des Marques en Vente",
        data: [50, 30, 15, 5], // Nombre de ventes par marque
        backgroundColor: "#FD6A00", // Couleur des barres
        borderColor: "#FD6A00", // Bordure des barres
        borderWidth: 1,
        barThickness: 10, // Réduction de la largeur des barres
      },
    ],
  };

  // Top des Marques en Location avec largeur réduite
  const rentalsByBrandData = {
    labels: ["Marque A", "Marque B", "Marque C", "Marque D"],
    datasets: [
      {
        label: "Top des Marques en Location",
        data: [60, 40, 30, 10], // Nombre de locations par marque
        backgroundColor: "#FFA500", // Couleur des barres
        borderColor: "#FFA500", // Bordure des barres
        borderWidth: 1,
        barThickness: 10, // Réduction de la largeur des barres
      },
    ],
  };

  const stats = [
    { label: "Voitures Vendues", value: 450, icon: <FaCar />, onClick: () => alert("Détail des ventes") },
    { label: "Voitures Louées", value: 320, icon: <FaCarSide />, onClick: () => alert("Détail des locations") },
    { label: "Avis Parking", value: 120, icon: <FaStar />, onClick: () => alert("Voir les avis") },
    { label: "Revenu Actuel", value: "$12,300", icon: <FaDollarSign />, onClick: () => alert("Détail des revenus") },
    { label: "Réservations en cours", value: 25, icon: <FaClipboardList />, onClick: () => alert("Détail des réservations") },
    { label: "Voitures Disponibles", value: 200, icon: <FaCar />, onClick: () => alert("Détail des voitures disponibles") },
  ];

  return (
    <div className="bg-gray-50 p-6 pt-10">
      {/* Statistiques en haut */}
      <div className="flex flex-wrap gap-4 justify-between mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            onClick={stat.onClick}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md flex-[1_1_15%] cursor-pointer hover:bg-gray-100"
          >
            <div className="flex items-center">
              <div className="text-2xl text-[#FD6A00] mr-3">{stat.icon}</div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Graphiques */}
      <div className="flex gap-4">
        {/* Line Chart pour les ventes avec fond orange */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-[1_1_30%]">
          <h2 className="text-lg mb-2 font-bold">Ventes (en nombre)</h2>
          <Line data={lineData} />
        </div>

        {/* Courbe pour les locations */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-[1_1_30%]">
          <h2 className="text-lg mb-2 font-bold">Locations (en nombre)</h2>
          <Line data={lineRentalData} />
        </div>

        {/* Graphique de barres verticales avec largeur réduite pour les ventes par marque */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-[1_1_30%]">
          <h2 className="text-lg mb-2 font-bold">Top des Marques en Vente</h2>
          <Bar
            data={salesByBrandData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return context.dataset.label + ": " + context.raw + " ventes";
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        {/* Graphique de barres verticales avec largeur réduite pour les locations par marque */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-[1_1_30%]">
          <h2 className="text-lg mb-2 font-bold">Top des Marques en Location</h2>
          <Bar
            data={rentalsByBrandData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return context.dataset.label + ": " + context.raw + " locations";
                    },
                  },
                },
              },
            }}
          />
        </div>

        {/* Bar Chart pour les profits */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-[1_1_30%]">
          <h2 className="text-lg mb-2 font-bold">Profits mensuels(en millions de Fcfa)</h2>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}
