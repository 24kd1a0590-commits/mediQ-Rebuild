import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, ArrowUpRight } from 'lucide-react';
import StatCard from '../../components/common/StatCard';
import { MOCK_ADMIN_DATA } from '../../data/mockData';

export default function AdminAnalytics() {
  const admin = MOCK_ADMIN_DATA;

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2 className="page-title">Department Performance Analytics</h2>
          <p className="page-subtitle">Historical wait times, physician load factors, and queue clearance metrics</p>
        </div>
      </div>

      <section className="stats-grid" aria-label="Analytics KPI">
        <StatCard
          title="Overall Clearance Rate"
          value={admin.overviewStats.queueThroughputRate}
          subtitle="Target: >90%"
          icon={TrendingUp}
          variant="success"
          trend="+3.2%"
          trendType="positive"
        />
        <StatCard
          title="Average Consult Duration"
          value="14.2m"
          subtitle="Hospital standard: 15m"
          icon={Clock}
          variant="primary"
          trend="Optimal"
          trendType="positive"
        />
        <StatCard
          title="Peak Triage Hour"
          value="10:30 AM"
          subtitle="42 check-ins/hour"
          icon={BarChart3}
          variant="warning"
        />
      </section>

      <div className="mediq-card">
        <div className="mediq-card-header">
          <h3 className="mediq-card-title">
            <BarChart3 size={18} />
            Department Wait Time Distribution
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {admin.departments.map((dept) => (
            <div key={dept.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                <strong>{dept.name}</strong>
                <span style={{ color: 'var(--slate-600)' }}>{dept.avgWaitMin} minutes avg wait</span>
              </div>
              <div className="dept-load-bar" style={{ height: '8px' }}>
                <div 
                  className="dept-load-fill" 
                  style={{ 
                    width: `${Math.min(100, dept.avgWaitMin * 3.5)}%`, 
                    backgroundColor: dept.avgWaitMin > 20 ? 'var(--amber-500)' : 'var(--emerald-500)' 
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
