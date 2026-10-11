import React from 'react';
import './StatusBadge.css';

/**
 * StatusBadge Component
 * Displays standardized, accessible status pills for appointments, queue tokens, and departments.
 */
export default function StatusBadge({ status, variant, size = 'md' }) {
  const normalizedStatus = (status || '').toLowerCase();

  let resolvedVariant = variant;
  if (!resolvedVariant) {
    if (['confirmed', 'active', 'optimal', 'normal', 'completed', 'operational', 'available'].includes(normalizedStatus)) {
      resolvedVariant = 'success';
    } else if (['waiting', 'in queue', 'scheduled', 'moderate load', 'next up'].includes(normalizedStatus)) {
      resolvedVariant = 'warning';
    } else if (['high wait', 'cancelled', 'emergency', 'delayed', 'offline'].includes(normalizedStatus)) {
      resolvedVariant = 'danger';
    } else if (['in consultation', 'processing', 'in progress'].includes(normalizedStatus)) {
      resolvedVariant = 'info';
    } else {
      resolvedVariant = 'neutral';
    }
  }

  return (
    <span 
      className={`status-badge badge-${resolvedVariant} badge-${size}`}
      role="status"
    >
      <span className="badge-dot" aria-hidden="true"></span>
      <span className="badge-text">{status}</span>
    </span>
  );
}
