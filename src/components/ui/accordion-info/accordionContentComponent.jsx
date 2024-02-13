import React from 'react'
import Accordion from '../../reusable/accordionComponent'

/**
 * 
 * Component for Accordion Page content
 */
export default function accordionContentComponent() {
  return (
    <section className='accordion-content'>
        <h1>Montserrat</h1>
        { [ ...Array(7).keys() ].map(
          (element) => {
            return <Accordion
                key={ element }
                title='LOREM IPSUM'
                text='Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. '
              />
            }
        ) }
    </section>
  )
}
