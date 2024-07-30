import SubmitButton from '@/components/buttons/SubmitButton';
import { createArticle } from '@/lib/actions';

// SORRY. I WAS RUNNING OUT OF TIME. THIS COMPONENT IS NOT OPTIMISED.
// I WOULD HAVE CREATED A REUSABLE FORM INPUT COMPONENT AND USED IT HERE.

export default async function NewArticle() {
  return (
    <form action={createArticle} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="link" className="block text-gray-700 font-bold mb-2">
          Link
          <input
            type="url"
            id="link"
            name="link"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="pubDate" className="block text-gray-700 font-bold mb-2">
          Publication Date
          <input
            type="date"
            id="pubDate"
            name="pubDate"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content
          <textarea
            id="content"
            name="content"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            required
          />
        </label>

      </div>
      <SubmitButton />
    </form>
  );
}
