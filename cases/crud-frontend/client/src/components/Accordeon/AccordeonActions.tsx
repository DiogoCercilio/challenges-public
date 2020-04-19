import React from 'react'
import Icons from '../Icons/Icons'

export default function AccordeonActions({ itemId, onEditUserHandler, onDropUserHandler }: any) {
    
    const onDropUser = ()=> {
        return window.confirm('Are you sure?') && onDropUserHandler(itemId)
    }
    
    return (
        <div className="accordeon-item-content-data-input">
            <small>
                Actions
            </small>
            <ul>
                <li onClick={()=> onEditUserHandler()}>
                    <Icons name="edit" color="#fff" title="Edit" size="20" />
                </li>
                <li onClick={()=> onDropUser()}>
                    <Icons name="trash" color="#fff" title="Delete" size="20" />
                </li>
            </ul>
        </div>
    )
}
