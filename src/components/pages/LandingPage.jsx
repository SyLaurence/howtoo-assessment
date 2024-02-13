import React from 'react';
import "../../assets/css/landing-page.css";
import ContentSection from '../ui/landing-page/mainContentComponent'
import PlaybarSection from '../ui/landing-page/playbarComponent'
import GoBackButton from '../reusable/goBackComponent'

/**
 * Component for Landing page
 * 
 */
export default function LandingPage() {
  return (
    <>
      <GoBackButton />
      <main className='container'>
          <ContentSection />
          <PlaybarSection />
      </main>
    </>
  )
}
