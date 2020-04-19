import IUser from "../components/Form/IUser"

export default class FormRules {

    public static nameIsvalid = (name: string)=> {
        if (name.length < 5 || name.length > 20 || !/[a-z-A-Z ]/.test(name)) throw new Error('Name is invalid')
        return true
    }
    
    public static usernameIsValid = (username: string)=> {
        if (username.length < 5 || username.length > 20 || !/[a-z-A-Z ]/.test(username)) throw new Error('Username is invalid')
        return true
    }

    public static emailIsvalid = (email: string)=> {
        if (email.length < 5) throw new Error('Email is invalid')
        return true
    }

    public static phoneIsValid = (phone: string)=> {
        if (phone.length < 5 || !/[0-9 ()]/.test(phone)) throw new Error('Phone is invalid')
        return true
    }

    public static avatarIsValid = (avatar: string)=> {
        if (avatar.length < 5) throw new Error('Avatar is invalid')
        return true
    }

    public static isFormValid = (user: IUser)=> {
        try {
            if (!user.name) throw new Error('Name is required')
            if (!user.username) throw new Error('Username is required')
            if (!user.email) throw new Error('Email is required')
            if (!user.phone) throw new Error('Phone is required')
            if (!user.avatar) throw new Error('Avatar is required')

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