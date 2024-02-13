import React from 'react'
import '../../assets/css/nav-button.css'
import PrevIcon from '../../assets/accordion-info/left-icon.svg'
import NextIcon from '../../assets/accordion-info/right-icon.svg'

/**
 * 
 * Component for Navigation button Next and Previous
 */
export default function navButtonComponent() {
  return (
    <section className='btn-section'>
        <button className='btn prev'>
            <img src={ PrevIcon } alt='Prev Icon here' />
            <br />
            PREV
        </button>
        <button className='btn next'>
            <img src={ NextIcon } alt='Next Icon here' />
            <br />
            NEXT
        </button>
    </section>
  )
}
