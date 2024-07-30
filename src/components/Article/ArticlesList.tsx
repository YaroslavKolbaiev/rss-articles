import { fetchArticles } from '@/lib/data';
import Link from 'next/link';
import ApproveArticle from './ApproveArticle';

type Props = {
  page: string;
};

export default async function ArticlesList({ page }: Props) {
  const articles = await fetchArticles(page);
  return (
    <>
      {articles.map(({
        id, title, creator, approved,
      }) => (
        <li className="pb-3 sm:pb-4 flex flex-col lg:flex-row lg:items-center justify-between" key={id}>
          <Link className="hover:opacity-70 transition-opacity duration-150" href={`/${id}`}>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {creator}
            </p>
          </Link>
          <div className="flex gap-3 items-center">
            <ApproveArticle approved={approved} id={id} />
            <Link className="text-primary-500 hover:underline block lg:inline" href={`/admin/${id}`}>Edit Article</Link>
          </div>
        </li>
      ))}
    </>
  );
}
