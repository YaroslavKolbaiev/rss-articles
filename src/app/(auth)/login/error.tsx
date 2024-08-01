'use client';

import Crosx from '@/components/icons/Crosx';
import Info from '@/components/icons/Info';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div
      id="alert-border-4"
      className="mb-4 flex items-center rounded-md bg-yellow-50 p-4 text-yellow-800 dark:border-yellow-800 dark:bg-gray-800 dark:text-yellow-300"
      role="alert"
    >
      <Info />
      <div className="ms-3 text-sm font-medium">
        {error.message}
        . Try again.
      </div>
      <button
        onClick={() => reset()}
        type="button"
        className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-50 p-1.5 text-yellow-500 hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-border-4"
        aria-label="Close"
      >
        <span className="sr-only">Dismiss</span>
        <Crosx />
      </button>
    </div>
  );
}
