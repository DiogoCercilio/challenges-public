import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  @Output() onAddUser = new EventEmitter()

  addUser() {
    this.onAddUser.emit(true)
  }
}
