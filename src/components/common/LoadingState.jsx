import React from 'react';
import './States.css';

/**
 * LoadingState Component
 * Accessible loading spinner and announcement for screen readers.
 */
export default function LoadingState({ message = 'Loading MediQ records...', height }) {
  return (
    <div 
      className="state-container" 
      style={height ? { minHeight: height } : undefined}
      role="status"
      aria-live="polite"
    >
      <div className="loading-spinner" aria-hidden="true" />
      <div className="state-title">{message}</div>
      <p className="state-description">Please wait while the healthcare system synchronizes records.</p>
    </div>
  );
}
