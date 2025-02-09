"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BellIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "achat", message: "Nouvelle demande d'achat pour BMW X5", time: "il y a 1 heure", read: false },
    { id: 2, type: "location", message: "Nouvelle demande de location pour Audi A4", time: "il y a 2 heures", read: false },
  ]);

  const markAllAsRead = () => {
    setNotifications([]);
  };

  const confirmNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="fixed top-0 left-64 right-0 flex items-center justify-between w-[calc(98%-200px)] bg-white shadow-md px-4 md:px-6 h-16 font-titre">
      <div className="flex items-center">
        <div className="relative w-64 md:w-96">
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 py-2 rounded-lg border border-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FD6A00]"
          />
        </div>
      </div>

      <div className="relative flex items-center space-x-4">
        <button onClick={() => setShowNotifications(!showNotifications)} className="relative">
          <BellIcon className="w-6 h-6 text-gray-600 hover:text-black" />
          {notifications.length > 0 && <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600"></span>}
        </button>

        {showNotifications && (
          <div className="absolute top-12 right-0 w-80 bg-white shadow-lg rounded-lg z-50 p-4 border border-gray-200">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Notifications</CardTitle>
                <CardDescription>Vous avez {notifications.length} messages non lus.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Notifications push</p>
                  <Switch />
                </div>
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div key={notification.id} className="mb-2 p-2 border-b border-gray-200 flex flex-col">
                      <span className="text-sm font-medium">{notification.message}</span>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                      <button 
                        onClick={() => confirmNotification(notification.id)} 
                        className="mt-2 px-3 py-1 text-white bg-[#FD6A00] rounded-md text-sm font-medium">
                        Confirmer
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">Aucune notification</p>
                )}
              </CardContent>
              {notifications.length > 0 && (
                <CardFooter>
                  <button onClick={markAllAsRead} className="w-full py-2 text-center text-white bg-black rounded-md text-sm font-medium">✓ Marquer tout comme lu</button>
                </CardFooter>
              )}
            </Card>
          </div>
        )}

        <button onClick={() => console.log("Profil cliqué")} className="w-10 h-10 overflow-hidden rounded-full border border-gray-300 focus:outline-none">
          <Image src="/monprofil.png" alt="Photo de profil" width={40} height={40} className="object-cover" />
        </button>
      </div>
    </div>
  );
}
