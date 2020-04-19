import React from 'react'

export default function FomInput({ onChange, value, label }: any) {
    return (
        <div className="row">
            <label htmlFor={label.toLowerCase()}>
                {label}
            </label>
            
            <input type="text"
                   id={label.toLowerCase()} 
                   onChange={e=> onChange(e.target.value)} 
                   value={value} 
            />
        </div>
    )
}
