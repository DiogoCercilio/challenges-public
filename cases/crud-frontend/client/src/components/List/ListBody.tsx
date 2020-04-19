import React, {  useEffect, useState } from 'react'
import UserService from "../../services/UserService"
import Accordeon from '../Accordeon/Accordeon';
import Button from '../Button/Button';
import ListAddUserForm from './ListAddUserForm';
import Ordenation from '../Ordenation/Ordenation';
import ListHelper from '../../helpers/ListHelper'
import IUser from '../Form/IUser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MESSAGES } from './ListMessages'

toast.configure()

export default function ListBody() {
    
    const [ users, setUsers ]: any = useState([])
    const [ isAddingUser, setIsAddingUser ]: any = useState()
    const [ ordenation, setOrdenation ]: any = useState({order: 'name', sort: 'ASC' }) // Initial ordering

    const userService = new UserService()

    const addUser = (newUser: IUser)=> {
        userService.createUser(newUser)
            .then((response: any)=> {
                response.id = users.length + 1 // Mock id from backend..
                setUsers(ListHelper.getSorted(ListHelper.appendUser(users, response), ordenation.order, ordenation.sort))
            })
            .catch(err=> showMsg(err))
            .finally(()=> setIsAddingUser(false))
    }  

    const dropUser = (id: number)=> {
        userService.dropUser(id)
            .then((response: any)=> {
                if (response.status === 200) {
                    setUsers(users.filter((user: IUser)=> user.id !== id))
                    showMsg(MESSAGES.SUCCESS_DELETED)
                } else {
                    throw MESSAGES.ERROR_DELETING
                }
            })
            .catch(err=> showMsg(err))
    }

    const editUser = (editedUser: IUser)=> {
        userService.editUser(editedUser)
            .then((response: any)=> {
                if (response.status === 200) {
                    const usersWithoutEdited = users.filter((user: IUser)=> user.id !== editedUser.id)
                    setUsers(ListHelper.getSorted(ListHelper.appendUser(usersWithoutEdited, editedUser), ordenation.order, ordenation.sort))
                    showMsg(MESSAGES.SUCCESS_EDITED)
                } else {
                    throw MESSAGES.ERROR_EDITING
                }
            })
            .catch(err=> showMsg(err))
    }
    
    const showMsg = (msg: string)=> toast.info(msg) 

    // Order users by ID when the page loads
    useEffect(()=> {
        (async function getUsersAsync() {
            try {
                setUsers(ListHelper.getSorted(await userService.getAll(), ordenation.order, ordenation.sort))
            } catch(err) {
                showMsg(err)
            }
        })()
    }, [])

    return (
        <div className="list-users-body">
            <div className="row list-users-body-title">

                <h1>List of Users:</h1>
                <Ordenation 
                    initialOrder={ordenation}
                    onClickHandler={(orderObj: any)=> {
                        setUsers([...ListHelper.getSorted(users, orderObj.order, orderObj.sort)])
                        setOrdenation(orderObj)
                    }}
                />
                <Button 
                    label="Add user" 
                    className="pull-right btn-primary btn-lined list-users-body-add-btn" 
                    onHandleClick={()=> setIsAddingUser(true)} 
                />
                {isAddingUser && <ListAddUserForm onAdd={addUser} onCancel={()=> setIsAddingUser(false)} />}
            </div>
            <Accordeon 
                items={users} 
                onDropUserHandler={(i: number)=> dropUser(i) }
                onSubmitEdit={(user: IUser)=> editUser(user) }
            />
        </div>
    )
}