import React from 'react';
import "../../assets/css/landing-page.css";
import ContentSection from '../ui/landing-page/mainContentComponent'
import PlaybarSection from '../ui/landing-page/playbarComponent'

/**
 * Component for Landing page
 * 
 */
export default function LandingPage() {
  return (
    <main className='container'>
        <ContentSection />
        <PlaybarSection />
    </main>
  )
}
