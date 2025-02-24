import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-screen flex-col bg-white px-3 py-4 md:px-2 border-r border-gray-100 font-titre"> {/* Fond blanc avec bordure droite */}
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-15"
        href="/"
      >
        <AcmeLogo />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {/* Liens de navigation */}
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div>
        {/* Bouton de déconnexion */}
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium text-black hover:bg-[#FD6A00] hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6 text-black" /> {/* Icône noire */}
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
