import React, { useState } from 'react';
import { Calendar, Plus, Filter, Search } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';
import EmptyState from '../../components/common/EmptyState';
import { MOCK_PATIENT_DATA } from '../../data/mockData';

export default function PatientAppointments() {
  const [appointments, setAppointments] = useState(MOCK_PATIENT_DATA.upcomingAppointments);
  const [showEmptyDemo, setShowEmptyDemo] = useState(false);

  const displayedList = showEmptyDemo ? [] : appointments;

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2 className="page-title">Patient Appointments</h2>
          <p className="page-subtitle">Track and manage upcoming scheduled clinic encounters</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setShowEmptyDemo((prev) => !prev)}
          >
            {showEmptyDemo ? 'Restore Appointments' : 'Simulate Empty State'}
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => alert('Appointment booking will connect to Supabase backend in Milestone 2.')}>
            <Plus size={16} />
            <span>Book New Appointment</span>
          </button>
        </div>
      </div>

      {displayedList.length === 0 ? (
        <EmptyState
          title="No Upcoming Appointments"
          description="You currently have no scheduled clinic consultations. Click below to restore demo appointments or schedule a visit."
          icon={Calendar}
          actionLabel="Restore Demo Data"
          onAction={() => setShowEmptyDemo(false)}
        />
      ) : (
        <div className="mediq-card">
          <div className="table-container">
            <table className="mediq-table" aria-label="Appointments Table">
              <thead>
                <tr>
                  <th>Appointment ID</th>
                  <th>Date & Time</th>
                  <th>Physician</th>
                  <th>Department / Specialty</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {displayedList.map((apt) => (
                  <tr key={apt.id}>
                    <td>
                      <strong style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--primary-700)' }}>
                        {apt.id}
                      </strong>
                    </td>
                    <td>
                      <div><strong>{apt.date}</strong></div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>{apt.time}</div>
                    </td>
                    <td>{apt.doctor}</td>
                    <td>{apt.specialty}</td>
                    <td>{apt.location}</td>
                    <td>
                      <StatusBadge status={apt.status} />
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
