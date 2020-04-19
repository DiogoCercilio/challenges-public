import React from 'react'

export default function AccordeonInfoItem({ label, isEditing, value, onChange }: any) {
    
    const getInput = ()=> {
        return !isEditing ? 
            <div>{value}</div> :
            (label === 'Name') ?
                <input type="text" placeholder={value} autoFocus onChange={(e)=> onChange(e.target.value)} /> :
                <input type="text" placeholder={value} onChange={(e)=> onChange(e.target.value)} />
    }
    
    return (
        <div className="accordeon-item-content-data-input">
            <small>
                {label}
            </small>
            
            {getInput()}
        </div>
    )
}
