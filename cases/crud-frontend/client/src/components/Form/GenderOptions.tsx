import React from 'react'

export default function GenderOptions({ gender, onChange }: any) {

    return (
        <>
        <h3>Gender:</h3>
        <div className="row">
            <label htmlFor="genre">Man</label>
            <input type="radio" id="gender" checked={gender === 'men'} name="gender" value="men" onChange={(e)=>onChange(e)} />

            <label htmlFor="genre">Woman</label>
            <input type="radio" id="gender" name="gender" value="women" onChange={(e)=>onChange(e)} />            
        </div>
        </>
    )
}
