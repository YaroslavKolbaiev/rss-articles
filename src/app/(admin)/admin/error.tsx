'use client';

type Props = {
  error: Error & { digest?: string };
  reset: () => void
};

export default function Error({ error, reset }: Props) {
  return (
    <div className="max-w-lg mx-auto p-4 bg-red-50 text-red-800 border border-red-300 shadow-md rounded-lg ">
      <h3 className=" text-lg font-medium mb-4">Error occured</h3>
      <p className=" text-sm font-normal mb-3">{error.message}</p>
      <button
        onClick={() => reset()}
        type="button"
        className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
        data-dismiss-target="#alert-additional-content-2"
        aria-label="Close"
      >
        Try Again
      </button>

    </div>
  );
}
