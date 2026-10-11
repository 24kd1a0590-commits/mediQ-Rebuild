import React from 'react';
import { Clock, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';

export default function DoctorSchedule() {
  const scheduleSlots = [
    { time: "08:30 AM - 10:00 AM", session: "Morning Priority Triage & Review", location: "Suite 104", status: "Completed" },
    { time: "10:00 AM - 01:00 PM", session: "General OPD Walk-in Consultations", location: "Suite 104", status: "In Progress" },
    { time: "01:00 PM - 02:00 PM", session: "Clinical Break & Chart Documentation", location: "Staff Lounge", status: "Upcoming" },
    { time: "02:00 PM - 05:00 PM", session: "Follow-up & Chronic Care Reviews", location: "Suite 104", status: "Upcoming" }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2 className="page-title">OPD Duty Schedule</h2>
          <p className="page-subtitle">Daily consultation schedule, suite allocations, and clinic timings</p>
        </div>
      </div>

      <div className="mediq-card">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {scheduleSlots.map((slot, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.25rem', 
                borderRadius: 'var(--radius-md)', 
                border: '1px solid var(--border-color)',
                backgroundColor: slot.status === 'In Progress' ? 'var(--primary-50)' : 'var(--bg-surface)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: 'var(--radius-md)', 
                  background: slot.status === 'In Progress' ? 'var(--primary-600)' : 'var(--slate-100)',
                  color: slot.status === 'In Progress' ? 'white' : 'var(--slate-600)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <Clock size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '1rem', color: 'var(--slate-900)' }}>{slot.session}</strong>
                  <div style={{ fontSize: '0.825rem', color: 'var(--slate-500)', marginTop: '0.2rem' }}>
                    {slot.time} • <MapPin size={12} style={{ verticalAlign: 'middle' }} /> {slot.location}
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <StatusBadge status={slot.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
