import React from 'react'
import HomeIcon from '../../assets/common/home-icon.svg'

/**
 * 
 * Component for footer navigation
 */
export default function navComponent() {
  return (
    <section className='nav-section'>
        <div className='nav-link-active'>
            <img src={HomeIcon} alt="Logo" />
            Home
        </div>
        <div>TOPIC 1</div>
        <div>TOPIC 2</div>
        <div>TOPIC 3</div>
        <div>TOPIC 4</div>
        <div>TOPIC 5</div>
    </section>
  )
}
