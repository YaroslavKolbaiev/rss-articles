import { numberOfSkeletons } from '@/utils/itemsPerPage';

export default function AdminArticlesSkeleton() {
  return (
    <>
      {numberOfSkeletons.map((skeleton) => (
        <div key={skeleton} className="skeleton-colors mb-2 h-14 rounded-md" />
      ))}
    </>
  );
}
