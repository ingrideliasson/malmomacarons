import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-zinc-700 py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">
      
      <div className="text-gray-300 flex flex-col items-center gap-2">
        <h3 className="text-lg font-semibold mt-2">Malmö Macarons</h3>
        <ul className="text-gray-400 text-sm">
          <li>Storgatan 21, 21194 Malmö</li>
          <li>040-40848</li>
        </ul>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="text-gray-300 font-medium">Follow Us</div>
        <nav className="flex space-x-4 text-2xl text-gray-400">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </nav>
      </div>

    </footer>
  );
}
