import Link from 'next/link';
import { getSession } from '@/lib/auth';
import Search from './Search';
import LogOutButton from '../buttons/LogOutButton';
import AdminLinkButton from '../buttons/AdminLinkButton';

export default async function Header() {
  const { isLoggedIn, username } = await getSession();
  return (
    <header className="shadow-md">
      <nav className="h-16 bg-primary-600 px-4 lg:px-6 dark:bg-primary-800">
        <div className="flex h-full items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-white drop-shadow dark:text-gray-500"
          >
            Articles Explorer
          </Link>
          <Search />
          <div className="flex items-center lg:order-2">
            {isLoggedIn ? <LogOutButton username={username || ''} /> : <AdminLinkButton />}
          </div>
        </div>
      </nav>
    </header>
  );
}
