import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTable } from 'src/app/models/DataTable';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() editLine: DataTable
  @Input() modal: boolean
  
  title: string
  genre: string
  year: string

  @Output() hideModal: EventEmitter<boolean> = new EventEmitter()
  @Output() editData: EventEmitter<DataTable> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.title = this.editLine.originalTitle
    this.genre = this.editLine.genre
    this.year = this.editLine.startYear
  }

  onSubmit() {
    this.editLine.originalTitle = this.title
    this.editLine.genre = this.genre
    this.editLine.startYear = this.year
    this.editData.emit(this.editLine)

    this.modal = false
    this.hideModal.emit(this.modal)
  }

}
