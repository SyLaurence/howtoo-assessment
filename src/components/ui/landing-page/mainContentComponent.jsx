import React from 'react'
import Globe from '../../../assets/landing-page/globe.svg'
import Logo from '../../../assets/common/logo.svg'
import LikeIcon from '../../../assets/landing-page/like-icon.svg'

/**
 * Component for Content of Landing Page
 * 
 */
export default function mainContentComponent() {
  return (
    <section className='content'>
        <div className='info-details'>
            <h1 className='info-title'>LOREM IPSUM</h1>
            <img src={Logo} alt="Logo" />
            <div className='info-link'> 
                <img src={LikeIcon} alt="Like Icon" /> 
                <span className='info-link-text'>Click begin to get started.</span>
            </div>
        </div>
        <div className='info-image'>
            <img src={Globe} alt="Globe Image" />
        </div>
    </section>
  )
}