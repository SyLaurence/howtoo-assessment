import React from 'react'
import InfoSection from '../ui/home/infoComponent'
import ContentSection from '../ui/home/contentComponent'
import NavSection from '../reusable/navComponent'
import "../../assets/css/home.css";


export default function HomePage() {
  return (
    <main className='container'>
        <section className='page-content'>
            <InfoSection />
            <ContentSection />
        </section>
        <NavSection />
    </main>
  )
}
