export class URLSearchParamsModel {
  page: number;
  limit: number;
  searchString: string;
  sort: string;
  direction: string;

  constructor(page: number = 1,
              limit: number = 25,
              searchString: string = '',
              sort: string = '_id',
              direction: string = 'desc') {
    this.page = page;
    this.limit = limit;
    this.searchString = searchString;
    this.sort = sort;
    this.direction = direction;
  }

}
