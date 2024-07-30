import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function UseSearchHandler() {
  const { replace } = useRouter();
  const path = usePathname().split('/')[1];
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set('page', '1');
      params.set('search', e.target.value);
    } else {
      params.delete('search');
    }

    replace(`${path}?${params}`);
  }, 1000);

  return { handleSearch };
}
