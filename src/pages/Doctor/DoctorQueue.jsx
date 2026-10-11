import React, { useState } from 'react';
import { Users, PhoneCall, CheckCircle2, Search, Filter } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';
import EmptyState from '../../components/common/EmptyState';
import { MOCK_DOCTOR_DATA } from '../../data/mockData';

export default function DoctorQueue() {
  const [queue, setQueue] = useState(MOCK_DOCTOR_DATA.queueList);
  const [calledToken, setCalledToken] = useState(null);

  const handleCallPatient = (token) => {
    setCalledToken(token);
    alert(`Calling Token ${token} to Consultation Suite 104.`);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2 className="page-title">Live Patient Queue</h2>
          <p className="page-subtitle">Real-time triage ordered patient queue for Consultation Suite 104</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)', fontWeight: 600 }}>
            {queue.length} Patients Waiting
          </span>
        </div>
      </div>

      {queue.length === 0 ? (
        <EmptyState
          title="Queue is Clear"
          description="There are currently no patients waiting in your suite queue."
        />
      ) : (
        <div className="mediq-card">
          <div className="table-container">
            <table className="mediq-table" aria-label="Doctor Full Queue Table">
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Patient Demographics</th>
                  <th>Arrival Time</th>
                  <th>Triage Category</th>
                  <th>Queue Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {queue.map((item) => (
                  <tr key={item.token} style={calledToken === item.token ? { backgroundColor: 'var(--primary-50)' } : undefined}>
                    <td>
                      <strong style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--primary-700)', fontSize: '1rem' }}>
                        {item.token}
                      </strong>
                    </td>
                    <td>
                      <div><strong>{item.name}</strong></div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                        {item.age} years • {item.gender}
                      </div>
                    </td>
                    <td>{item.arrivalTime}</td>
                    <td>
                      <span style={{ 
                        fontWeight: 600, 
                        color: item.category.includes('Priority') ? 'var(--rose-600)' : 'var(--slate-700)' 
                      }}>
                        {item.category}
                      </span>
                    </td>
                    <td>
                      <StatusBadge status={item.status} />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => handleCallPatient(item.token)}
                      >
                        <PhoneCall size={14} />
                        <span>Call In</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
