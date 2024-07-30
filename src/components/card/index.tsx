import Link from 'next/link';
import formattedDate from '@/services/convertDate';
import { fetchArticles } from '@/lib/data';
// import wait from '@/utils/wait';
import TrimText from './TrimText';
import ArrowRight from '../icons/ArrowRight';

type Props = {
  page: string;
  search: string;
};

async function Card({ page, search }: Props) {
  // await wait(4000);
  const articles = await fetchArticles(page, search);
  return (
    <>
      {articles.map(({
        id, creator, content, pubDate, title,
      }) => (
        <article
          key={id}
          className="flex flex-col rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700"
        >
          <p className="mb-3 text-right text-sm text-gray-500">{formattedDate(pubDate)}</p>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-5 grow font-light text-gray-500 dark:text-gray-400">
            <TrimText text={content} />
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-bold">Author: </span>
              <span className="font-medium dark:text-white">{creator}</span>
            </div>
            <Link
              href={`/${id}`}
              className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Read more
              <ArrowRight />
            </Link>
          </div>
        </article>
      ))}
    </>
  );
}

export default Card;
