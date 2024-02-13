import React from 'react'
import GoBackButton from '../reusable/goBackComponent'

/**
 * 
 * Component for Error Page
 */
export default function ErrorPage() {
  return (
    <>  
      <GoBackButton />
      <div className='flex flex-col gap-2' style={{ backgroundColor: '#08395B', height: '1080px' }}>
          <h1 style={{ color: 'white', margin: 0, textAlign: 'center' }}>Page not found</h1>
      </div>
    </>
  )
}
