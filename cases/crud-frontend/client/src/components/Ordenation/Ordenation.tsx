import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'

export default function Ordenation({ onClickHandler, initialOrder }: any) {
    
    const [ activeOrdenation, setActiveOrdenation ]: any = useState(initialOrder)
    
    useEffect(()=> {
        onClickHandler(activeOrdenation)        
    }, [activeOrdenation])

    return (
        <>
        <ul className="ordenation">
            <li><strong>Order by:</strong></li>
            {['id','name'].map((i: string)=> {
                return (<li key={i}>
                    <Button 
                        className={activeOrdenation.order === i ? 'btn-primary' : ''} 
                        label={`${i} ${activeOrdenation.order === i ? '('+activeOrdenation.sort+')' : ''}`} 
                        onHandleClick={()=> {
                            setActiveOrdenation({ order: i, sort: activeOrdenation.sort === 'ASC' ? 'DESC' : 'ASC' })
                        }} 
                    />
                </li>)
            })}
        </ul>
        </>
    )
}
