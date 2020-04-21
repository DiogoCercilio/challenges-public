export default class UserHelper {
    
    /**
     * @description Validate given user inputs
     * @param  {IUser} user
     */
    static isValidUser(user: IUser) {

        // Here could be some logics validating the given fields... I implemented that on React Version
        // Should validate email, phone, name etc... based on business rules. For now, I'm considering 
        // only the input length for test purposes 

        return (user.name && user.name.length) && 
               (user.username && user.username.length) &&
               (user.email && user.email.length) &&
               (user.phone && user.phone.length) &&
               (user.gender && user.gender.length)
    }  

    /**
     * @description Append the `gender` field on API result object
     * @param  {Array<IUser>} users
     * @returns {Array<IUser>}
     */
    static getUsersWithGender(users: Array<IUser>) {
        return users.map(user=> {
            user.gender = /(\/women\/)/.test(user.avatar) ? 'women' : 'men'
            return user
        })
    }
    
    /**
     * @description Apply the updated values on IUser object (Used on Edit feature)
     * @param  {IUserEdit} newUser
     * @returns {IUser}
     */
    static mergeUser({ newUser, editing }: IUserEdit) {
        const gender = newUser.gender || editing.gender
        return {
          id: editing.id,
          name: newUser.name || editing.name,
          username: newUser.username || editing.username,
          phone: newUser.phone || editing.phone,
          email: newUser.email || editing.email,
          gender,
          avatar: (gender !== editing.gender) ? UserHelper.getAvatar(gender) : editing.avatar,
        }
    }

    /**
     * @description Get the avatar link based on given gender
     * @param  {string} gender
     * @returns {string}
     */
    static getAvatar(gender: string) {
        return `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 99)}.jpg`
    }      
}