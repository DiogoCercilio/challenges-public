import IUser from "./IUser"

export default class FormRules {

    public static nameIsvalid = (name: string)=> {
        if (name.length < 5 || name.length > 20 || !/[a-z-A-Z ]/.test(name)) throw 'Name is invalid'
        return true
    }
    
    public static usernameIsValid = (username: string)=> {
        if (username.length < 5 || username.length > 20 || !/[a-z-A-Z ]/.test(username)) throw 'Username is invalid'
        return true
    }

    public static emailIsvalid = (email: string)=> {
        if (email.length < 5) throw 'Email is invalid'
        return true
    }

    public static phoneIsValid = (phone: string)=> {
        if (phone.length < 5 || !/[0-9 \(\)]/.test(phone)) throw 'Phone is invalid'
        return true
    }

    public static avatarIsValid = (avatar: string)=> {
        if (avatar.length < 5) throw 'Avatar is invalid'
        return true
    }

    public static isFormValid = (user: IUser)=> {
        try {
            if (!user.name) throw 'Name is required'
            if (!user.username) throw 'Username is required'
            if (!user.email) throw 'Email is required'
            if (!user.phone) throw 'Phone is required'
            if (!user.avatar) throw 'Avatar is required'

            return FormRules.nameIsvalid(user.name) && 
                FormRules.usernameIsValid(user.username) && 
                FormRules.emailIsvalid(user.email) && 
                FormRules.phoneIsValid(user.phone) && 
                FormRules.avatarIsValid(user.avatar)
        } catch(err) {
            console.error(err)
        }
    }    
}