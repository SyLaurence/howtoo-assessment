import * as React from 'react'
import '../../assets/css/common.css'
import { Link } from 'react-router-dom'
import LandingPageImg from '../../assets/common/landing-page.svg'
import HomePageImg from '../../assets/common/home.png'
import HomeTopicsPageImg from '../../assets/common/home-topics.png'
import AccordionInfoPageImg from '../../assets/common/accordion.png'
import '../../assets/css/main.css'

/**
 * 
 * Component for Main Page that navigates with other pages
 */
export default function Main () {
    return (
        <main className='main'>
            <Link to='/landing'>
                <img src={ LandingPageImg } alt='Landing Page'/>
                <h1>Landing</h1>
            </Link>
            <Link to='/home'>
                <img src={ HomePageImg } alt='Landing Page'/>
                <h1>Home</h1>
            </Link>
            <Link to='/topics'>
                <img src={ HomeTopicsPageImg } alt='Landing Page'/>
                <h1>Topics</h1>
            </Link>
            <Link to='/info'>
                <img src={ AccordionInfoPageImg } alt='Landing Page'/>
                <h1>Info</h1>
            </Link>
        </main>
    )
}