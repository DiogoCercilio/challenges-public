import IUser from "../components/Form/IUser"

export default class FormRules {

    public static nameIsvalid = (name: string)=> {
        if (!name) throw new Error('Name is required')
        if (typeof name !== 'string' || name.length < 3 || name.length > 20 || !/[a-z-A-Z ]/.test(name)) {
            throw new Error('Name is invalid')
        }
        return true
    }
    
    public static usernameIsValid = (username: string)=> {
        if (!username) throw new Error('Username is required')        
        if (typeof username !== 'string' || username.length < 3 || username.length > 20 || !/[a-z-A-Z ]/.test(username)) {
            throw new Error('Username is invalid')
        }
        return true
    }

    public static emailIsvalid = (email: string)=> {
        if (!email) throw new Error('Email is required')
        if (
            typeof email !== 'string' || 
            email.length < 5 ||
            !/[^@]+@[^\.]+\..+/.test(email) // Simple validation...
        ) throw new Error('Email is invalid')
        return true
    }

    public static phoneIsValid = (phone: string)=> {
        if (!phone) throw new Error('Phone is required')     
        if (typeof phone === 'object' || phone.length < 5 || !/[0-9 ()]/.test(phone)) throw new Error('Phone is invalid')
        return true
    }

    public static avatarIsValid = (avatar: string)=> {
        if (!avatar) throw new Error('Avatar is required')        
        if (typeof avatar !== 'string' || avatar.length < 5) throw new Error('Avatar is invalid')
        return true
    }

    public static isFormValid = (user: IUser)=> {
        try {
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