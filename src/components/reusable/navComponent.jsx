import React from 'react'
import HomeIcon from '../../assets/common/home-icon.svg'
import '../../assets/css/nav.css'
import NavItem from './navItemComponent'

/**
 * 
 * Component for footer navigation
 */
export default function navComponent() {
  return (
    <section className='nav-section'>
        <NavItem style='nav-link-active'>
            <img src={HomeIcon} alt="Logo" />
            Home
        </NavItem>
        <NavItem> TOPIC 1 </NavItem>
        <NavItem> TOPIC 2 </NavItem>
        <NavItem> TOPIC 3 </NavItem>
        <NavItem> TOPIC 4 </NavItem>
        <NavItem> TOPIC 5 </NavItem>
    </section>
  )
}
