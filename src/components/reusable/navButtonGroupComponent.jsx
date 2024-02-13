import React from 'react'
import NavMenuButton from './navMenuComponent'
import NavButton from './navButtonComponent'
import '../../assets/css/nav-button-group.css'

/**
 * 
 * Component for Nav Button Group on right
 */
export default function navButtonGroupComponent() {
  return (
    <section className='btn-group'>
      <NavMenuButton />
      <NavButton />
    </section>
  )
}

