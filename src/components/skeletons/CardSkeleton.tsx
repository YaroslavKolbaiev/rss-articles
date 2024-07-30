import { numberOfSkeletons } from '@/utils/itemsPerPage';

function CardSkeleton() {
  return (
    <>
      {numberOfSkeletons.map((skeleton) => (
        <article
          key={`id-${skeleton}`}
          className="skeleton-colors h-64 rounded-lg border border-gray-200 shadow-md dark:border-gray-700"
        />
      ))}
    </>
  );
}

export default CardSkeleton;
