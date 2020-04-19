import React, { useState } from 'react'
import AccordeonActions from './AccordeonActions'
import Button from '../Button/Button'
import AccordeonInfoItem from './AccordeonInfoItem'
import FormHelper from '../../helpers/FormHelper'

export default function AccordeonInfo({ item, onDropUserHandler, onSubmitEdit }: any) {
    
    const [ isEditing, setIsEditing ]: any = useState()
    const [ updated, setUpdated ]: any = useState({})

    const onSubmit = (e: any)=> {
        try {
            return FormHelper.isFormValid(updated) && onSubmitEdit(updated)
        } catch(err) {
            alert(err)
        }
    }
    
    return (
        <>
        <div className='accordeon-item-content-data'>
            <AccordeonInfoItem label="Name" value={item.name} isEditing={isEditing} onChange={(name: string)=> setUpdated({...item, name })} />
            <AccordeonInfoItem label="Username" value={item.username} isEditing={isEditing} onChange={(username: string)=> setUpdated({...item, username })} />
            <AccordeonInfoItem label="Email" value={item.email} isEditing={isEditing} onChange={(email: string)=> setUpdated({...item, email })}/>
            <AccordeonInfoItem label="Phone" value={item.phone} isEditing={isEditing} onChange={(phone: string)=> setUpdated({...item, phone })} />
            <AccordeonActions itemId={item.id} onDropUserHandler={onDropUserHandler} onEditUserHandler={()=> setIsEditing(!isEditing) } />
        </div>

        {isEditing &&
            <div className="accordeon-item-content-data-input" style={{flexDirection: 'row'}}>
                <Button className='btn-primary' label="Save" style={{marginRight: '20px'}} onHandleClick={(e: any)=> { setIsEditing(false); onSubmit(e)}}/>
                <Button className='btn-primary' label="Cancel" onHandleClick={(e: any)=> { setIsEditing(false)}}/>
            </div>       
        }  
        </>
    )
}
