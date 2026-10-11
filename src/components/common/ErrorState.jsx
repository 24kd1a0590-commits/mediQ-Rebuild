import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import './States.css';

/**
 * ErrorState Component
 * Displays clean error recovery state with retry trigger.
 */
export default function ErrorState({
  title = 'Unable to Load Data',
  message = 'A temporary connection issue occurred while fetching the queue details.',
  onRetry
}) {
  return (
    <div className="state-container" role="alert">
      <div className="state-icon-wrap state-error-icon" aria-hidden="true">
        <AlertCircle size={26} />
      </div>
      <h3 className="state-title">{title}</h3>
      <p className="state-description">{message}</p>
      {onRetry && (
        <div className="state-actions">
          <button type="button" className="btn btn-primary btn-sm" onClick={onRetry}>
            <RefreshCw size={14} />
            <span>Try Again</span>
          </button>
        </div>
      )}
    </div>
  );
}
