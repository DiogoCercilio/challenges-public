import { Service } from "./Service";

// A userservice iria realmente estender os metodos de service em uma situacao real. 
// Aqui é só pra exemplificar
export class UserService extends Service {

    async getAll(): Promise<[any]> {
        return await new Promise((res, rej)=> {
          return fetch(`${this.apiUrl}/users`)
            .then(response=> res(response.json()))
            .catch(err=> rej(err))
        })
    }

    delete(id: number): Promise<boolean> {
      return Promise.resolve(true)
    }

    post(user: IUser): Promise<IUser> {
      return Promise.resolve(user)
    }

    put(user: IUser): Promise<IUser> {
      return Promise.resolve(user)
    }
}