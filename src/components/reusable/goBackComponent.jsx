import React from 'react'
import '../../assets/css/back-button.css'
import { Link } from 'react-router-dom'

export default function goBackComponent() {
  return (
    <div className='go-back-section'>
        <Link to='/'>
            <button className='go-back-btn'>Back</button>
        </Link>
    </div>
  )
}
