import React from 'react';

// Définir un type pour le client
type Client = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profileImage: string;
};

const clients: Client[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    profileImage: '/client.jpg',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+0987654321',
    profileImage: '/client.jpg',
  },
  {
    id: '3',
    firstName: 'George',
    lastName: 'Brown',
    email: 'george.brown@example.com',
    phone: '+1122334455',
    profileImage: '/client.jpg',
  },
  {
    id: '4',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    phone: '+2233445566',
    profileImage: '/client.jpg',
  },
  {
    id: '5',
    firstName: 'Bob',
    lastName: 'Martin',
    email: 'bob.martin@example.com',
    phone: '+3344556677',
    profileImage: '/client.jpg',
  },
  {
    id: '6',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    phone: '+4455667788',
    profileImage: '/client.jpg',
  },
  {
    id: '7',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    profileImage: '/client.jpg',
  },
  {
    id: '8',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+0987654321',
    profileImage: '/client.jpg',
  },
  {
    id: '9',
    firstName: 'George',
    lastName: 'Brown',
    email: 'george.brown@example.com',
    phone: '+1122334455',
    profileImage: '/client.jpg',
  },
  {
    id: '10',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    phone: '+2233445566',
    profileImage: '/client.jpg',
  },
  {
    id: '11',
    firstName: 'Bob',
    lastName: 'Martin',
    email: 'bob.martin@example.com',
    phone: '+3344556677',
    profileImage: '/client.jpg',
  },
  {
    id: '12',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    phone: '+4455667788',
    profileImage: '/client.jpg',
  },
  {
    id: '13',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    profileImage: '/client.jpg',
  },
  {
    id: '14',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+0987654321',
    profileImage: '/client.jpg',
  },
  {
    id: '15',
    firstName: 'George',
    lastName: 'Brown',
    email: 'george.brown@example.com',
    phone: '+1122334455',
    profileImage: '/client.jpg',
  },
  {
    id: '16',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    phone: '+2233445566',
    profileImage: '/client.jpg',
  },
  {
    id: '17',
    firstName: 'Bob',
    lastName: 'Martin',
    email: 'bob.martin@example.com',
    phone: '+3344556677',
    profileImage: '/client.jpg',
  },
  {
    id: '18',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    phone: '+4455667788',
    profileImage: '/client.jpg',
  },
];

export default function Page() {
  return (
    <div className="bg-gray-50 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-4">Liste des clients</h1>

      {/* Container avec fond blanc */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Affichage des clients */}
        {clients.map((client, index) => (
          <div key={client.id}>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={client.profileImage}
                alt={`${client.firstName} ${client.lastName}`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                {/* Informations du client alignées horizontalement */}
                <div className="flex space-x-6">
                  <div className="flex-1">
                    <h3 className="text-sm text-gray-500">Nom</h3>
                    <p className="text-sm font-semibold">{client.firstName} {client.lastName}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm text-gray-500">Email</h3>
                    <p className="text-sm font-semibold">{client.email}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm text-gray-500">Téléphone</h3>
                    <p className="text-sm font-semibold">{client.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Ligne horizontale de séparation */}
            {index < clients.length - 1 && <hr className="border-t border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
}
