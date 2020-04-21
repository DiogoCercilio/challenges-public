import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/UserService';
import UserHelper from 'src/helpers/UserHelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  editElement = {};
  newUser: IUser | object = {};
  isAdding = false;
  isEditing = false;
  users: Array<IUser> = []
  userService = new UserService()

  async ngOnInit() {
    // The API doens't have the `gender` field
    this.users = UserHelper.getUsersWithGender(await this.userService.getAll())
  }

  /**
   * @description Reset list state
   */  
  reset() {
    this.isAdding = false
    this.isEditing = false
    this.editElement = {}
    this.newUser = {}
  }

  /**
   * @description Add a user
   * @param  {IUser} user
   */
  add(user: IUser) {
    try {
        if (!UserHelper.isValidUser(user)) {
          this.handleError('Form is invalid')
          return
        }

        this.userService.post(user)
          .then((response: IUser)=> { 
            if (response.error) {
              throw 'Houve um erro ao criar o usuário'
            }

            response.id = this.users.length + 1 // `users length` is being used only to mock the user id returned of backend
            response.avatar = UserHelper.getAvatar(response.gender)
            this.users.push(response)
            this.newUser = {}
            this.isAdding = false           
          }).catch(err=> { 
            throw err 
          }) 
    } catch(err) {
      this.handleError(err)
    }
  }

  /**
   * @description Edit a user
   * @param  {object} user
   */  
  edit(user: IUserEdit) {
    try {
      debugger
      const newUser = UserHelper.mergeUser(user)
      this.userService.put(newUser)
            .then((response: IUser)=> {
                if (response.error) throw 'Houve um erro ao editar o usuário'

                this.users = this.users.map(u=> u.id === response.id ? response : u)
                this.newUser = {}
                this.editElement = {}
                this.isEditing = false
            }).catch(err=> { 
              throw err
            })  
    } catch(err) {
      this.handleError(err)
    }  
  }

  /**
   * @description Delete a user
   * @param  {number} id
   */
  drop(id) {
    try {      
      if (!confirm('Are you sure?')) return
  
      this.userService.delete(id)
          .then((response: any)=> {
              if (response.error) {
                throw 'Houve um erro ao deletar o usuário'
              }
              this.users = this.users.filter(user=> user.id !== id)
          }).catch(err=> { 
            throw err 
          })
    } catch(err) {
      this.handleError(err)
    }

  }

  /**
   * @description Handle error
   * @param  {string} err
   */  
  handleError(err: string) {
    alert(err) // On a real situation it would handle a error decently :D
  }
}