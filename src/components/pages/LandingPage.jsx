import React from 'react';
import "../../assets/css/landing-page.css";
import Globe from '../../assets/landing-page/globe.svg'
import Logo from '../../assets/common/logo.svg'
import LikeIcon from '../../assets/landing-page/like-icon.svg'
import PlayBarSection from '../../assets/landing-page/playbar-minimal.png'


export default function LandingPage() {
  return (
    <div className='container'>
        <div className='content'>
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
        </div>
        <div className='playbar-options'>
            <div>
                <img src={PlayBarSection} alt="Playbar Image" />
            </div>
        </div>
    </div>
  )
}
