// components/Header.js
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Entypo } from 'react-icons/entypo';
import  '../../styles/Header.module.css'

export default function Header({ screen }) {
  const router = useRouter();

  const toggleDrawer = () => {
    // Implement drawer functionality here or navigate to a specific page if needed.
    router.push('/menu'); // example - redirect to a menu page
  };

  return (
    <div className="header-container">
      <button onClick={toggleDrawer} className="menu-button">
        <Entypo name="menu" size={35} color="black" />
      </button>
      <div className="logo-container">
        <Image src="/logo.png" alt="Logo" width={170} height={70} className="tinyLogo" />
      </div>
    </div>
  );
}
