import { Component, OnInit } from '@angular/core';
import { DataTable } from 'src/app/models/DataTable';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  data: DataTable[]
  lines: DataTable[]
  editLine: DataTable
  filterValue: string = 'title'
  modal: boolean = false

  constructor(private dataTableSerivce: DataTableService) { }

  ngOnInit() {
    this.data = this.dataTableSerivce.getData()
    this.lines = this.data.sort((a: any, b: any) => a.startYear - b.startYear)
  }

  onKey(event: any) {
    if(event.target.value !== '' && this.filterValue === 'title') {
      this.lines = this.lines.filter(item => 
      item.originalTitle.toLowerCase().includes(event.target.value.toLowerCase()) || 
      item.primaryTitle.toLowerCase().includes(event.target.value.toLowerCase()))
    } else if(event.target.value !== '' && this.filterValue === 'year') {
      this.lines = this.lines.filter(item => item.startYear.includes(event.target.value.toString()))
    } else {
      this.lines = this.data
    }
  }

  onChange(event: any) {
    this.filterValue = event.target.value;
  }

  onClick(line) {
    this.editLine = line
    this.modal = true
  }

  hideModal(event) {
    this.modal = event
  }

}
