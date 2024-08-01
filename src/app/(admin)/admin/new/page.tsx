import SubmitButton from '@/components/buttons/SubmitButton';
import FormInput from '@/components/Form/FormInput';
import { createArticle } from '@/lib/actions';

export default async function NewArticle() {
  return (
    <form action={createArticle} className="mx-auto max-w-lg rounded-lg bg-white p-4 shadow-md">
      <FormInput label="Title" name="title" type="text" defaultValue="" />
      <FormInput label="Link" name="link" type="text" defaultValue="" />
      <div className="mb-4">
        <label htmlFor="pubDate" className="mb-2 block font-bold text-gray-700">
          Publication Date
          <input
            type="date"
            id="pubDate"
            name="pubDate"
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
      </div>
      <FormInput label="Content" name="content" type="textarea" defaultValue="" />
      <SubmitButton />
    </form>
  );
}
