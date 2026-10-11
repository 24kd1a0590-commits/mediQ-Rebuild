import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './WorkspaceLayout.css';

/**
 * WorkspaceLayout Component
 * Renders consistent breadcrumbs, workspace title banner, and tab-based sub-navigation for each role domain.
 */
export default function WorkspaceLayout({
  roleTitle,
  roleSubtitle,
  icon: RoleIcon,
  tabs = [],
  roleBadge
}) {
  const location = useLocation();

  return (
    <div className="workspace-wrapper">
      {/* Workspace Banner */}
      <div className="workspace-header-bar">
        <div className="page-container" style={{ paddingBottom: 0 }}>
          {/* Breadcrumb Trail */}
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <span className="crumb-root">MediQ</span>
            <ChevronRight size={14} className="crumb-sep" />
            <span className="crumb-current">{roleTitle}</span>
          </nav>

          <div className="workspace-title-row">
            <div className="workspace-identity">
              {RoleIcon && (
                <div className="workspace-icon-pill" aria-hidden="true">
                  <RoleIcon size={22} />
                </div>
              )}
              <div>
                <div className="workspace-name-wrap">
                  <h1 className="workspace-heading">{roleTitle}</h1>
                  {roleBadge && (
                    <span className="role-chip">{roleBadge}</span>
                  )}
                </div>
                <p className="workspace-subtext">{roleSubtitle}</p>
              </div>
            </div>
          </div>

          {/* Subnavigation Tabs */}
          {tabs.length > 0 && (
            <div className="workspace-tabs-bar" role="tablist">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  end={tab.exact}
                  className={({ isActive }) => `workspace-tab ${isActive ? 'active' : ''}`}
                  role="tab"
                >
                  {tab.icon && <tab.icon size={16} />}
                  <span>{tab.label}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Content Area */}
      <div className="workspace-body">
        <Outlet />
      </div>
    </div>
  );
}
