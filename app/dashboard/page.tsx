"use client"; // Indique que ce fichier est un composant côté client
  
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, Area, AreaChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent  } from "@/components/ui/chart"






import React from "react";

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

  const chartData = [
    { month: "January", vente: 150, location: 100 },
    { month: "February", vente: 175, location: 162 },
    { month: "March", vente: 157, location: 110 },
    { month: "April", vente: 200, location: 180 },
    { month: "May", vente: 199, location: 250 },
    { month: "June", vente: 275, location: 100 },
  ]

  const chartData2 = [
    { month: "January", profit: 186 },
    { month: "February", profit: 305 },
    { month: "March", profit: 237 },
    { month: "April", profit: 73 },
    { month: "May", profit: 209 },
    { month: "June", profit: 214 },
  ]
 
  const chartConfig = {
    vente: {
      label: "Vente",
      color: "#FD6A00",
    },
    location: {
      label: "Location",
      color: "#A1541C",
    },
    profit: {
      label: "Profit",
      color: "#A1541C",
    },
  } satisfies ChartConfig
  






  

  const stats = [

    { label: "Réservations en cours", value: 5, icon: <FaClipboardList />, onClick: () => alert("Détail des réservations") },
    { label: "Voitures Disponibles", value: 90, icon: <FaCar />, onClick: () => alert("Détail des voitures disponibles") },
    { label: "Revenu Actuel", value: "850 Millions", icon: <FaDollarSign />, onClick: () => alert("Détail des revenus") },
  ];

  return (
    <div className="bg-gray-50 p-6 pt-10 font-titre ">
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
        {/* graphique pour les ventes et locations */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-[1_1_30%]">
        <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold mb-4">Nombre de voiture vendues et louées</CardTitle>
        <CardDescription>Nombre de vente et loue sur les 6 derniers mois</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="vente" fill="var(--color-vente)" radius={4} />
            <Bar dataKey="location" fill="var(--color-location)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
     
    </Card>

        </div>

       

        {/* Graphique pour le profit */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-[1_1_30%] " >
        <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold mb-4">Profit </CardTitle>
        <CardDescription>
         Le revenu généré sur les 6 derniers mois en millions de FCFA
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData2}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="profit"
              type="natural"
              fill="var(--color-profit)"
              fillOpacity={0.4}
              stroke="var(--color-profit)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
        
      
        </div>
      </div>

     
    </div>
  );
}
