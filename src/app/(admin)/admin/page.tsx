import ArticlesList from '@/components/Article/ArticlesList';
import Pagination from '@/components/pagination';
import AdminArticlesSkeleton from '@/components/skeletons/AdminArticlesSkeleton';
import { fetchTotalArticles } from '@/lib/data';
import { ITEMS_PER_PAGE } from '@/utils/itemsPerPage';
import { Suspense } from 'react';

type Props = {
  searchParams: {
    page: string;
  };
};

export default async function AdminPage({ searchParams: { page } }: Props) {
  const totalItems = fetchTotalArticles();
  return (
    <>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <Suspense key={page} fallback={<AdminArticlesSkeleton />}>
          <ArticlesList page={page} />
        </Suspense>
      </ul>
      {(await totalItems) > ITEMS_PER_PAGE() && <Pagination totalItems={await totalItems} />}
    </>
  );
}
