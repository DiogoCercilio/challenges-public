import React, { useState } from 'react'
import AccordeonInfo from './AccordeonInfo'

export default function AccordeonItem({ item, onDropUserHandler, onSubmitEdit }: any) {
    
    const [ visible, setVisible ] = useState(false)

    return (
        <div className={`accordeon-item ${visible ? 'active' : ''}`}>
            <div className="accordeon-item-title" onClick={e=> setVisible(!visible)}>
                <img className="accordeon-item-content-image" width="50" height="50" src={item.avatar} alt={item.name} />
                <small>ID: {item.id} -</small> {item.name}
            </div>
            
            {visible && 
                <div className="accordeon-item-content">
                    <AccordeonInfo 
                        item={item} 
                        onDropUserHandler={onDropUserHandler}
                        onSubmitEdit={(updated)=> {
                            setVisible(false)
                            onSubmitEdit(updated)}
                        }
                    />
                </div>
            }
        </div>
    )
}
