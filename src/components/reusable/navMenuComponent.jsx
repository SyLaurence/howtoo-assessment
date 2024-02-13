import React from 'react'
import '../../assets/css/nav-menu.css'
import BurgerIcon from '../../assets/accordion-info/burger-icon.svg'

/**
 * 
 * Component for Nav Menu
 */
export default function navMenuComponent() {
  return (
    <button className='nav-menu-btn'>
        <img src={ BurgerIcon } alt='Burger Icon here' />
    </button>
  )
}