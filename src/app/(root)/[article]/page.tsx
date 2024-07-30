import GoBack from '@/components/buttons/GoBack';
import { fetchArticle } from '@/lib/data';
import formattedDate from '@/services/convertDate';

type Props = {
  params: {
    article: string;
  };
};

export async function generateMetadata({ params: { article } }: Props) {
  const { title } = await fetchArticle(article);

  return {
    title: `Read article about ${title}`,
  };
}

export default async function Article({ params: { article } }: Props) {
  const {
    title, creator, content, pubDate, link,
  } = await fetchArticle(article);

  return (
    <section>
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">{title}</h2>
        <p className="mb-3 text-base font-bold text-gray-500 dark:text-gray-400">
          {`Published by ${creator} on ${formattedDate(pubDate)}`}
          <a className="ml-3 text-blue-700 hover:underline" href={link}>
            Visit Link
          </a>
        </p>
        <p className="mb-2">{content}</p>
      </div>
      <GoBack />
    </section>
  );
}
