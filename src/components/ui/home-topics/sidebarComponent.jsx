import React from 'react'
import Logo from '../../../assets/common/logo.svg'

/**
 * 
 * Component for sidebar
 */
export default function sidebarComponent() {
  return (
    <section className='sidebar-info'>
        <img className='logo' src={Logo} alt="Logo" />
        <h1 className='title'>LOREM IPSUM DOLOR SIT </h1>
        <button className='begin-button'>BEGIN</button>
    </section>
  )
}

