import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {TableItem} from './table.component';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: BehaviorSubject<TableItem[]>;
  paginator: MatPaginator;
  sort: MatSort;
  // 表格过滤流
  filterText$: BehaviorSubject<string>;

  constructor(data: BehaviorSubject<TableItem[]>, paginator: MatPaginator, sort: MatSort, filterText$: BehaviorSubject<string>) {
    super();
    this.data = data;
    this.paginator = paginator;
    this.sort = sort;
    this.filterText$ = filterText$;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.data,
      this.paginator.page,
      this.sort.sortChange,
      this.filterText$.pipe(
        debounceTime<string>(300),
        distinctUntilChanged(),
        tap(text => {
          // 过滤规则改变就到第一页
          this.paginator.firstPage();
        })
      )
    ];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData(this.getFilteredData([...this.data.getValue()],
          this.filterText$.getValue())));
      }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }

  /**
   * 过滤数据
   */
  private getFilteredData(data: TableItem[], filterText: string) {
    console.log(`过滤数据：${data.length}, filterText:${filterText}`);
    let filteredData;
    if (!filterText) {
      filteredData = data;
    } else {
      filteredData = data.filter(item => item.name.toLocaleLowerCase().includes(filterText));
    }
    this.paginator.length = filteredData.length;
    return filteredData;
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
