import React from 'react';
import { 
  Users, 
  Clock, 
  Activity, 
  Building2, 
  ShieldCheck, 
  Layers, 
  BarChart3,
  AlertTriangle,
  History
} from 'lucide-react';
import StatCard from '../../components/common/StatCard';
import StatusBadge from '../../components/common/StatusBadge';
import { MOCK_ADMIN_DATA } from '../../data/mockData';
import './Admin.css';

export default function AdminDashboard() {
  const admin = MOCK_ADMIN_DATA;

  return (
    <div className="page-container">
      {/* Key Administrative Metrics */}
      <section className="stats-grid" aria-label="Administrative Key Performance Indicators">
        <StatCard
          title="Total Outpatient Footfall"
          value={admin.overviewStats.totalFootfallToday}
          subtitle="Today across all 6 depts"
          icon={Users}
          variant="primary"
          trend="+12% vs yesterday"
          trendType="positive"
        />
        <StatCard
          title="Active Queued Patients"
          value={admin.overviewStats.activeQueuedPatients}
          subtitle="Hospital-wide live triage"
          icon={Layers}
          variant="warning"
          trend="38 Active Tokens"
          trendType="neutral"
        />
        <StatCard
          title="Average Wait Time"
          value={`${admin.overviewStats.averageWaitTimeMin}m`}
          subtitle="OPD target: < 20m"
          icon={Clock}
          variant="success"
          trend="Optimal Flow"
          trendType="positive"
        />
        <StatCard
          title="Rooms Occupied"
          value={admin.overviewStats.roomsOccupied}
          subtitle="Active Consultation Suites"
          icon={Building2}
          variant="purple"
        />
      </section>

      {/* Main Grid: Department Matrix + Live Audit Logs */}
      <div className="content-grid-2col">
        {/* Department Queue Load Matrix */}
        <div className="mediq-card">
          <div className="mediq-card-header">
            <h3 className="mediq-card-title">
              <Building2 size={18} />
              Department Triage & Queue Load
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
              Auto-refreshes every 30s
            </span>
          </div>

          <div className="table-container">
            <table className="mediq-table" aria-label="Department Queue Matrix">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Doctors</th>
                  <th>In Queue</th>
                  <th>Avg Wait</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {admin.departments.map((dept) => (
                  <tr key={dept.id}>
                    <td>
                      <strong>{dept.name}</strong>
                    </td>
                    <td>{dept.activeDoctors} on duty</td>
                    <td>
                      <strong>{dept.queueCount}</strong> patients
                    </td>
                    <td>{dept.avgWaitMin} mins</td>
                    <td>
                      <StatusBadge status={dept.status} size="sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live System Audit Stream */}
        <div className="mediq-card">
          <div className="mediq-card-header">
            <h3 className="mediq-card-title">
              <History size={18} />
              System Audit Event Log
            </h3>
            <StatusBadge status="Live Stream" variant="success" size="sm" />
          </div>

          <div className="audit-logs-list">
            {admin.systemAuditLogs.map((log) => (
              <div key={log.id} className="audit-log-item">
                <span className="audit-event-text">{log.event}</span>
                <span className="audit-time">{log.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
