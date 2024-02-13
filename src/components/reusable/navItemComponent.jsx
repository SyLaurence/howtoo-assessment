import React from 'react'

/**
 * 
 * Component for Navigation item
 */
export default function navItemComponent({ children, style }) {
  return (
    <div className={ style }>
        { children }
    </div>
  )
}

