import DeleteArticleModal from '@/components/modal';
import { updateArticle } from '@/lib/actions';
import { fetchArticle } from '@/lib/data';

type Props = {
  params: {
    article: string;
  };
};

// SORRY. I WAS RUNNING OUT OF TIME. THIS COMPONENT IS NOT OPTIMISED.
// I WOULD HAVE CREATED A REUSABLE FORM INPUT COMPONENT AND USED IT HERE.

export default async function EditArticle({ params: { article } }: Props) {
  const {
    title, content, link, id,
  } = await fetchArticle(article);

  return (
    <>
      <form action={updateArticle} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
        <input type="hidden" name="id" value={id} />
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
            <input
              defaultValue={title}
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
              defaultValue={link}
              type="url"
              id="link"
              name="link"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
            Content
            <textarea
              defaultValue={content}
              id="content"
              name="content"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            />
          </label>

        </div>
      </form>
      <DeleteArticleModal />
    </>
  );
}
