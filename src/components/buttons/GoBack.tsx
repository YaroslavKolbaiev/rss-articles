'use client';

import { useRouter } from 'next/navigation';

export default function GoBack() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-blue-600"
    >
      Go Back
    </button>
  );
}
