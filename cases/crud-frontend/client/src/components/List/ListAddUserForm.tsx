import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import FormInput from '../Form/FomInput'
import FormHelper from '../../helpers/FormHelper'
import GenderOptions from '../Form/GenderOptions'

export default function ListAddUserForm({ onAdd, onCancel }: any) {
    
    const imgUrl = `https://randomuser.me/api/portraits`
    const [ gender, setGender ]: any = useState('men')
    const [ user, setUser ] = useState({
        name: '',
        username: '',
        phone: '',
        email: '',
        avatar: ''
    })

    const getGender = (e: any)=> {
        return e.target.checked && e.target.value === "men" ? 'men' : 'women'        
    }

    const onSubmit = (e: any)=> {
        try {
            e.preventDefault()
            return FormHelper.isFormValid(user) && 
            onAdd(user)
        } catch(err) {
            alert(err)
        }
    }

    useEffect(()=> {
        setUser({...user, avatar: `${imgUrl}/${gender}/87.jpg`})
    }, [gender, imgUrl])

    return (
        <form id="add-user-form" className="list-users-add-user-form" autoComplete="off" role="presentation">
            <h3>
                Please fill the data below to add a new user:
            </h3>

            <FormInput label="Name" value={user.name} onChange={(name: string)=> setUser({...user, name })} />
            <FormInput label="Username" value={user.username} onChange={(username: string)=> setUser({...user, username })} />
            <FormInput label="Email" value={user.email} onChange={(email: string)=> setUser({...user, email })} />
            <FormInput label="Phone" value={user.phone} onChange={(phone: string)=> setUser({...user, phone })} />
            <GenderOptions gender={gender} onChange={(e: any)=> setGender(getGender(e)) } />
            <FormInput label="Avatar" value={user.avatar} onChange={(avatar: string)=> setUser({...user, avatar })} />

            <div className="row pull-right">
                <Button className="btn-lined" label="Add" onHandleClick={(e: any)=> onSubmit(e)} />
                <Button className="btn-primary p-margin-left-1" label="Cancel" onHandleClick={onCancel} />
            </div>
        </form>
    )
}
