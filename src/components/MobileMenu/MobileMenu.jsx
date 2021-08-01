import './MobileMenu.css';
import React from 'react';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
function MobileMenu({ isMobileMenuOpen, closeMobileMenu }) {

  return (
    <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu_active' : ''} `}>
      <div className={`mobile-menu__container ${isMobileMenuOpen ? 'mobile-menu__container_active' : ''} `}>
        <NavigationMobile closeMobileMenu={closeMobileMenu} />
      </div>
    </div>
  );
}

export default MobileMenu;
