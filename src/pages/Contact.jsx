import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-pink-900 border-2 border-pink-900 shadow-lg rounded-xl max-w-3xl w-full flex flex-col">

        {/* Right column: Contact Form */}
        <div className="p-8 flex flex-col items-center">
          <h2 className="text-2xl mb-6 font-montserrat text-white">Send us a message</h2>
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}