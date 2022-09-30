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

  it('should correctly calculate totalItems count', () => {
    const pagination = new Pagination<ICountry>({ items: countries });
    const actual = countries.length;
    expect(pagination.totalItems).toEqual(actual);
  });

  it('should initially have current page equal to 1', () => {
    const pagination = new Pagination<ICountry>({ items: countries });
    expect(pagination.currentPage).toEqual(1);
  });

  it('should correctly get next page of items', () => {
    const pagination = new Pagination<ICountry>({ items: countries, take: 20 });
    const actualNextItems = countries.splice(0, 40);

    pagination.getNextPage();

    expect(pagination.currentItems).toEqual(actualNextItems);
  });

  it('should correctly get third page of items', () => {
    const pagination = new Pagination<ICountry>({ items: countries, take: 20 });
    const actualNextItems = countries.splice(0, 60);

    pagination.getNextPage();
    pagination.getNextPage();

    expect(pagination.currentItems).toEqual(actualNextItems);
  });

  it('should calculate the number of pages', () => {
    const pagination = new Pagination<ICountry>({ items: countries, take: 20 });
    const actualNumberOfPages = Math.ceil(countries.length / 20);

    expect(pagination.totalPages).toEqual(actualNumberOfPages);
  });
});
