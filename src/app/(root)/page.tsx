import Card from '@/components/card';
import Pagination from '@/components/pagination';
import CardSkeleton from '@/components/skeletons/CardSkeleton';
import { Suspense } from 'react';
import { fetchTotalArticles } from '@/lib/data';
import { ITEMS_PER_PAGE } from '@/utils/itemsPerPage';

type Props = {
  searchParams: {
    search: string;
    page: string;
  };
};

export default async function Home({ searchParams: { page, search } }: Props) {
  const totalItems = fetchTotalArticles(search);
  return (
    <>
      <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white">
          Articles Explorer
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Discover insightful articles that delve into the latest trends, provide in-depth analysis,
          and offer practical advice to keep you informed and ahead of the curve.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <Suspense key={page + search} fallback={<CardSkeleton />}>
          <Card page={page} search={search} />
        </Suspense>
      </div>
      {(await totalItems) > ITEMS_PER_PAGE() && <Pagination totalItems={await totalItems} />}
    </>
  );
}
