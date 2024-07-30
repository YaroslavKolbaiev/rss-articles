'use client';

import useSearchHandler from '@/hooks/useSearchHanfler';
import { usePathname } from 'next/navigation';
import Magnifiger from '../icons/Magnifiger';

export default function Search() {
  const { handleSearch } = useSearchHandler();
  const path = usePathname();
  return (
    <form className={`relative flex max-w-72 grow items-center ${path !== '/' && 'hidden'}`}>
      <Magnifiger />
      <input
        onChange={handleSearch}
        type="search"
        name="default-search"
        id="default-search"
        className="w-full rounded-lg border bg-gray-50 py-2 pr-1 ps-10 text-sm text-gray-800 focus:outline-none"
        placeholder="Search Articles"
      />
    </form>
  );
}
