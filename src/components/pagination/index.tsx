'use client';

import getVisiblePages from '@/services/getVisiblePages';
import { ITEMS_PER_PAGE } from '@/utils/itemsPerPage';
import { useSearchParams } from 'next/navigation';
import PaginationLink from './PaginationLink';

type Props = {
  totalItems: number;
};

function Pagination({ totalItems }: Props) {
  const searchParams = useSearchParams();

  const page = searchParams.get('page') || '1';

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE());

  const pageNumbers = getVisiblePages(+page, totalPages);

  const prevPage = (+page - (+page > 1 ? 1 : 0)).toString();
  const nextPage = (+page + (+page < totalPages ? 1 : 0)).toString();

  return (
    <nav aria-label="Page navigation" className="mt-10 flex justify-center">
      <ul className="flex">
        <PaginationLink pageName="Previous" pageValue={prevPage} disableCondition={+page === 1} />
        {pageNumbers.map((pageNumber) => (
          <PaginationLink
            key={`id-${pageNumber}`}
            pageName={pageNumber.toString()}
            pageValue={pageNumber.toString()}
            disableCondition={pageNumber === +page}
          />
        ))}
        <PaginationLink
          pageName="Next"
          pageValue={nextPage}
          disableCondition={+page === totalPages}
        />
      </ul>
    </nav>
  );
}

export default Pagination;
