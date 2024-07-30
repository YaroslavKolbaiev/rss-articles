import SubmitButton from '@/components/buttons/SubmitButton';
import FormInput from '@/components/Form/FormInput';
import { createArticle } from '@/lib/actions';

export default async function NewArticle() {
  return (
    <form action={createArticle} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <FormInput label="Title" name="title" type="text" defaultValue="" />
      <FormInput label="Link" name="link" type="text" defaultValue="" />
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
      <FormInput label="Content" name="content" type="textarea" defaultValue="" />
      <SubmitButton />
    </form>
  );
}
