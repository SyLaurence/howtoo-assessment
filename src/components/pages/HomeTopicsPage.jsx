import React from 'react'
import NavSection from '../reusable/navComponent'
import Sidebar from '../ui/home-topics/sidebarComponent'
import SidebarContent from '../ui/home-topics/sidebarContentComponent'
import '../../assets/css/home-topics.css'
import GoBackButton from '../reusable/goBackComponent'

/**
 * 
 * Component for Home Topics page
 */
export default function HomeTopicsPage() {
  return (
    <>
      <GoBackButton />
      <main className='home-topics-main'>
          <section className='sidebar-main'>
              <Sidebar />
              <SidebarContent />
          </section>
          <NavSection />
      </main>
    </>
  )
}
