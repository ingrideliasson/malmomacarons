import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-red-50 py-6">
        <nav className="flex justify-center space-x-8 text-2xl text-gray-700">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-red-300 hover:text-3xl">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-red-300 hover:text-3xl">
            <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-red-300 hover:text-3xl">
            <FontAwesomeIcon icon={faTiktok} />
            </a>
        </nav>
    </footer>
  )
}
