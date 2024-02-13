import React from 'react'
import '../../assets/css/accordion-info.css'
import AccordionSidebar from '../ui/accordion-info/accordionSidebarComponent'
import AccordionContent from '../ui/accordion-info/accordionContentComponent'
import NavButtonGroup from '../reusable/navButtonGroupComponent'
import GoBackButton from '../reusable/goBackComponent'

/**
 * 
 * Component for Accordion info page
 */
export default function AccordionInfoPage() {
  return (
    <>
      <GoBackButton />
      <main className='accordion-container'>
          <AccordionSidebar />
          <AccordionContent />
          <NavButtonGroup />
      </main>
    </>
  )
}

