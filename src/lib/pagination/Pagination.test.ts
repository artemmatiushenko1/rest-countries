import { ICountry } from './../../interfaces/country';
import { countries } from './pagination-items.mock';
import { Pagination } from './Pagination';

describe('test Pagination class', () => {
  it('should correctly set items', () => {
    const pagination = new Pagination<ICountry>({ items: countries });

    expect(pagination.allItems).toEqual(countries);
  });

  it('should have default skip 0', () => {
    const pagination = new Pagination<ICountry>({ items: countries });

    expect(pagination.skip).toEqual(0);
  });

  it('should have default take 20', () => {
    const pagination = new Pagination<ICountry>({ items: countries });

    expect(pagination.take).toEqual(20);
  });

  it('should set take value', () => {
    const pagination = new Pagination<ICountry>({ items: countries, take: 10 });

    expect(pagination.take).toEqual(10);
  });

  it('should correctly calculate totalItems count', () => {
    const pagination = new Pagination<ICountry>({ items: countries });
    const expectedTotalItems = countries.length;

    expect(pagination.totalItems).toEqual(expectedTotalItems);
  });

  it('should initially have current page equal to 1', () => {
    const pagination = new Pagination<ICountry>({ items: countries });

    expect(pagination.currentPage).toEqual(1);
  });

  it('should correctly get second page of items', () => {
    const pagination = new Pagination<ICountry>({ items: countries, take: 20 });
    const expectedNextPageItems = [...countries].splice(20, 20);

    pagination.goToNextPage();

    expect(pagination.currentItems).toEqual(expectedNextPageItems);
  });

  it('should correctly get the last page of items', () => {
    const pagination = new Pagination<ICountry>({ items: countries, take: 20 });
    const totalPages = Math.ceil(countries.length / 20);
    const expectedLastPageItems = [...countries].splice(
      (totalPages - 1) * 20,
      20
    );

    for (let i = 0; i < totalPages - 1; i++) {
      pagination.goToNextPage();
    }

    expect(pagination.currentItems).toEqual(expectedLastPageItems);
  });

  it('should have hasMore = true if there is next page', () => {
    const pagination = new Pagination<ICountry>({ items: countries, take: 20 });

    pagination.goToNextPage();

    expect(pagination.hasMore).toEqual(true);
  });

  it('should have hasMore = false if there is no next page', () => {
    const pagination = new Pagination<ICountry>({ items: countries, take: 20 });
    const totalPages = Math.ceil(countries.length / 20);

    for (let i = 0; i < totalPages; i++) {
      pagination.goToNextPage();
    }

    expect(pagination.hasMore).toEqual(false);
  });

  it('should not change the current items if there is no next page', () => {
    const pagination = new Pagination<ICountry>({ items: countries, take: 20 });
    const totalPages = Math.ceil(countries.length / 20) + 1;
    const expectedLastPageItems = [...countries].splice(
      (totalPages - 2) * 20,
      20
    );

    for (let i = 0; i < totalPages - 1; i++) {
      pagination.goToNextPage();
    }

    expect(pagination.currentItems).toEqual(expectedLastPageItems);
  });

  it('should calculate the number of pages', () => {
    const pagination = new Pagination<ICountry>({ items: countries, take: 20 });
    const expectedNumberOfPages = Math.ceil(countries.length / 20);

    expect(pagination.totalPages).toEqual(expectedNumberOfPages);
  });
});
