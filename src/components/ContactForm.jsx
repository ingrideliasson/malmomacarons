import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm('service_dutwpve', 'template_y32v9nm', formRef.current, 'Dv6XKIFpL3eXixO9M')
      .then(() => {
        setStatus('Message sent!');
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus('Failed to send message.');
      });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="max-w-md mx-auto space-y-8 flex flex-col items-center">
      <input name="user_name" placeholder="Your Name" required className="w-full p-2 rounded-lg border-2 border-pink-900" />
      <input name="user_email" type="email" placeholder="Your Email" required className="w-full p-2 rounded-lg border-2 border-pink-900" />
      <textarea name="message" placeholder="Your Message" required className="w-full p-2 rounded-lg border-2 border-pink-900" />
      <button type="submit" className="text-gray-700 bg-white px-4 rounded-md hover:bg-gray-300">Send</button>
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;

