export const ITEMS_PER_PAGE = () => 10;

export const numberOfSkeletons = Array.from({ length: ITEMS_PER_PAGE() }, (_, i) => i);
