import React, { useState } from 'react'
import AccordeonActions from './AccordeonActions'
import Button from '../Button/Button'
import AccordeonInfoItem from './AccordeonInfoItem'
import FormHelper from '../../helpers/FormHelper'

export default function AccordeonInfo({ item, onDropUserHandler, onSubmitEdit }: any) {
    
    const [ isEditing, setIsEditing ]: any = useState()
    const [ updated, setUpdated ]: any = useState(item)

    const onSubmit = (e: any)=> {
        try {
            const formRules: any = FormHelper.isFormValid(updated)
            if (formRules.error) {
                throw new Error(formRules.error)
            }            
            setIsEditing(false)
            onSubmitEdit(updated)
        } catch(err) {
            alert(err)
        }
    }
    
    return (
        <>
        <div className='accordeon-item-content-data'>
            <AccordeonInfoItem label="Name" value={item.name} isEditing={isEditing} onChange={(name: string)=> setUpdated({...updated, name })} />
            <AccordeonInfoItem label="Username" value={item.username} isEditing={isEditing} onChange={(username: string)=> setUpdated({...updated, username })} />
            <AccordeonInfoItem label="Email" value={item.email} isEditing={isEditing} onChange={(email: string)=> setUpdated({...updated, email })}/>
            <AccordeonInfoItem label="Phone" value={item.phone} isEditing={isEditing} onChange={(phone: string)=> setUpdated({...updated, phone })} />
            <AccordeonActions itemId={item.id} onDropUserHandler={onDropUserHandler} onEditUserHandler={()=> setIsEditing(!isEditing) } />
        </div>

        {isEditing &&
            <div className="accordeon-item-content-data-input" style={{flexDirection: 'row'}}>
                <Button className='btn-primary' label="Save" style={{marginRight: '20px'}} onHandleClick={(e: any)=> onSubmit(e)} />
                <Button className='btn-primary' label="Cancel" onHandleClick={(e: any)=> setIsEditing(false)} />
            </div>       
        }  
        </>
    )
}
