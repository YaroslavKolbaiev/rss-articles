import { logout } from '@/lib/auth';
import Link from 'next/link';
import LogOutIcon from '../icons/LogOutIcon';

type Props = {
  username: string;
};

export default function LogOutButton({ username }: Props) {
  return (
    <form className="flex gap-4" action={logout}>
      <Link href="/admin" className="hidden text-white drop-shadow-md hover:underline lg:inline">
        {username}
      </Link>
      <button
        type="submit"
        className="transition-transform duration-150 hover:scale-110"
        aria-label="Log Out"
      >
        <LogOutIcon />
      </button>
    </form>
  );
}
