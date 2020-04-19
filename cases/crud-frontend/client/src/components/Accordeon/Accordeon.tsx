import React from 'react'
import AccordeonItem from './AccordeonItem'

export default function Accordeon({ items, onDropUserHandler, onSubmitEdit }: any) {
    return (
        <div className="accordeon">
            {items.map((item: any)=> {
                return <AccordeonItem 
                            key={item.id} item={item} 
                            onDropUserHandler={onDropUserHandler} 
                            onSubmitEdit={onSubmitEdit} 
                        />
                }
            )}
        </div>      
    )
}
