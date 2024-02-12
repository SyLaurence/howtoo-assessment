import React from 'react'
import NavSection from '../reusable/navComponent'
import Sidebar from '../ui/home-topics/sidebarComponent'
import SidebarContent from '../ui/home-topics/sidebarContentComponent'
import '../../assets/css/home-topics.css'

/**
 * 
 * Component for Home Topics page
 */
export default function HomeTopicsPage() {
  return (
    <main className='home-topics-main'>
        <section className='sidebar-main'>
            <Sidebar />
            <SidebarContent />
        </section>
        <NavSection />
    </main>
  )
}
