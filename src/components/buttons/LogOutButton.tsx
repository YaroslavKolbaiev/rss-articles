import { logout } from '@/lib/auth';
import Link from 'next/link';
import LogOutIcon from '../icons/LogOutIcon';

type Props = {
  username: string;
};

export default function LogOutButton({ username }: Props) {
  return (
    <form className="flex gap-4" action={logout}>
      <Link
        href="/admin"
        className="text-white drop-shadow-md hidden lg:inline hover:underline"
      >
        {username}
      </Link>
      <button
        type="submit"
        className="hover:scale-110 transition-transform duration-150"
        aria-label="Log Out"
      >
        <LogOutIcon />
      </button>
    </form>
  );
}
