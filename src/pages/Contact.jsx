import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">

        {/* Left column: Address & Phone */}
        <div className="md:w-1/2 bg-gray-50 p-8 flex flex-col space-y-8 font-montserrat space-y-4">
          <h1 className="text-2xl font-montserrat text-center text-gray-700 mb-4">Get in Touch!</h1>
          <div className="text-center">
            <h3 className="text-lg font-medium">Our Address</h3>
            <p className="mt-1 text-pink-900">
              Storgatan 21<br />
              211 23, Malmö<br />
              Sweden
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="mt-1 text-pink-900">+071 234 567 89</p>
          </div>
        </div>

        {/* Right column: Contact Form */}
        <div className="md:w-1/2 p-8 flex flex-col items-center">
          <h2 className="text-2xl mb-6 font-montserrat text-gray-700">Send us a message</h2>
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}