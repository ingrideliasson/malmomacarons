import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8">
        <nav className="flex justify-center space-x-8 text-3xl text-gray-700">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-500">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-500">
            <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-gray-500">
            <FontAwesomeIcon icon={faTiktok} />
            </a>
        </nav>
    </footer>
  )
}
