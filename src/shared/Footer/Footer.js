import React from 'react';
import './Footer.css';

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="fixed-bottom css" >
      
            Copyright© U-R-US {year} | Programed by Mario Villela Larraza & Samuel Karim Hernández
              
    </footer>
  )
}
