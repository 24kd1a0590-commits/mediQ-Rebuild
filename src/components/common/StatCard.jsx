import React from 'react';
import './StatCard.css';

/**
 * StatCard Component
 * Displays a key performance metric with an icon, numeric value, subtitle, and optional trend.
 */
export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = 'primary',
  trend,
  trendType = 'positive'
}) {
  return (
    <div className={`stat-card stat-card-${variant}`}>
      <div className="stat-card-top">
        <div className="stat-card-label">{title}</div>
        {Icon && (
          <div className="stat-card-icon-wrap" aria-hidden="true">
            <Icon size={20} />
          </div>
        )}
      </div>

      <div className="stat-card-value">{value}</div>

      {(subtitle || trend) && (
        <div className="stat-card-footer">
          {trend && (
            <span className={`stat-trend trend-${trendType}`}>
              {trend}
            </span>
          )}
          {subtitle && <span className="stat-subtitle">{subtitle}</span>}
        </div>
      )}
    </div>
  );
}
