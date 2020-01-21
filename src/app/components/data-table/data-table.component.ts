import { Component, OnInit } from '@angular/core';
import { DataTable } from 'src/app/models/DataTable';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  data: DataTable[]

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        id: '1',
        primaryTitle: 'Primary Title',
        originalTitle: 'Original Title 1',
        startYear: 'Start Year 1',
        genre: 'Genre 1'
      },
      {
        id: '2',
        primaryTitle: 'Primary Title',
        originalTitle: 'Original Title 2',
        startYear: 'Start Year 2',
        genre: 'Genre 2'
      },
      {
        id: '3',
        primaryTitle: 'Primary Title',
        originalTitle: 'Original Title 3',
        startYear: 'Start Year 3',
        genre: 'Genre 3'
      },
    ]
  }

}
