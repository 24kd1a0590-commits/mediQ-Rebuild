import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Activity, 
  User, 
  Stethoscope, 
  ShieldCheck, 
  Menu, 
  X,
  Bell,
  Sparkles
} from 'lucide-react';
import './Header.css';

/**
 * Header Component
 * Top application navigation bar featuring brand identity, role fast-switcher, and responsive drawer toggle.
 */
export default function Header({ isMobileMenuOpen, onToggleMobileMenu }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isPatientActive = currentPath.startsWith('/patient');
  const isDoctorActive = currentPath.startsWith('/doctor');
  const isAdminActive = currentPath.startsWith('/admin');

  return (
    <header className="mediq-header" role="banner">
      <div className="header-left">
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={onToggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="brand-logo-link" aria-label="MediQ Home">
          <div className="brand-icon-box">
            <Activity size={22} className="brand-pulse-icon" />
          </div>
          <div className="brand-text-group">
            <span className="brand-name">Medi<span className="brand-highlight">Q</span></span>
            <span className="brand-badge">Milestone 1 Shell</span>
          </div>
        </Link>
      </div>

      <div className="header-center">
        <nav className="role-switcher-nav" aria-label="Workspace Switcher">
          <Link
            to="/patient"
            className={`role-pill ${isPatientActive ? 'active' : ''}`}
            aria-current={isPatientActive ? 'page' : undefined}
          >
            <User size={16} />
            <span>Patient</span>
          </Link>

          <Link
            to="/doctor"
            className={`role-pill ${isDoctorActive ? 'active' : ''}`}
            aria-current={isDoctorActive ? 'page' : undefined}
          >
            <Stethoscope size={16} />
            <span>Doctor</span>
          </Link>

          <Link
            to="/admin"
            className={`role-pill ${isAdminActive ? 'active' : ''}`}
            aria-current={isAdminActive ? 'page' : undefined}
          >
            <ShieldCheck size={16} />
            <span>Admin</span>
          </Link>
        </nav>
      </div>

      <div className="header-right">
        <div className="live-status-pill" title="Real-time Queue Sync Engine">
          <span className="live-dot" aria-hidden="true" />
          <span className="live-label">Queue Live</span>
        </div>

        <button 
          type="button" 
          className="header-action-btn"
          aria-label="System notifications"
          title="Notifications (Synthetic Demo)"
        >
          <Bell size={18} />
          <span className="notification-dot" />
        </button>

        <div className="synthetic-env-tag">
          <Sparkles size={14} />
          <span>Demo Data</span>
        </div>
      </div>
    </header>
  );
}
