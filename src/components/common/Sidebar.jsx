import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home,
  User, 
  Calendar, 
  FileText, 
  Stethoscope, 
  Users, 
  Clock, 
  ShieldCheck, 
  Layers, 
  BarChart3, 
  Info,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import './Sidebar.css';

/**
 * Sidebar Component
 * Context-aware vertical navigation sidebar. Dynamically highlights links based on current route.
 */
export default function Sidebar({ isOpen, onCloseMobile }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isPatientArea = currentPath.startsWith('/patient');
  const isDoctorArea = currentPath.startsWith('/doctor');
  const isAdminArea = currentPath.startsWith('/admin');

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={onCloseMobile}
          aria-hidden="true" 
        />
      )}

      <aside className={`mediq-sidebar ${isOpen ? 'open' : ''}`} aria-label="Main Navigation">
        <div className="sidebar-content">
          {/* Main Home Link */}
          <div className="sidebar-group">
            <div className="sidebar-group-title">Main Portal</div>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onCloseMobile}
            >
              <Home size={18} />
              <span>Overview & Hub</span>
            </NavLink>
          </div>

          {/* Patient Workspace Links */}
          <div className={`sidebar-group ${isPatientArea ? 'group-active' : ''}`}>
            <div className="sidebar-group-header">
              <div className="sidebar-group-title">
                <User size={14} />
                <span>Patient Workspace</span>
              </div>
              {isPatientArea && <span className="active-tag">Active</span>}
            </div>

            <NavLink
              to="/patient"
              end
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onCloseMobile}
            >
              <User size={18} />
              <span>My Queue & Status</span>
              <ChevronRight size={14} className="link-arrow" />
            </NavLink>

            <NavLink
              to="/patient/appointments"
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onCloseMobile}
            >
              <Calendar size={18} />
              <span>Appointments</span>
              <ChevronRight size={14} className="link-arrow" />
            </NavLink>

            <NavLink
              to="/patient/prescriptions"
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onCloseMobile}
            >
              <FileText size={18} />
              <span>Prescriptions (Rx)</span>
              <ChevronRight size={14} className="link-arrow" />
            </NavLink>
          </div>

          {/* Doctor Workspace Links */}
          <div className={`sidebar-group ${isDoctorArea ? 'group-active' : ''}`}>
            <div className="sidebar-group-header">
              <div className="sidebar-group-title">
                <Stethoscope size={14} />
                <span>Doctor Workspace</span>
              </div>
              {isDoctorArea && <span className="active-tag">Active</span>}
            </div>

            <NavLink
              to="/doctor"
              end
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onCloseMobile}
            >
              <Stethoscope size={18} />
              <span>Consultation Desk</span>
              <ChevronRight size={14} className="link-arrow" />
            </NavLink>

            <NavLink
              to="/doctor/queue"
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onCloseMobile}
            >
              <Users size={18} />
              <span>Live Patient Queue</span>
              <ChevronRight size={14} className="link-arrow" />
            </NavLink>

            <NavLink
              to="/doctor/schedule"
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onCloseMobile}
            >
              <Clock size={18} />
              <span>OPD Schedule</span>
              <ChevronRight size={14} className="link-arrow" />
            </NavLink>
          </div>

          {/* Admin Workspace Links */}
          <div className={`sidebar-group ${isAdminArea ? 'group-active' : ''}`}>
            <div className="sidebar-group-header">
              <div className="sidebar-group-title">
                <ShieldCheck size={14} />
                <span>Administrator</span>
              </div>
              {isAdminArea && <span className="active-tag">Active</span>}
            </div>

            <NavLink
              to="/admin"
              end
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onCloseMobile}
            >
              <ShieldCheck size={18} />
              <span>Command Center</span>
              <ChevronRight size={14} className="link-arrow" />
            </NavLink>

            <NavLink
              to="/admin/queue-ops"
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onCloseMobile}
            >
              <Layers size={18} />
              <span>Queue Operations</span>
              <ChevronRight size={14} className="link-arrow" />
            </NavLink>

            <NavLink
              to="/admin/analytics"
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onCloseMobile}
            >
              <BarChart3 size={18} />
              <span>Department Stats</span>
              <ChevronRight size={14} className="link-arrow" />
            </NavLink>
          </div>
        </div>

        {/* Sidebar Footer Info Card */}
        <div className="sidebar-footer">
          <div className="milestone-badge">
            <Sparkles size={14} />
            <span>Milestone 1 Core Shell</span>
          </div>
          <p className="sidebar-disclaimer">
            <Info size={13} />
            Synthetic demo environment. No Supabase or auth connected.
          </p>
        </div>
      </aside>
    </>
  );
}
