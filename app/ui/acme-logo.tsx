import Image from 'next/image'; // Importation du composant Image de Next.js
import { lusitana } from '@/app/ui/fonts'; // Importation des polices si nécessaire

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center justify-center leading-none bg-transparent`}
      style={{
        position: 'absolute', // Permet de placer l'image indépendamment des autres éléments
        top: '10px', // Distance depuis le haut de l'écran
       
      }}
    >
      {/* Utilisation du logo personnalisé */}
      <Image
          src="/blanc.jpg" // Remplacez par le chemin de l'image ou un lien dynamique
          alt="Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <span className="ml-2 text-lg font-semibold text-gray-800">
          Djitteye Auto 
        </span>
    </div>
  );
}
