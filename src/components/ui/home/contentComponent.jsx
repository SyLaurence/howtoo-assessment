import React from 'react'
import BgImage from '../../../assets/home/home1-bg.png'

/**
 * 
 * Component for Home page content
 */
export default function contentComponent() {
  return (
    <section className='content-section'>
        <img src={BgImage} alt="Background Image Content" />
    </section>
  )
}

