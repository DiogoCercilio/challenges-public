import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class ModalComponent {

  constructor() { }

  @Input() isAdding: boolean
  @Input() isEditing: boolean
  @Input() editElement: object
  @Input() newUser: object
  @Output() onAdd = new EventEmitter()
  @Output() onEdit = new EventEmitter()
  @Output() onClose = new EventEmitter()

  edit(newUser: IUser, editing: IUser, gender: string) {
    newUser.gender = gender
    this.onEdit.emit({newUser, editing})
  }

  add(user: IUser, gender: string) {
      user.gender = gender
      this.onAdd.emit(user)
  }  

  onCloseModal() {
    this.onClose.emit(false)
  }
}
