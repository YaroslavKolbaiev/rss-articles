'use client';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className="mx-auto max-w-lg rounded-lg border border-red-300 bg-red-50 p-4 text-red-800 shadow-md">
      <h3 className="mb-4 text-lg font-medium">Error occured</h3>
      <p className="mb-3 text-sm font-normal">{error.message}</p>
      <button
        onClick={() => reset()}
        type="button"
        className="rounded-lg border border-red-800 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-red-800 hover:bg-red-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-600 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-800"
        data-dismiss-target="#alert-additional-content-2"
        aria-label="Close"
      >
        Try Again
      </button>
    </div>
  );
}
