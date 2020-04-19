import IUser from "../components/Form/IUser"

export default class ListHelper {
    
    static appendUser = (users: Array<IUser>, newUser: IUser)=> {
        return [...users, newUser]
    }

    static getSorted = (arr: Array<IUser>, order?: string, sort?: string)=> {
        switch(order) {
            case 'id':
                return arr.sort((a: any,b: any)=> sort === 'DESC' ? 
                        (a[order] - (b[order])) : 
                        b[order] - (a[order]))
            default:
                const res: any = arr.sort((a: any,b: any)=> a['name'].localeCompare(b['name']))
                return sort === 'DESC' ? res : res.reverse()
        }
    }  
}