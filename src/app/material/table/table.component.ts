import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {TableDataSource, TableItem} from './table-datasource';
import {BehaviorSubject} from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TableItem>;
  filterText$ = new BehaviorSubject<string>(null);
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.dataSource = new TableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterText$ = this.filterText$.pipe(
      debounceTime<string>(300),
      distinctUntilChanged(),
      tap(text => {
        this.dataSource.filterText = text;
        // 过滤规则改变就到第一页
        this.paginator.firstPage();
        this.snackBar.open(`过滤数据：${text}`, 'ok', {duration: 2000});
      })
    );
    this.table.dataSource = this.dataSource;
  }

  /**
   * 过滤表格
   */
  filterTable(value: string) {
    this.dataSource.filterText = value;
    this.filterText$.next(value);
  }
}
