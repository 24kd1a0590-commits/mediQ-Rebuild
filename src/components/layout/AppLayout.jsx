import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import './AppLayout.css';

/**
 * AppLayout Component
 * Primary shell wrapper ensuring responsive positioning for Header, Sidebar, and Viewport Outlet.
 */
export default function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="mediq-shell-root">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Application Header */}
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        onToggleMobileMenu={handleToggleMobileMenu} 
      />

      {/* Main Workspace Frame */}
      <div className="mediq-shell-body">
        <Sidebar 
          isOpen={isMobileMenuOpen} 
          onCloseMobile={handleCloseMobileMenu} 
        />

        <main id="main-content" className="mediq-main-viewport" tabIndex={-1}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
