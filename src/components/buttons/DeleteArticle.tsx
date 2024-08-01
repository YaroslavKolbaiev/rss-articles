import { useFormStatus } from 'react-dom';

export default function DeleteArticle() {
  const { pending } = useFormStatus();
  return (
    <button
      className="w-40 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? 'Deleting...' : 'Confirm Deleter'}
    </button>
  );
}
