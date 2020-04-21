import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  constructor() { }

  itemOpened: boolean
  @Input() users: Array<IUser>
  @Input() editing: object
  @Output() onDrop = new EventEmitter()
  @Output() onEdit = new EventEmitter()

  ngOnInit() {
  }

  toggleAccordeon(id) {
    this.itemOpened = this.itemOpened === id ? null : id
  }  

  openEdit(item: IUser) {
    this.onEdit.emit(item)
  }

  drop(id: number) {
    this.onDrop.emit(id)
  }
}
