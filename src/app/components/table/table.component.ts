import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['company_name', 'title', 'place'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  _list: any[] = [];
  @Input() set list(value: any[]) {
    this._list = value;
    this.initialiseTable();
  }

  get list():any {
    return this._list;
  }

  @Output() _selected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  initialiseTable() {
    this.dataSource = new MatTableDataSource(this.list);
  }

  selectedIndex(job: any) {
    if (job) {
      this._selected.emit(job.job_id);
    }
  }

}
