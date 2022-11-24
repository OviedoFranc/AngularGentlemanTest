import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from "@angular/material/table";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {Person} from "src/app/models";

import {People} from "src/app/data";
import {DataSharingState} from "../../app.module";


@Component({
  selector: 'app-people-table',
  standalone: true,
  imports: [MatPaginatorModule,MatFormFieldModule,MatTableModule,MatInputModule,MatSortModule],
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})

export class PeopleTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'category', 'company','levelOfHappiness'];
  dataSource: MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

  constructor() {
    DataSharingState.setAsyncData(true);
    this.dataSource = new MatTableDataSource(People);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(){}
}

