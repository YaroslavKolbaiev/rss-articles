'use client';

import Crosx from '@/components/icons/Crosx';
import Info from '@/components/icons/Info';

type Props = {
  error: Error & { digest?: string };
  reset: () => void
};

export default function Error({ error, reset }: Props) {
  return (
    <div
      id="alert-border-4"
      className="flex items-center p-4 mb-4 text-yellow-800 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800 rounded-md"
      role="alert"
    >
      <Info />
      <div className="ms-3 text-sm font-medium">
        {error.message}
        .
        {' '}
        Try again.
      </div>
      <button
        onClick={() => reset()}
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-border-4"
        aria-label="Close"
      >
        <span className="sr-only">Dismiss</span>
        <Crosx />
      </button>
    </div>
  );
}
