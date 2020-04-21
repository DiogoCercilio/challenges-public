interface IUser {
    error?: boolean
    id?: number
    name: string
    username: string
    phone: string
    email: string
    avatar: string
    gender?: string
}

interface IUserEdit {
  newUser: IUser;
  editing: IUser
}