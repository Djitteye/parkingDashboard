'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon,
  MapPinIcon, // Nouvelle icône pour Mon Parking
} from '@heroicons/react/24/outline'; // Import des icônes
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Factures', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Clients', href: '/dashboard/clients', icon: UserGroupIcon },
  // Utilisation de l'icône MapPin pour Mon Parking
  { name: 'Mon Parking', href: '/dashboard/parking', icon: MapPinIcon },
  { name: 'Messages', href: '/dashboard/messages', icon: ChatBubbleLeftIcon },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white-50 p-3 text-sm font-medium hover:bg-[#FD6A00] hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-[#FD6A00] text-white': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
