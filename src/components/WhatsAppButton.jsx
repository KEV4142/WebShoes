import React from 'react';
import whatsappLogo from '../assets/whatsapp-logo.png';


function WhatsAppButton() {
  const whatsappNumber = '50497874387'
  const message = '¡Hola! Estoy interesado en tus productos.';

  // const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const whatsappUrl = isMobile
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;


  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <img src={whatsappLogo} alt="WhatsApp" style={{ width: '50px', height: '50px' }} />
    </a>
  );
}

export default WhatsAppButton;
