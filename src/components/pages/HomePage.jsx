import React from 'react'
import InfoSection from '../ui/home/infoComponent'
import ContentSection from '../ui/home/contentComponent'
import NavSection from '../reusable/navComponent'
import "../../assets/css/home.css";
import GoBackButton from '../reusable/goBackComponent'

/**
 * 
 * Component for Home Page
 */
export default function HomePage() {
  return (
    <>
      <GoBackButton />
      <main className='home-container'>
          <section className='page-content'>
              <InfoSection />
              <ContentSection />
          </section>
          <NavSection />
      </main>
    </>
  )
}
