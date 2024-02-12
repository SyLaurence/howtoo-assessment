import React from 'react'
import PlayBarSection from '../../../assets/landing-page/playbar-minimal.png'

/**
 * Component for playbar settings
 * 
 */
export default function playbarComponent() {
  return (
    <section className='playbar-section'>
        <img className='playbar-options' src={PlayBarSection} alt="Playbar Image" />
    </section>
  )
}
