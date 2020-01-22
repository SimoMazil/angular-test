import { Component, OnInit } from '@angular/core';
import { DataTable } from 'src/app/models/DataTable';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  lines: DataTable[]
  editLine: DataTable
  filterValue: string = 'title'
  modal: boolean = false

  constructor(private dataTableSerivce: DataTableService) { }

  ngOnInit() {
    this.lines = this.dataTableSerivce.getData().sort((a: any, b: any) => a.startYear - b.startYear)
  }

  onKey(event: any) {
    const value = event.target.value
    
    if(value !== '') {
      if(this.filterValue === 'title') {
        this.lines = this.lines.filter(item => 
          item.originalTitle.toLowerCase().includes(value.toLowerCase()) || 
          item.primaryTitle.toLowerCase().includes(value.toLowerCase())
        )
      } else {
        this.lines = this.lines.filter(item => item.startYear.includes(value.toString()))
      }
    } else {
      this.lines = this.dataTableSerivce.getData()
    }
  }

  onChange(event: any) {
    this.filterValue = event.target.value;
  }

  onClick(line: any) {
    this.editLine = line
    this.modal = true
  }

  hideModal(event: any) {
    this.modal = event
  }

}
