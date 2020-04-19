import React from 'react'

export default function Button({ label, onHandleClick, style, className }: any) {
    return (
        <button className={`${className} btn`} style={style} onClick={(e: any)=> onHandleClick(e)}>
            {label}
        </button>
    )
}
