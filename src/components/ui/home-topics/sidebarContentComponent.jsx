import React from 'react'
import BgImage from '../../../assets/home-topics/home1-bg.svg'

/**
 * 
 * Component for Sidebar content
 */
export default function sidebarContentComponent() {
  return (
    <section className='sidebar-content'>
        <img src={BgImage} alt='Sidebar Content goes here' />
    </section>
  )
}
