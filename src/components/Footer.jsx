import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import facebookIcon from '../assets/facebook-logo.png';
import instagramIcon from '../assets/instagram-logo.png';
import youtubeIcon from '../assets/youtube-logo.png';
import tiktokIcon from '../assets/tiktok-logo.png';


function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; 2024 Zapatería San Carlos. Todos los derechos reservados.</p>
      </div>
      <div className="social-icons">
      <WhatsAppButton />
      
        <a href="https://facebook.com/CalzadoSanCarlo.hn" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" style={{ width: '50px', height: '50px' }} />
        </a>
        <a href="https://www.instagram.com/calzadosancarlo/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" style={{ width: '50px', height: '50px' }} />
        </a>
        <a href="https://www.youtube.com/@calzadosancarlo8194" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" style={{ width: '50px', height: '50px' }} />
        </a>
        <a href="https://www.tiktok.com/@calzado.sancarlo" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" style={{ width: '50px', height: '50px' }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
