import React from 'react'
import { useState } from 'react'
import UpIcon from '../../assets/accordion-info/up-icon.svg'
import DownIcon from '../../assets/accordion-info/down-icon.png'
import '../../assets/css/accordion.css'

/**
 * 
 * @param {string} contains the title of the accordion
 * @param {string} contains the text of the accordion
 * 
 * Component for reusable accordion 
 */
export default function accordionComponent({ title, text }) {

  const [ active, setActive ] = useState(false)

  const onClick = () => {
    setActive(!active)
  }  

  const isActive = () => (active ? 'active' : '')

  return (
    <div>
        <div className='accordion-title' onClick={ onClick }>
            { title }
            <img src={ active ? UpIcon : DownIcon } alt='Up Icon here' />
        </div>
        <div className={ 'accordion-body ' + isActive() } >{ text }</div>
    </div>
  )
}
