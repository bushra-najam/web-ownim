import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // Replace with your phone number
  const message = 'Hello! I would like to get in touch.'; // Predefined message for WhatsApp

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-105 sm:p-4 sm:bottom-6 sm:right-6"
    >
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.472 14.405c-.297-.149-1.757-.867-2.03-.967-.272-.099-.471-.149-.67.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.256-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.058-.173-.297-.018-.458.13-.606.134-.134.298-.347.446-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.918-2.21-.242-.579-.489-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.522.074-.796.372-.274.297-1.044 1.02-1.044 2.487s1.07 2.877 1.22 3.075c.149.198 2.104 3.222 5.104 4.379.714.309 1.272.494 1.707.632.717.228 1.37.196 1.887.119.576-.086 1.757-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.075-.124-.272-.198-.57-.347z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.063 2.063C6.504 2.063 2.063 6.504 2.063 12.063c0 1.733.427 3.366 1.178 4.8l-1.21 4.389a.75.75 0 00.923.923l4.39-1.21a9.942 9.942 0 004.799 1.179c5.559 0 10-4.44 10-10s-4.441-10-10-10zm-8.5 10c0-4.694 3.806-8.5 8.5-8.5 4.694 0 8.5 3.806 8.5 8.5 0 4.694-3.806 8.5-8.5 8.5-1.591 0-3.082-.439-4.375-1.2l-3.158.87.87-3.158a8.468 8.468 0 01-1.2-4.375z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
