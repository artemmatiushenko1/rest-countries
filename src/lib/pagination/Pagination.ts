import { makeAutoObservable } from 'mobx';

type PaginationConfig<T> = {
  items: T[];
  skip?: number;
  take?: number;
};

class Pagination<T> {
  currentPage = 1;
  allItems: T[] = [];
  currentItems: T[] = [];
  totalPages = 0;
  totalItems = 0;
  skip = 0;
  take = 20;
  hasMore = false;

  constructor({ items, skip = 0, take = 20 }: PaginationConfig<T>) {
    makeAutoObservable(this);
    this.setInitialPagination({ items, skip, take });
  }

  setInitialPagination({ items, skip = 0, take = 20 }: PaginationConfig<T>) {
    this.currentPage = 1;
    this.skip = skip;
    this.take = take;
    this.totalItems = items.length;
    this.allItems = [...items];
    this.currentItems = items.slice(skip, take);
    this.totalPages = Math.ceil(items.length / take);
    this.hasMore = [...items].splice(skip + take, take).length > 0;
  }

  getNextPage() {
    this.currentPage = this.currentPage + 1;
    this.skip = this.skip + this.take;
    this.currentItems = this.currentItems.concat(
      [...this.allItems].splice(this.skip, this.take)
    );
    this.hasMore =
      [...this.allItems].splice(this.skip + this.take, this.take).length > 0;
  }
}

export { Pagination };
