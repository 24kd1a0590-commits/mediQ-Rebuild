import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Stethoscope, 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  Clock, 
  Users, 
  Building2, 
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';
import StatCard from '../../components/common/StatCard';
import StatusBadge from '../../components/common/StatusBadge';
import LoadingState from '../../components/common/LoadingState';
import EmptyState from '../../components/common/EmptyState';
import ErrorState from '../../components/common/ErrorState';
import { MOCK_CLINIC_INFO } from '../../data/mockData';
import './HomePage.css';

export default function HomePage() {
  const [demoStateMode, setDemoStateMode] = useState('normal'); // 'normal' | 'loading' | 'empty' | 'error'

  return (
    <div className="page-container home-page">
      {/* Hero Welcome Banner */}
      <section className="hero-banner" aria-label="System Overview">
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>MediQ Smart Outpatient Ecosystem</span>
        </div>
        <h1 className="hero-title">
          Intelligent Healthcare Queue & Clinic Operations
        </h1>
        <p className="hero-subtitle">
          Welcome to the new clean MediQ architecture. Choose a role workspace below to inspect the specialized clinical workflows and responsive queue interfaces.
        </p>

        {/* State Simulator Controls */}
        <div className="state-simulator-bar">
          <span className="sim-label">Test UI States:</span>
          <div className="sim-buttons">
            <button
              type="button"
              className={`sim-btn ${demoStateMode === 'normal' ? 'sim-active' : ''}`}
              onClick={() => setDemoStateMode('normal')}
            >
              Normal View
            </button>
            <button
              type="button"
              className={`sim-btn ${demoStateMode === 'loading' ? 'sim-active' : ''}`}
              onClick={() => setDemoStateMode('loading')}
            >
              Loading State
            </button>
            <button
              type="button"
              className={`sim-btn ${demoStateMode === 'empty' ? 'sim-active' : ''}`}
              onClick={() => setDemoStateMode('empty')}
            >
              Empty State
            </button>
            <button
              type="button"
              className={`sim-btn ${demoStateMode === 'error' ? 'sim-active' : ''}`}
              onClick={() => setDemoStateMode('error')}
            >
              Error State
            </button>
          </div>
        </div>
      </section>

      {/* Simulated Component View */}
      {demoStateMode === 'loading' && (
        <div className="demo-state-wrapper">
          <LoadingState message="Demonstrating accessible loading state..." />
        </div>
      )}

      {demoStateMode === 'empty' && (
        <div className="demo-state-wrapper">
          <EmptyState 
            title="Demonstrating Empty Queue State"
            description="All outpatient consultation queues have been cleared. No patients currently waiting."
            actionLabel="Reset to Normal View"
            onAction={() => setDemoStateMode('normal')}
          />
        </div>
      )}

      {demoStateMode === 'error' && (
        <div className="demo-state-wrapper">
          <ErrorState 
            title="Demonstrating Resilient Error Recovery State"
            message="Simulated temporary API network timeout when querying OPD token broker."
            onRetry={() => setDemoStateMode('normal')}
          />
        </div>
      )}

      {demoStateMode === 'normal' && (
        <>
          {/* Key Metrics Stats Grid */}
          <section className="stats-grid" aria-label="Key Performance Indicators">
            <StatCard
              title="Active Queued Patients"
              value={MOCK_CLINIC_INFO.patientsInQueue}
              subtitle="Across 6 OPD wards"
              icon={Users}
              variant="primary"
              trend="-4 vs peak"
              trendType="positive"
            />
            <StatCard
              title="Average Wait Time"
              value={`${MOCK_CLINIC_INFO.averageWaitTimeMin}m`}
              subtitle="Target: under 20m"
              icon={Clock}
              variant="success"
              trend="Optimal"
              trendType="positive"
            />
            <StatCard
              title="Physicians On Duty"
              value={MOCK_CLINIC_INFO.doctorsOnDuty}
              subtitle="All suites staffed"
              icon={Activity}
              variant="purple"
              trend="100% Active"
              trendType="positive"
            />
            <StatCard
              title="Open Departments"
              value={MOCK_CLINIC_INFO.activeDepartments}
              subtitle={MOCK_CLINIC_INFO.operatingHours}
              icon={Building2}
              variant="warning"
            />
          </section>

          {/* Three Workspace Entry Portals */}
          <section className="workspaces-section" aria-label="Role Workspaces">
            <div className="section-header">
              <h2>Role Workspaces</h2>
              <p>Explore the dedicated interfaces built for each healthcare participant</p>
            </div>

            <div className="workspace-cards-grid">
              {/* Patient Workspace Card */}
              <div className="portal-card portal-patient">
                <div className="portal-card-top">
                  <div className="portal-icon-box patient-icon">
                    <User size={24} />
                  </div>
                  <StatusBadge status="Ready" variant="info" size="sm" />
                </div>
                <h3 className="portal-title">Patient Portal</h3>
                <p className="portal-desc">
                  Live token tracking, estimated wait countdowns, upcoming doctor visits, and active digital prescriptions.
                </p>
                <div className="portal-features">
                  <div className="feature-item"><CheckCircle2 size={15} /> Token #T-042 Live Status</div>
                  <div className="feature-item"><CheckCircle2 size={15} /> Prescriptions & Care Plan</div>
                  <div className="feature-item"><CheckCircle2 size={15} /> Mobile-Friendly Layout</div>
                </div>
                <Link to="/patient" className="btn btn-primary portal-btn">
                  <span>Enter Patient Workspace</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Doctor Workspace Card */}
              <div className="portal-card portal-doctor">
                <div className="portal-card-top">
                  <div className="portal-icon-box doctor-icon">
                    <Stethoscope size={24} />
                  </div>
                  <StatusBadge status="Ready" variant="success" size="sm" />
                </div>
                <h3 className="portal-title">Doctor Consultation Desk</h3>
                <p className="portal-desc">
                  Live triage queue list, current patient encounter panel, priority handling, and consultation throughput.
                </p>
                <div className="portal-features">
                  <div className="feature-item"><CheckCircle2 size={15} /> Current Encounter (T-039)</div>
                  <div className="feature-item"><CheckCircle2 size={15} /> Live Patient Queue Order</div>
                  <div className="feature-item"><CheckCircle2 size={15} /> OPD Consultation Schedule</div>
                </div>
                <Link to="/doctor" className="btn btn-primary portal-btn">
                  <span>Enter Doctor Workspace</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Admin Workspace Card */}
              <div className="portal-card portal-admin">
                <div className="portal-card-top">
                  <div className="portal-icon-box admin-icon">
                    <ShieldCheck size={24} />
                  </div>
                  <StatusBadge status="Ready" variant="warning" size="sm" />
                </div>
                <h3 className="portal-title">Administrator Center</h3>
                <p className="portal-desc">
                  Department capacity monitoring, hospital queue throughput analytics, and system audit event logs.
                </p>
                <div className="portal-features">
                  <div className="feature-item"><CheckCircle2 size={15} /> Department Load Matrix</div>
                  <div className="feature-item"><CheckCircle2 size={15} /> Wait Time Analytics</div>
                  <div className="feature-item"><CheckCircle2 size={15} /> System Audit Trail</div>
                </div>
                <Link to="/admin" className="btn btn-primary portal-btn">
                  <span>Enter Admin Workspace</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          {/* Milestone 1 Architecture Scope Card */}
          <section className="mediq-card scope-card" aria-label="Architecture Scope">
            <div className="scope-header">
              <div className="scope-icon-wrap">
                <CheckCircle2 size={22} className="text-emerald" />
              </div>
              <div>
                <h3 className="scope-title">Milestone 1 Core Shell Delivered</h3>
                <p className="scope-text">
                  Clean React + Vite foundation with CSS design tokens, accessible state handling, responsive layout grid, and role routing structure.
                </p>
              </div>
            </div>
            <div className="scope-tags">
              <span className="scope-tag">React 18</span>
              <span className="scope-tag">Vite 6</span>
              <span className="scope-tag">React Router v6</span>
              <span className="scope-tag">Vanilla CSS Tokens</span>
              <span className="scope-tag">Zero Supabase Auth Mocking</span>
              <span className="scope-tag">Realistic Synthetic Data Only</span>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
