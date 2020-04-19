import React from 'react'
import ILogo from './ILogo'

const logoImg = "https://agenciamaori.com.br/i.systems/logo-Isystem_positivo.svg"
const logoAlt = "I System Logo"

function getLogo(props: ILogo) {
    return `logo-${props.size || "normal"}`
}

export default function Logo(props: ILogo) {
    return (
        <img className={`logo ${getLogo(props)}`} src={logoImg} alt={logoAlt}/>
    )
}
