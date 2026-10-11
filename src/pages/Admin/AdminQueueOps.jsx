import React, { useState } from 'react';
import { Layers, RefreshCw, AlertOctagon, CheckCircle2, Sliders } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';
import { MOCK_ADMIN_DATA } from '../../data/mockData';

export default function AdminQueueOps() {
  const [departments, setDepartments] = useState(MOCK_ADMIN_DATA.departments);

  const handleAdjustLoad = (deptId) => {
    alert(`Triggered load balancing adjustment for department ${deptId}.`);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2 className="page-title">Queue Operations & Load Balancer</h2>
          <p className="page-subtitle">Manage OPD department throughput, overflow routing, and triage thresholds</p>
        </div>
        <button 
          type="button" 
          className="btn btn-primary btn-sm"
          onClick={() => alert('Department configuration updates will sync to backend in Milestone 2.')}
        >
          <Sliders size={16} />
          <span>Configure Triage Rules</span>
        </button>
      </div>

      <div className="mediq-card">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {departments.map((dept) => {
            const loadPercent = Math.min(100, Math.round((dept.queueCount / 15) * 100));
            const isHigh = loadPercent > 70;

            return (
              <div 
                key={dept.id} 
                style={{ 
                  border: '1px solid var(--border-color)', 
                  borderRadius: 'var(--radius-md)', 
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-surface)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div>
                    <strong style={{ fontSize: '1rem' }}>{dept.name}</strong>
                    <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                      Active Doctors: {dept.activeDoctors} • Avg Wait: {dept.avgWaitMin}m
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <StatusBadge status={dept.status} />
                    <button 
                      type="button" 
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleAdjustLoad(dept.id)}
                    >
                      <span>Rebalance</span>
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.775rem', color: 'var(--slate-600)', marginTop: '0.75rem' }}>
                  <span>Capacity Utilization</span>
                  <strong>{loadPercent}% ({dept.queueCount} patients queued)</strong>
                </div>

                <div className="dept-load-bar">
                  <div 
                    className="dept-load-fill" 
                    style={{ 
                      width: `${loadPercent}%`, 
                      backgroundColor: isHigh ? 'var(--rose-500)' : 'var(--primary-600)' 
                    }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
