import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import classes from './Pagination.module.css';

type Props = {
  pageName: string;
  pageValue: string;
  disableCondition: boolean;
};

enum PageType {
  PREVIOUS = 'Previous',
  NEXT = 'Next',
  DOTS = '...',
}

function PaginationLink({ pageName, pageValue, disableCondition }: Props) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get('search') || '';

  switch (pageName) {
    case PageType.NEXT:
      return (
        <Link
          scroll={false}
          className={`${classes.paginationLink} w-28 rounded-r-lg py-2 ${disableCondition && 'cursor-not-allowed'} `}
          href={{
            pathname: pathName,
            query: {
              page: pageValue,
              search,
            },
          }}
        >
          Next
        </Link>
      );

    case PageType.PREVIOUS:
      return (
        <Link
          scroll={false}
          className={`${classes.paginationLink} w-28 rounded-l-lg py-2 ${disableCondition && 'cursor-not-allowed'} `}
          href={{
            pathname: pathName,
            query: {
              page: pageValue,
              search,
            },
          }}
        >
          Previous
        </Link>
      );

    case PageType.DOTS:
      return (
        <span className={`${classes.paginationLink} hidden px-4 py-2 md:block`}>{pageValue}</span>
      );

    default:
      return (
        <Link
          scroll={false}
          className={`${classes.paginationLink} hidden px-4 py-2 md:block ${disableCondition && classes.activeLink} `}
          href={{
            pathname: pathName,
            query: {
              page: pageValue,
              search,
            },
          }}
        >
          {pageValue}
        </Link>
      );
  }
}

export default PaginationLink;
