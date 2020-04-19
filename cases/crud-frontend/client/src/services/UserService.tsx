import Service from './Service'
import IUser from '../components/Form/IUser'

export default class UserService extends Service {

    async getAll(): Promise<Array<IUser>> {
        return new Promise(async(resolve, reject)=> {
            await this.get('/users', resolve, reject)
        })
    }

    async createUser(body: object) {
        return new Promise(async(resolve, reject)=> {
            await this.post('/user', body).then((response: any)=> resolve(response.json()))
        })
    }
    
    async dropUser(id: number) {
        return new Promise(async(resolve, reject)=> {
            await this.delete('/user', {id}).then((response: any)=> resolve(response.json()))
        })
    }

    async editUser(body: object) {
        return new Promise(async(resolve, reject)=> {
            await this.put('/user', body).then((response: any)=> resolve(response.json()))
        })
    }
}