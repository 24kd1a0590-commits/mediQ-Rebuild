import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  UserCheck, 
  Calendar, 
  FileText, 
  AlertCircle, 
  ArrowRight,
  HeartPulse,
  Droplet
} from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';
import { MOCK_PATIENT_DATA } from '../../data/mockData';
import './Patient.css';

export default function PatientDashboard() {
  const patient = MOCK_PATIENT_DATA;

  return (
    <div className="page-container">
      {/* Live Ticket Header Card */}
      <div className="patient-ticket-card">
        <div className="ticket-left">
          <div className="token-big-badge">
            <div className="token-label">Live Token</div>
            <div className="token-number">{patient.tokenNumber}</div>
          </div>
          <div className="ticket-details">
            <div className="ticket-dept">{patient.department}</div>
            <div className="ticket-patient-name">{patient.name}</div>
            <div className="ticket-doc">Assigned: {patient.assignedDoctor}</div>
          </div>
        </div>

        <div className="ticket-right">
          <div className="ticket-wait-row">
            <span>Queue Position:</span>
            <span className="wait-val">#{patient.queuePosition} in line</span>
          </div>
          <div className="ticket-wait-row">
            <span>Est. Wait Time:</span>
            <span className="wait-val">{patient.estimatedWait}</span>
          </div>
          <div className="ticket-step-indicator">
            <Clock size={16} />
            <span>Consultation Suite 104</span>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="content-grid-2col">
        {/* Left Column: Triage Status & Guidelines */}
        <div className="mediq-card">
          <div className="mediq-card-header">
            <h3 className="mediq-card-title">
              <UserCheck size={20} className="text-primary" />
              Patient Encounter Summary
            </h3>
            <StatusBadge status={patient.status} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p>
              Your token <strong>{patient.tokenNumber}</strong> is actively queued in the OPD triage engine. Please remain in the 1st Floor Waiting Lobby near Suite 104.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ background: 'var(--slate-50)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--slate-500)', display: 'block' }}>Patient ID</span>
                <strong style={{ fontSize: '0.9rem' }}>{patient.id}</strong>
              </div>
              <div style={{ background: 'var(--slate-50)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--slate-500)', display: 'block' }}>Demographics</span>
                <strong style={{ fontSize: '0.9rem' }}>{patient.age} yrs • {patient.gender}</strong>
              </div>
              <div style={{ background: 'var(--slate-50)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--slate-500)', display: 'block' }}>Blood Type</span>
                <strong style={{ fontSize: '0.9rem' }}>{patient.bloodGroup}</strong>
              </div>
            </div>

            <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-200)', borderRadius: 'var(--radius-md)', padding: '1rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-800)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                <AlertCircle size={16} />
                <span>Next Arrival Step</span>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--primary-900)', margin: 0 }}>
                When your token is called on the lobby display monitors, proceed directly to Consultation Suite 104.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="mediq-card">
            <div className="mediq-card-header">
              <h3 className="mediq-card-title">
                <Calendar size={18} />
                Upcoming Visits
              </h3>
              <Link to="/patient/appointments" className="btn btn-ghost btn-sm">
                View All
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {patient.upcomingAppointments.slice(0, 1).map((apt) => (
                <div key={apt.id} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <strong style={{ fontSize: '0.9rem' }}>{apt.doctor}</strong>
                    <StatusBadge status={apt.status} size="sm" />
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>{apt.specialty} • {apt.date} at {apt.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mediq-card">
            <div className="mediq-card-header">
              <h3 className="mediq-card-title">
                <FileText size={18} />
                Active Prescriptions
              </h3>
              <Link to="/patient/prescriptions" className="btn btn-ghost btn-sm">
                View All
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {patient.prescriptions.slice(0, 1).map((rx) => (
                <div key={rx.id} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <strong style={{ fontSize: '0.9rem' }}>{rx.medication}</strong>
                    <StatusBadge status={rx.status} size="sm" />
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>{rx.dosage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
