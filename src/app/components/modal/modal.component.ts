import { Component, OnInit, Input } from '@angular/core';
import { DataTable } from 'src/app/models/DataTable';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() editLine: DataTable
  @Input() show: boolean
  title: string
  genre: string
  year: string

  constructor() { }

  ngOnInit() {
    this.title = this.editLine.originalTitle
    this.genre = this.editLine.genre
    this.year = this.editLine.startYear
  }

  onSubmit() {
    this.show = false
  }

}
