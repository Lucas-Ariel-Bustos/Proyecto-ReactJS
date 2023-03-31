import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div>
        <hr />
        <div className='footer'>
          <div className='redes'>
            <a className='enlacesContactos' href="https://www.instagram.com" target="_blank">
              <i className="bi bi-instagram"> instagram</i>
            </a>
            <a className='enlacesContactos' href="https://www.facebook.com" target="_blank">
              <i className="bi bi-facebook"> facebook</i>
            </a> 
          </div>
          <div className='contactos'>
            <a className='enlaceContactoWhatsApp' href="https://.whatsapp.com" target="_blank">
              <i className="bi bi-whatsapp"> 231000654</i>
            </a>
            <i className="bi bi-house"> Tienda física en calle Nolose 123- Ciudad de Mendoza</i>
          </div>
        </div>
    </div>
  )
}