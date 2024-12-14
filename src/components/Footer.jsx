import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import facebookIcon from '../assets/facebook-logo.png';
import instagramIcon from '../assets/instagram-logo.png';
import youtubeIcon from '../assets/youtube-logo.png';
import tiktokIcon from '../assets/tiktok-logo.png';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container-fluid px-4">
        <div className="text-center mb-3">
          <p className="mb-0">&copy; 2024 Zapatería San Carlos. Todos los derechos reservados.</p>
        </div>
        <div className="social-icons text-center">
          <WhatsAppButton />
          <a
            href="https://facebook.com/CalzadoSanCarlo.hn"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <img
              src={facebookIcon}
              alt="Facebook"
              // className="img-fluid"
              style={{ width: '50px', height: '50px' }}
            />
          </a>
          <a
            href="https://www.instagram.com/calzadosancarlo/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              // className="img-fluid"
              style={{ width: '50px', height: '50px' }}
            />
          </a>
          <a
            href="https://www.youtube.com/@calzadosancarlo8194"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <img
              src={youtubeIcon}
              alt="YouTube"
              // className="img-fluid"
              style={{ width: '50px', height: '50px' }}
            />
          </a>
          <a
            href="https://www.tiktok.com/@calzado.sancarlo"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <img
              src={tiktokIcon}
              alt="TikTok"
              // className="img-fluid"
              style={{ width: '50px', height: '50px' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
