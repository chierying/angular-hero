import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {TableDataSource, TableItem} from './table-datasource';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TableItem>;
  filterTerm$ = new Subject();
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.dataSource = new TableDataSource();

    this.dataSource.filter$ = this.filterTerm$.pipe(
      debounceTime<string>(300),
      distinctUntilChanged(),
      tap(x => console.log(`过滤： ${x}`))
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  /**
   * 过滤表格
   */
  filterTable(value: string) {
    this.snackBar.open(`过滤数据：${value}`, 'ok', {duration: 2000});
    console.log(value);
    this.dataSource.filterString = value;
    this.filterTerm$.next(value);
  }
}
