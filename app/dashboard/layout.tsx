import SideNav from '@/app/ui/dashboard/sidenav';
import Header from '@/app/ui/dashboard/header'; // Import du Header

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Barre latérale (à gauche) */}
      <div className="w-64 flex-none border-r border-gray-300">
        <SideNav />
      </div>

      {/* Zone principale */}
      <div className="flex flex-col flex-grow">
        {/* En-tête (au-dessus du contenu principal) */}
        <Header />

        {/* Contenu principal (ajout de padding-top) */}
        <div className="flex-grow overflow-y-auto w-full pt-10">
          {children}
        </div>
      </div>
    </div>
  );
}
