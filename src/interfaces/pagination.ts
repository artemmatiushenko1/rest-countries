export interface IPagination<T> {
  currentPage: number;
  items: Array<T>;
  skip: number;
  totalPages: number;
  take: number;
  totalItems: number;
  hasMore: boolean;
}
