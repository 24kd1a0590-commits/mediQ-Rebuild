import React from 'react';
import { FileText, Pill, AlertCircle, Download, Clock } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';
import { MOCK_PATIENT_DATA } from '../../data/mockData';
import './Patient.css';

export default function PatientPrescriptions() {
  const prescriptions = MOCK_PATIENT_DATA.prescriptions;

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2 className="page-title">Digital Prescriptions (Rx)</h2>
          <p className="page-subtitle">Active medication regimen, dosage frequency, and refill authorizations</p>
        </div>
        <button 
          type="button" 
          className="btn btn-secondary btn-sm"
          onClick={() => alert('PDF export integration will be available in future milestones.')}
        >
          <Download size={15} />
          <span>Export Summary (PDF)</span>
        </button>
      </div>

      <div className="rx-grid">
        {prescriptions.map((rx) => (
          <div key={rx.id} className="rx-card">
            <div className="rx-card-top">
              <div>
                <div className="rx-med-name">{rx.medication}</div>
                <div className="rx-dosage">{rx.dosage}</div>
              </div>
              <StatusBadge status={rx.status} size="sm" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
              <div><strong>Prescribed By:</strong> {rx.prescribedBy}</div>
              <div><strong>Duration:</strong> {rx.duration}</div>
              <div><strong>Issued Date:</strong> {rx.date}</div>
            </div>

            <div className="rx-meta-row">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={14} />
                <span>Refills remaining: {rx.refills}</span>
              </span>
              <span style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--slate-400)' }}>
                {rx.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
