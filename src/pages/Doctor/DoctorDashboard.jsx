import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle, 
  Clock, 
  Play, 
  Pause, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  Activity,
  Heart
} from 'lucide-react';
import StatCard from '../../components/common/StatCard';
import StatusBadge from '../../components/common/StatusBadge';
import { MOCK_DOCTOR_DATA } from '../../data/mockData';
import './Doctor.css';

export default function DoctorDashboard() {
  const doc = MOCK_DOCTOR_DATA;
  const current = doc.currentPatient;
  const [encounterState, setEncounterState] = useState('In Consultation');

  return (
    <div className="page-container">
      {/* Key Metrics Stats Grid */}
      <section className="stats-grid" aria-label="Consultation Metrics">
        <StatCard
          title="Patients Seen Today"
          value={doc.stats.completedConsultations}
          subtitle="Out of 24 allocated"
          icon={CheckCircle}
          variant="success"
          trend="+16 Done"
          trendType="positive"
        />
        <StatCard
          title="Pending in Queue"
          value={doc.stats.pendingInQueue}
          subtitle="Suite 104 Live Triage"
          icon={Users}
          variant="primary"
          trend="8 Waiting"
          trendType="neutral"
        />
        <StatCard
          title="Avg Consultation Time"
          value={`${doc.stats.avgConsultationTimeMin}m`}
          subtitle="Target: 15m/patient"
          icon={Clock}
          variant="purple"
          trend="On Track"
          trendType="positive"
        />
        <StatCard
          title="Active Clinic Room"
          value={doc.room}
          subtitle={doc.title}
          icon={Activity}
          variant="warning"
        />
      </section>

      {/* Active Patient Encounter Spotlight */}
      <div className="active-encounter-card" aria-label="Current Patient Encounter">
        <div className="encounter-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="encounter-token-pill">
              <span>Token</span>
              <span>{current.token}</span>
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>{current.name}</span>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', marginLeft: '0.5rem' }}>
                ({current.age} yrs • {current.gender})
              </span>
            </div>
          </div>
          <StatusBadge status={encounterState} variant="info" />
        </div>

        <div className="encounter-body">
          <div>
            <div style={{ fontSize: '0.775rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.05em' }}>
              Chief Complaint & Clinical Notes
            </div>
            <p style={{ color: '#f1f5f9', marginTop: '0.35rem', fontSize: '0.95rem' }}>
              {current.reason}
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.775rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.05em' }}>
              Triage Recorded Vitals
            </div>
            <div className="patient-vital-strip">
              <span className="vital-tag">BP: 132/84 mmHg</span>
              <span className="vital-tag">HR: 72 bpm</span>
              <span className="vital-tag">SpO2: 98%</span>
              <span className="vital-tag">Temp: 98.4°F</span>
            </div>
          </div>
        </div>

        <div className="encounter-actions">
          <button 
            type="button" 
            className="btn btn-primary btn-sm"
            onClick={() => setEncounterState('Consultation Completed')}
          >
            <CheckCircle2 size={16} />
            <span>Complete Encounter</span>
          </button>
          <button 
            type="button" 
            className="btn btn-secondary btn-sm"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
            onClick={() => setEncounterState('On Hold (Lab Tests)')}
          >
            <Pause size={16} />
            <span>Send for Lab Work</span>
          </button>
          <Link to="/doctor/queue" className="btn btn-outline btn-sm" style={{ color: '#7dd3fc', borderColor: '#38bdf8' }}>
            <span>Call Next Queue Token</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Next Up in Queue Preview */}
      <div className="mediq-card">
        <div className="mediq-card-header">
          <h3 className="mediq-card-title">
            <Users size={18} />
            Next Patients in Line
          </h3>
          <Link to="/doctor/queue" className="btn btn-ghost btn-sm">
            View Full Queue ({doc.queueList.length})
          </Link>
        </div>

        <div className="table-container">
          <table className="mediq-table" aria-label="Next Patients">
            <thead>
              <tr>
                <th>Token</th>
                <th>Patient Name</th>
                <th>Arrival Time</th>
                <th>Triage Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {doc.queueList.slice(0, 3).map((item) => (
                <tr key={item.token}>
                  <td>
                    <strong style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--primary-700)' }}>
                      {item.token}
                    </strong>
                  </td>
                  <td><strong>{item.name}</strong> ({item.age}y)</td>
                  <td>{item.arrivalTime}</td>
                  <td>
                    <span style={{ fontSize: '0.825rem', color: item.category.includes('Priority') ? 'var(--rose-600)' : 'var(--slate-600)', fontWeight: 600 }}>
                      {item.category}
                    </span>
                  </td>
                  <td>
                    <StatusBadge status={item.status} size="sm" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
