import React from 'react'
import Logo from '../../../assets/common/logo.svg'

/**
 * 
 * Component for Home page information
 */
export default function infoComponent() {
  return (
    <section className='info-section'>
        <img src={Logo} alt="Logo" />
        <p>
            lOREM iPSUM
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl elit.
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas quam semper.
            <br/><br/>
            Donec tempus cursus magna a feugiat. Morbi scelerisque euismod aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan cursus.
            <br/><br/>
            Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. Ut eleifend sit amet justo eu laoreet.
        </p>
    </section>
  )
}
